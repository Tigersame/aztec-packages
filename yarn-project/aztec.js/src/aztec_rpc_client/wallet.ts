import { AztecAddress, CircuitsWasm, Fr, PartialAddress, PrivateKey, TxContext } from '@aztec/circuits.js';
import {
  AztecRPC,
  ContractData,
  DeployedContract,
  ExtendedContractData,
  FunctionCall,
  L2BlockL2Logs,
  NodeInfo,
  NotePreimage,
  PackedArguments,
  SyncStatus,
  Tx,
  TxExecutionRequest,
  TxHash,
  TxReceipt,
} from '@aztec/types';

import { AuthWitnessAccountEntrypoint, CreateTxRequestOpts, Entrypoint } from '../account/entrypoint/index.js';
import { CompleteAddress } from '../index.js';

/**
 * The wallet interface.
 */
export type Wallet = Entrypoint & AztecRPC;

/**
 * A base class for Wallet implementations
 */
export abstract class BaseWallet implements Wallet {
  constructor(protected readonly rpc: AztecRPC) {}

  abstract createTxExecutionRequest(execs: FunctionCall[], opts?: CreateTxRequestOpts): Promise<TxExecutionRequest>;

  registerAccount(privKey: PrivateKey, partialAddress: PartialAddress): Promise<void> {
    return this.rpc.registerAccount(privKey, partialAddress);
  }
  registerRecipient(account: CompleteAddress): Promise<void> {
    return this.rpc.registerRecipient(account);
  }
  getAccounts(): Promise<CompleteAddress[]> {
    return this.rpc.getAccounts();
  }
  getAccount(address: AztecAddress): Promise<CompleteAddress | undefined> {
    return this.rpc.getAccount(address);
  }
  getRecipients(): Promise<CompleteAddress[]> {
    return this.rpc.getRecipients();
  }
  getRecipient(address: AztecAddress): Promise<CompleteAddress | undefined> {
    return this.rpc.getRecipient(address);
  }
  addContracts(contracts: DeployedContract[]): Promise<void> {
    return this.rpc.addContracts(contracts);
  }
  getContracts(): Promise<AztecAddress[]> {
    return this.rpc.getContracts();
  }
  simulateTx(txRequest: TxExecutionRequest, simulatePublic: boolean): Promise<Tx> {
    return this.rpc.simulateTx(txRequest, simulatePublic);
  }
  sendTx(tx: Tx): Promise<TxHash> {
    return this.rpc.sendTx(tx);
  }
  getTxReceipt(txHash: TxHash): Promise<TxReceipt> {
    return this.rpc.getTxReceipt(txHash);
  }
  getPrivateStorageAt(owner: AztecAddress, contract: AztecAddress, storageSlot: Fr): Promise<NotePreimage[]> {
    return this.rpc.getPrivateStorageAt(owner, contract, storageSlot);
  }
  getPublicStorageAt(contract: AztecAddress, storageSlot: Fr): Promise<any> {
    return this.rpc.getPublicStorageAt(contract, storageSlot);
  }
  viewTx(functionName: string, args: any[], to: AztecAddress, from?: AztecAddress | undefined): Promise<any> {
    return this.rpc.viewTx(functionName, args, to, from);
  }
  getExtendedContractData(contractAddress: AztecAddress): Promise<ExtendedContractData | undefined> {
    return this.rpc.getExtendedContractData(contractAddress);
  }
  getContractData(contractAddress: AztecAddress): Promise<ContractData | undefined> {
    return this.rpc.getContractData(contractAddress);
  }
  getUnencryptedLogs(from: number, limit: number): Promise<L2BlockL2Logs[]> {
    return this.rpc.getUnencryptedLogs(from, limit);
  }
  getBlockNumber(): Promise<number> {
    return this.rpc.getBlockNumber();
  }
  getNodeInfo(): Promise<NodeInfo> {
    return this.rpc.getNodeInfo();
  }
  isGlobalStateSynchronised() {
    return this.rpc.isGlobalStateSynchronised();
  }
  isAccountStateSynchronised(account: AztecAddress) {
    return this.rpc.isAccountStateSynchronised(account);
  }
  getSyncStatus(): Promise<SyncStatus> {
    return this.rpc.getSyncStatus();
  }
  addAuthWitness(messageHash: Fr, witness: Fr[]) {
    return this.rpc.addAuthWitness(messageHash, witness);
  }
}

/**
 * A simple wallet implementation that forwards authentication requests to a provided entrypoint implementation.
 */
export class EntrypointWallet extends BaseWallet {
  constructor(rpc: AztecRPC, protected accountImpl: Entrypoint) {
    super(rpc);
  }
  createTxExecutionRequest(executions: FunctionCall[], opts: CreateTxRequestOpts = {}): Promise<TxExecutionRequest> {
    return this.accountImpl.createTxExecutionRequest(executions, opts);
  }
}

/**
 * A wallet implementation supporting auth witnesses.
 * This wallet inserts eip1271-like witnesses into the RPC, which are then fetched using an oracle
 * to provide authentication data to the contract during execution.
 */
export class AuthWitnessEntrypointWallet extends BaseWallet {
  constructor(rpc: AztecRPC, protected accountImpl: AuthWitnessAccountEntrypoint) {
    super(rpc);
  }

  /**
   * Create a transaction request and add the auth witness to the RPC.
   * Note:  When used in simulations, the witness that is inserted could be used later by attacker with
   *        access to the RPC.
   *        Meaning that if you were to use someone elses rpc with db you could send these transactions.
   *        For simulations it would be desirable to bypass such that no data is generated.
   *
   * @param executions - The function calls to execute.
   * @param opts - The options.
   * @returns - The TxRequest
   */
  async createTxExecutionRequest(
    executions: FunctionCall[],
    opts: CreateTxRequestOpts = {},
  ): Promise<TxExecutionRequest> {
    const { txRequest, message, witness } = await this.accountImpl.createTxExecutionRequestWithWitness(
      executions,
      opts,
    );
    await this.rpc.addAuthWitness(Fr.fromBuffer(message), witness);
    return txRequest;
  }

  sign(messageHash: Buffer): Promise<Buffer> {
    return Promise.resolve(this.accountImpl.sign(messageHash));
  }

  /**
   * Signs the `messageHash` and adds the witness to the RPC.
   * This is useful for signing messages that are not directly part of the transaction payload, such as
   * approvals .
   * @param messageHash - The message hash to sign
   */
  async signAndAddAuthWitness(messageHash: Buffer): Promise<void> {
    const witness = await this.accountImpl.createAuthWitness(messageHash);
    await this.rpc.addAuthWitness(Fr.fromBuffer(messageHash), witness);
    return Promise.resolve();
  }
}

/**
 * A wallet implementation that forwards authentication requests to a provided account.
 */
export class AccountWallet extends EntrypointWallet {
  constructor(rpc: AztecRPC, protected accountImpl: Entrypoint, protected address: CompleteAddress) {
    super(rpc, accountImpl);
  }

  /** Returns the complete address of the account that implements this wallet. */
  public getCompleteAddress() {
    return this.address;
  }

  /** Returns the address of the account that implements this wallet. */
  public getAddress() {
    return this.address.address;
  }
}

/**
 * Wallet implementation which creates a transaction request directly to the requested contract without any signing.
 */
export class SignerlessWallet extends BaseWallet {
  async createTxExecutionRequest(executions: FunctionCall[]): Promise<TxExecutionRequest> {
    if (executions.length !== 1) {
      throw new Error(`Unexpected number of executions. Expected 1, received ${executions.length})`);
    }
    const [execution] = executions;
    const wasm = await CircuitsWasm.get();
    const packedArguments = await PackedArguments.fromArgs(execution.args, wasm);
    const { chainId, version } = await this.rpc.getNodeInfo();
    const txContext = TxContext.empty(chainId, version);
    return Promise.resolve(
      new TxExecutionRequest(execution.to, execution.functionData, packedArguments.hash, txContext, [packedArguments]),
    );
  }
}

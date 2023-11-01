/* Autogenerated file, do not edit! */

/* eslint-disable */

export type FixedLengthArray<T, L extends number> = L extends 0 ? never[] : T[] & { length: L };

export type Field = string;
export type u32 = string;

export interface Address {
  inner: Field;
}

export interface Point {
  x: Field;
  y: Field;
}

export interface EthAddress {
  inner: Field;
}

export interface ContractDeploymentData {
  deployer_public_key: Point;
  constructor_vk_hash: Field;
  function_tree_root: Field;
  contract_address_salt: Field;
  portal_contract_address: EthAddress;
}

export interface TxContext {
  is_fee_payment_tx: boolean;
  is_rebate_payment_tx: boolean;
  is_contract_deployment_tx: boolean;
  contract_deployment_data: ContractDeploymentData;
  chain_id: Field;
  version: Field;
}

export interface FunctionSelector {
  inner: u32;
}

export interface FunctionData {
  selector: FunctionSelector;
  is_internal: boolean;
  is_private: boolean;
  is_constructor: boolean;
}

export interface TxRequest {
  origin: Address;
  args_hash: Field;
  tx_context: TxContext;
  function_data: FunctionData;
}

export interface CallContext {
  msg_sender: Address;
  storage_contract_address: Address;
  portal_contract_address: EthAddress;
  function_selector: FunctionSelector;
  is_delegate_call: boolean;
  is_static_call: boolean;
  is_contract_deployment: boolean;
}

export interface Block {
  note_hash_tree_root: Field;
  nullifier_tree_root: Field;
  contract_tree_root: Field;
  l1_to_l2_data_tree_root: Field;
  public_data_tree_root: Field;
  global_variables_hash: Field;
}

export interface HistoricalBlockData {
  blocks_tree_root: Field;
  block: Block;
  private_kernel_vk_tree_root: Field;
}

export interface PrivateCircuitPublicInputs {
  call_context: CallContext;
  args_hash: Field;
  return_values: FixedLengthArray<Field, 4>;
  read_requests: FixedLengthArray<Field, 32>;
  pending_read_requests: FixedLengthArray<Field, 32>;
  new_commitments: FixedLengthArray<Field, 16>;
  new_nullifiers: FixedLengthArray<Field, 16>;
  nullified_commitments: FixedLengthArray<Field, 16>;
  private_call_stack: FixedLengthArray<Field, 4>;
  public_call_stack: FixedLengthArray<Field, 4>;
  new_l2_to_l1_msgs: FixedLengthArray<Field, 2>;
  encrypted_logs_hash: FixedLengthArray<Field, 2>;
  unencrypted_logs_hash: FixedLengthArray<Field, 2>;
  encrypted_log_preimages_length: Field;
  unencrypted_log_preimages_length: Field;
  historical_block_data: HistoricalBlockData;
  contract_deployment_data: ContractDeploymentData;
  chain_id: Field;
  version: Field;
}

export interface CallStackItem {
  contract_address: Address;
  public_inputs: PrivateCircuitPublicInputs;
  is_execution_request: boolean;
  function_data: FunctionData;
}

export interface PrivateCallStackItem {
  inner: CallStackItem;
}

export interface Proof {}

export interface VerificationKey {}

export interface FunctionLeafMembershipWitness {
  leaf_index: Field;
  sibling_path: FixedLengthArray<Field, 4>;
}

export interface ContractLeafMembershipWitness {
  leaf_index: Field;
  sibling_path: FixedLengthArray<Field, 16>;
}

export interface ReadRequestMembershipWitness {
  leaf_index: Field;
  sibling_path: FixedLengthArray<Field, 32>;
  is_transient: boolean;
  hint_to_commitment: Field;
}

export interface PrivateCallData {
  call_stack_item: PrivateCallStackItem;
  private_call_stack_preimages: FixedLengthArray<PrivateCallStackItem, 4>;
  proof: Proof;
  vk: VerificationKey;
  function_leaf_membership_witness: FunctionLeafMembershipWitness;
  contract_leaf_membership_witness: ContractLeafMembershipWitness;
  read_request_membership_witnesses: FixedLengthArray<ReadRequestMembershipWitness, 32>;
  portal_contract_address: EthAddress;
  acir_hash: Field;
}

export interface PrivateKernelInputsInit {
  tx_request: TxRequest;
  private_call: PrivateCallData;
}

export interface AggregationObject {}

export interface NewContractData {
  contract_address: Address;
  portal_contract_address: EthAddress;
  function_tree_root: Field;
}

export interface OptionallyRevealedData {
  call_stack_item_hash: Field;
  function_data: FunctionData;
  vk_hash: Field;
  portal_contract_address: EthAddress;
  pay_fee_from_l1: boolean;
  pay_fee_from_public_l2: boolean;
  called_from_l1: boolean;
  called_from_public_l2: boolean;
}

export interface PublicDataUpdateRequest {
  leaf_index: Field;
  old_value: Field;
  new_value: Field;
}

export interface PublicDataRead {
  leaf_index: Field;
  value: Field;
}

export interface CombinedAccumulatedData {
  aggregation_object: AggregationObject;
  read_requests: FixedLengthArray<Field, 128>;
  pending_read_requests: FixedLengthArray<Field, 128>;
  new_commitments: FixedLengthArray<Field, 64>;
  new_nullifiers: FixedLengthArray<Field, 64>;
  nullified_commitments: FixedLengthArray<Field, 64>;
  private_call_stack: FixedLengthArray<Field, 8>;
  public_call_stack: FixedLengthArray<Field, 8>;
  new_l2_to_l1_msgs: FixedLengthArray<Field, 2>;
  encrypted_logs_hash: FixedLengthArray<Field, 2>;
  unencrypted_logs_hash: FixedLengthArray<Field, 2>;
  encrypted_log_preimages_length: Field;
  unencrypted_log_preimages_length: Field;
  new_contracts: FixedLengthArray<NewContractData, 1>;
  optionally_revealed_data: FixedLengthArray<OptionallyRevealedData, 4>;
  public_data_update_requests: FixedLengthArray<PublicDataUpdateRequest, 16>;
  public_data_reads: FixedLengthArray<PublicDataRead, 16>;
}

export interface CombinedConstantData {
  block_data: HistoricalBlockData;
  tx_context: TxContext;
}

export interface KernelCircuitPublicInputs {
  end: CombinedAccumulatedData;
  constants: CombinedConstantData;
  is_private: boolean;
}

export type ReturnType = KernelCircuitPublicInputs;

export interface InputType {
  input: PrivateKernelInputsInit;
}
/* eslint-disable */
// GENERATED FILE - DO NOT EDIT, RUN yarn remake-constants
export const ARGS_LENGTH = 16;
export const RETURN_VALUES_LENGTH = 4;
export const MAX_NEW_COMMITMENTS_PER_CALL = 16;
export const MAX_NEW_NULLIFIERS_PER_CALL = 16;
export const MAX_PRIVATE_CALL_STACK_LENGTH_PER_CALL = 4;
export const MAX_PUBLIC_CALL_STACK_LENGTH_PER_CALL = 4;
export const MAX_NEW_L2_TO_L1_MSGS_PER_CALL = 2;
export const MAX_PUBLIC_DATA_UPDATE_REQUESTS_PER_CALL = 16;
export const MAX_PUBLIC_DATA_READS_PER_CALL = 16;
export const MAX_READ_REQUESTS_PER_CALL = 32;
export const MAX_NULLIFIER_KEY_VALIDATION_REQUESTS_PER_CALL = 1;
export const MAX_NEW_COMMITMENTS_PER_TX = 64;
export const MAX_NEW_NULLIFIERS_PER_TX = 64;
export const MAX_PRIVATE_CALL_STACK_LENGTH_PER_TX = 8;
export const MAX_PUBLIC_CALL_STACK_LENGTH_PER_TX = 8;
export const MAX_NEW_L2_TO_L1_MSGS_PER_TX = 2;
export const MAX_PUBLIC_DATA_UPDATE_REQUESTS_PER_TX = 16;
export const MAX_PUBLIC_DATA_READS_PER_TX = 16;
export const MAX_NEW_CONTRACTS_PER_TX = 1;
export const MAX_READ_REQUESTS_PER_TX = 128;
export const MAX_NULLIFIER_KEY_VALIDATION_REQUESTS_PER_TX = 4;
export const NUM_ENCRYPTED_LOGS_HASHES_PER_TX = 1;
export const NUM_UNENCRYPTED_LOGS_HASHES_PER_TX = 1;
export const MAX_NEW_COMMITMENTS_PER_TX_META = 8;
export const MAX_NEW_NULLIFIERS_PER_TX_META = 8;
export const MAX_PUBLIC_CALL_STACK_LENGTH_PER_TX_META = 2;
export const NUMBER_OF_L1_L2_MESSAGES_PER_ROLLUP = 16;
export const VK_TREE_HEIGHT = 3;
export const FUNCTION_TREE_HEIGHT = 5;
export const CONTRACT_TREE_HEIGHT = 16;
export const NOTE_HASH_TREE_HEIGHT = 32;
export const PUBLIC_DATA_TREE_HEIGHT = 40;
export const NULLIFIER_TREE_HEIGHT = 20;
export const L1_TO_L2_MSG_TREE_HEIGHT = 16;
export const ROLLUP_VK_TREE_HEIGHT = 8;
export const ARTIFACT_FUNCTION_TREE_MAX_HEIGHT = 5;
export const CONTRACT_SUBTREE_HEIGHT = 0;
export const CONTRACT_SUBTREE_SIBLING_PATH_LENGTH = 16;
export const NOTE_HASH_SUBTREE_HEIGHT = 6;
export const NOTE_HASH_SUBTREE_SIBLING_PATH_LENGTH = 26;
export const NULLIFIER_SUBTREE_HEIGHT = 6;
export const PUBLIC_DATA_SUBTREE_HEIGHT = 4;
export const ARCHIVE_HEIGHT = 16;
export const NULLIFIER_SUBTREE_SIBLING_PATH_LENGTH = 14;
export const PUBLIC_DATA_SUBTREE_SIBLING_PATH_LENGTH = 36;
export const L1_TO_L2_MSG_SUBTREE_HEIGHT = 4;
export const L1_TO_L2_MSG_SUBTREE_SIBLING_PATH_LENGTH = 12;
export const FUNCTION_SELECTOR_NUM_BYTES = 4;
export const MAPPING_SLOT_PEDERSEN_SEPARATOR = 4;
export const NUM_FIELDS_PER_SHA256 = 2;
export const ARGS_HASH_CHUNK_LENGTH = 32;
export const ARGS_HASH_CHUNK_COUNT = 32;
export const MAX_PACKED_PUBLIC_BYTECODE_SIZE_IN_FIELDS = 1000;
export const MAX_PACKED_BYTECODE_SIZE_PER_PRIVATE_FUNCTION_IN_FIELDS = 500;
export const MAX_PACKED_BYTECODE_SIZE_PER_UNCONSTRAINED_FUNCTION_IN_FIELDS = 500;
export const REGISTERER_CONTRACT_CLASS_REGISTERED_MAGIC_VALUE =
  0x6999d1e02b08a447a463563453cb36919c9dd7150336fc7c4d2b52f8n;
export const REGISTERER_PRIVATE_FUNCTION_BROADCASTED_MAGIC_VALUE =
  0x1b70e95fde0b70adc30496b90a327af6a5e383e028e7a43211a07bcdn;
export const REGISTERER_UNCONSTRAINED_FUNCTION_BROADCASTED_MAGIC_VALUE =
  0xe7af816635466f128568edb04c9fa024f6c87fb9010fdbffa68b3d99n;
export const L1_TO_L2_MESSAGE_LENGTH = 8;
export const L1_TO_L2_MESSAGE_ORACLE_CALL_LENGTH = 25;
export const MAX_NOTE_FIELDS_LENGTH = 20;
export const GET_NOTE_ORACLE_RETURN_LENGTH = 23;
export const MAX_NOTES_PER_PAGE = 10;
export const VIEW_NOTE_ORACLE_RETURN_LENGTH = 212;
export const CALL_CONTEXT_LENGTH = 8;
export const GLOBAL_VARIABLES_LENGTH = 4;
export const PARTIAL_STATE_REFERENCE_LENGTH = 8;
export const STATE_REFERENCE_LENGTH = 10;
export const HEADER_LENGTH = 18;
export const FUNCTION_DATA_LENGTH = 4;
export const CONTRACT_DEPLOYMENT_DATA_LENGTH = 6;
export const PRIVATE_CIRCUIT_PUBLIC_INPUTS_LENGTH = 205;
export const PRIVATE_CALL_STACK_ITEM_LENGTH = 210;
export const CONTRACT_STORAGE_UPDATE_REQUEST_LENGTH = 3;
export const CONTRACT_STORAGE_READ_LENGTH = 2;
export const PUBLIC_CIRCUIT_PUBLIC_INPUTS_LENGTH = 201;
export const GET_NOTES_ORACLE_RETURN_LENGTH = 674;
export const COMMITMENTS_NUM_BYTES_PER_BASE_ROLLUP = 2048;
export const NULLIFIERS_NUM_BYTES_PER_BASE_ROLLUP = 2048;
export const PUBLIC_DATA_WRITES_NUM_BYTES_PER_BASE_ROLLUP = 1024;
export const CONTRACTS_NUM_BYTES_PER_BASE_ROLLUP = 32;
export const CONTRACT_DATA_NUM_BYTES_PER_BASE_ROLLUP = 64;
export const CONTRACT_DATA_NUM_BYTES_PER_BASE_ROLLUP_UNPADDED = 52;
export const L2_TO_L1_MSGS_NUM_BYTES_PER_BASE_ROLLUP = 64;
export const LOGS_HASHES_NUM_BYTES_PER_BASE_ROLLUP = 64;
export enum GeneratorIndex {
  COMMITMENT = 1,
  COMMITMENT_NONCE = 2,
  UNIQUE_COMMITMENT = 3,
  SILOED_COMMITMENT = 4,
  NULLIFIER = 5,
  INITIALIZATION_NULLIFIER = 6,
  OUTER_NULLIFIER = 7,
  PUBLIC_DATA_READ = 8,
  PUBLIC_DATA_UPDATE_REQUEST = 9,
  FUNCTION_DATA = 10,
  FUNCTION_LEAF = 11,
  CONTRACT_DEPLOYMENT_DATA = 12,
  CONSTRUCTOR = 13,
  CONSTRUCTOR_ARGS = 14,
  CONTRACT_ADDRESS = 15,
  CONTRACT_LEAF = 16,
  CALL_CONTEXT = 17,
  CALL_STACK_ITEM = 18,
  CALL_STACK_ITEM_2 = 19,
  L1_TO_L2_MESSAGE_SECRET = 20,
  L2_TO_L1_MSG = 21,
  TX_CONTEXT = 22,
  PUBLIC_LEAF_INDEX = 23,
  PUBLIC_DATA_LEAF = 24,
  SIGNED_TX_REQUEST = 25,
  GLOBAL_VARIABLES = 26,
  PARTIAL_ADDRESS = 27,
  BLOCK_HASH = 28,
  SIDE_EFFECT = 29,
  TX_REQUEST = 33,
  SIGNATURE_PAYLOAD = 34,
  VK = 41,
  PRIVATE_CIRCUIT_PUBLIC_INPUTS = 42,
  PUBLIC_CIRCUIT_PUBLIC_INPUTS = 43,
  FUNCTION_ARGS = 44,
}

import * as bytecode from './contract-bytecode'

export class Constants {
  public static CONTRACT = bytecode.CONTARCT_BYTE_CODE;
    // '0x20CcbCda54FCED4b07608876d1432336Bad478B5';// local // Current address if the user selects a custom

  public static CONTRACT_ADDRESS = '0x605c0D4596fb2b41aCfd1B983841cE835EB0f211'// '0x341C4DE7F498e37743c8b65b2aDC99113E0eA8d8' 
  public static DEFAULT_NODEIP = 'https://rinkeby.infura.io/yOoJnyUNypxcLq0Ou20O' // 'http://localhost:8545'; // 'https://eth3.augur.net'; // Default node
  public static GAS_NEW_CAMPAIGN = 245000;
  public static GAS_WITHDRAW = 120000;
  public static GAS_CONTRIBUTE = 184882;
  public static UNLOCK_TIME = 2000;


  // public static ACCOUNT_ADDRESS = '0x48A105d092dCD56735CA052EA3c82ebfaB367f9b';
  // public static ACCOUNT_PASSWORD = 'ether123#';

  public static ACCOUNT_ADDRESS = '0x0206fC3499F305B41160b0cbC3b18B57301BBe79';
  public static ACCOUNT_PASSWORD = 'Ether123#';
}



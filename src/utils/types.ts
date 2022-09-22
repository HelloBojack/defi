export interface WalletState {
  name: string;
  logo: string;
  address: string;
  chainId: number;
}

export interface Token {
  id: string;
  symbol: string;
  decimals: string;
}

export interface Pair {
  token0: Token;
  token1: Token;
}

export interface Pool extends Pair {
  id: string;
  feeTier: string;
  tick: string;
  sqrtPrice: string;
}

export interface PoolHourData {
  periodStartUnix: number;
  sqrtPrice: string;
  low: string;
  high: string;
  open: string;
  close: string;
  volumeToken0: string;
  volumeToken1: string;
}

export interface Liquidity {
  id: string;
  owner: string;
  poolId: string;
  lowerTick: string;
  upperTick: string;
  amount: string;
}

export interface SupportedToken extends Token {
  usdPoolId: string;
}

export interface Market extends Pair {
  id: string;
  poolId: string;
  feeTier: string;
}

export interface DepositedLiquidity extends Liquidity {
  marketId: string;
  provider: string;
  depositBlock: string;
  endBlock: string;
  feeToken: Token;
  feePer1e6Block: string;
  remainingAmount: string;
  positionsCount: string;
  receivedFee: string;
  claimedFee: string;
  paused: boolean;
}

export interface Position {
  id: string;
  trader: string;
  liquidityId: string;
  amount: string;
  isToken0: boolean;
  tokenAmount: string;
  margin: string;
  fee: string;
  openBlock: string;
  endBlock: string;
}

export interface ClosedPosition extends Pair {
  id: string;
  valueUsd: string;
  isToken0: boolean;
  margin: string;
  marginValueUsd: string;
  feeToken: Token;
  fee: string;
  openBlock: string;
  openTxid: string;
  openSqrtPrice: string;
  profit: string;
  closeBlock: string;
  closeTxid: string;
  closeSqrtPrice: string;
}

export interface PlatformStatistic {
  liquiditiesValueUsd: string;
  positionsValueUsd: string;
}

export interface TopProvider {
  id: string;
  liquiditiesValueUsd: string;
  receivedFeeValueUsd: string;
}

export interface TopTrader {
  id: string;
  positionsValueUsd: string;
  profitValueUsd: string;
}

export interface TopPosition extends Pair {
  id: string;
  trader: string;
  valueUsd: string;
  feeValueUsd: string;
}

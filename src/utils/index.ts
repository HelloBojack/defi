import btc from "../assets/images/tokens/btc.svg";
import eth from "../assets/images/tokens/eth.svg";
import unknownToken from "../assets/images/tokens/unknown.svg";
import usdc from "../assets/images/tokens/usdc.svg";
import usdt from "../assets/images/tokens/usdt.svg";

export const TOKEN_ICONS: Record<string, string> = {
  "0xcc6a885d23c42f6e215ecff7b461df8ef857f9e9": usdt,
  "0x0ff8437bea7fb76612d99d4c8e4de5f9ab4f0086": usdc,
  "0xcd21cb0aee14bb41116ecfa459faf5e3544d9574": btc,
  "0x6dbf7dea84031c34f2b965e21462bacd434a3970": eth,
};
export const UNKNOWN_TOKEN_ICON = unknownToken;
export function uniqueArray<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}

export function getTokenIcon(tokenId: string): string {
  return TOKEN_ICONS[tokenId] ?? UNKNOWN_TOKEN_ICON;
}

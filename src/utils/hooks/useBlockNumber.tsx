import { useWeb3React } from "@web3-react/core";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
const MISSING_PROVIDER = Symbol();

const BlockNumberContext = createContext<
  { value: number } | undefined | typeof MISSING_PROVIDER
>(MISSING_PROVIDER);

export default function useBlockNumber() {
  const blockNumber = useContext(BlockNumberContext);
  if (blockNumber === MISSING_PROVIDER) {
    throw new Error(
      "BlockNumber hooks must be wrapped in a <BlockNumberProvider>"
    );
  }
  return blockNumber?.value;
}

export const BlockNumberProvider = ({ children }: { children: ReactNode }) => {
  const { provider } = useWeb3React();

  const [value, setValue] = useState<{ value: number }>();

  useEffect(() => {
    if (provider) {
      provider.getBlockNumber().then((block) => {
        setValue({ value: block });
      });
    }
  }, [provider]);

  return (
    <BlockNumberContext.Provider value={value}>
      {children}
    </BlockNumberContext.Provider>
  );
};

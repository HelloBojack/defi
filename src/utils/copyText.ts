import { message } from "antd";
import copy from "clipboard-copy";

export const copyText = (text: string) => {
  copy(text);
  message.success(`"${text}" has been copied to clipboard.`);
};

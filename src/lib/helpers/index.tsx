import { v4 as uuidv4 } from "uuid";

export function GenerateGenericCode(isSecretCode?: boolean): string {
  return isSecretCode
    ? uuidv4().replaceAll("-", "").substring(0, 4).toUpperCase()
    : uuidv4().replaceAll("-", "");
}

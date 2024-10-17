import { env } from "./env";

export function getCorrectAssetPath(path: string) {
  return env.REPOSITORY_NAME ? `/${env.REPOSITORY_NAME}${path}` : path;
}
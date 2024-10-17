import { env } from "./env";

export function getCorrectLocalAssetSrc(image: string): string {
  return process.env.NODE_ENV === "development"
    ? `${env.REPOSITORY_NAME}/${image}`
    : image;
}

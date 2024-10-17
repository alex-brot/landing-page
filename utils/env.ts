const _SHOP_URL = process.env.NEXT_PUBLIC_SHOP_URL;
const _REPOSITORY_NAME = process.env.REPOSITORY_NAME;
type Env = {
  SHOP_URL: string;
  REPOSITORY_NAME: string;
  init: () => void;
}

const env: Env = {
  SHOP_URL: _SHOP_URL!,
  REPOSITORY_NAME: _REPOSITORY_NAME!,
  init: function () {
    if (!this.SHOP_URL) {
      throw new Error("SHOP_URL is not defined in .env file");
    }
    if(!this.REPOSITORY_NAME && process.env.NODE_ENV === "production") {
      throw new Error("REPOSITORY_NAME is not defined in .env file");
    }
  },
};

export { env };

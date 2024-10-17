const _SHOP_URL = process.env.NEXT_PUBLIC_SHOP_URL;
const _REPOSITORY_NAME = process.env.NEXT_PUBLIC_REPOSITORY_NAME;
const _SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
type Env = {
  SHOP_URL: string;
  REPOSITORY_NAME: string;
  SITE_URL: string;
  init: () => void;
}

const env: Env = {
  SHOP_URL: _SHOP_URL!,
  REPOSITORY_NAME: _REPOSITORY_NAME!,
  SITE_URL: _SITE_URL!,
  init: function () {
    if (!this.SHOP_URL) {
      throw new Error("SHOP_URL is not defined in .env file");
    }
    if(!this.REPOSITORY_NAME && process.env.NODE_ENV === "production") {
      throw new Error("REPOSITORY_NAME is not defined in .env file");
    }
    if(!this.SITE_URL && process.env.NODE_ENV === "production") {
      throw new Error("SITE_URL is not defined in .env file");
    }
  },
};

export { env };

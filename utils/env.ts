const _SHOP_URL = process.env.NEXT_PUBLIC_SHOP_URL;

type Env = {
  SHOP_URL: string;
  init: () => void;
}

const env: Env = {
  SHOP_URL: _SHOP_URL!,
  init: function () {
    if (!this.SHOP_URL) {
      throw new Error("SHOP_URL is not defined in .env file");
    }
  },
};

export { env };

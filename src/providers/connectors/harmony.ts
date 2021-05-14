import { IAbstractConnectorOptions } from "../../helpers";

interface IHarmonyOptions extends IAbstractConnectorOptions {
  apiKey: string;
}

const ConnectToHarmony = async (
  HarmonyProvider: any,
  opts: IHarmonyOptions
) => {
  const provider = new HarmonyProvider(opts.apiKey);

  await provider.enable();

  return provider;
};

export default ConnectToHarmony;

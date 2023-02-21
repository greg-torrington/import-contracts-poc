import { getAirportsListContract } from '@greg-torrington/core-contracts';

export const main = async (): Promise<string> => {
  await Promise.resolve();

  console.log(getAirportsListContract);

  return 'ok';
};

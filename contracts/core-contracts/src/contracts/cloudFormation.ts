import { CloudFormationContract } from '@swarmion/serverless-contracts';

import { projectName } from '@import-swarmion-contracts/serverless-configuration';

export const httpApiResourceContract = new CloudFormationContract({
  id: 'core-httpApi',
  name: `CoreHttpApi-${projectName}`,
});

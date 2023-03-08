import LogRocket from 'logrocket';

import { isClient } from 'src/utils/next';

export const initLogRocket = () => {
  if (!isClient()) return;

  LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_ID || '');
};

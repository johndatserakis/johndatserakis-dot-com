import LogRocket from 'logrocket';

import { isDev } from 'src/utils/env';
import { isClient } from 'src/utils/next';

export const initLogRocket = () => {
  if (!isClient()) return;

  if (isDev) return;

  LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_ID || '');
};

import { extendTheme } from '@mui/joy/styles';
import { Shantell_Sans, Source_Sans_3 } from 'next/font/google';

export const sourceSans3 = Source_Sans_3({ display: 'swap', subsets: ['latin'] });
export const shantellSans = Shantell_Sans({ display: 'swap', subsets: ['latin'] });

export const theme = extendTheme({
  fontFamily: {
    body: `${sourceSans3.style.fontFamily}, var(--joy-fontFamily-fallback)`,
    display: `${shantellSans.style.fontFamily}, var(--joy-fontFamily-fallback)`,
  },
});

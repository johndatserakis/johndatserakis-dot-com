'use client';

import { CssVarsProvider, CssBaseline } from '@mui/joy';
import { RootHead } from 'src/components/main/Head';

import 'src/styles/globals.scss';
import { sourceSans3, theme } from 'src/styles/theme';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={sourceSans3.className} lang="en">
      <head>
        <RootHead />
      </head>
      <body>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          {children}
        </CssVarsProvider>
      </body>
    </html>
  );
}

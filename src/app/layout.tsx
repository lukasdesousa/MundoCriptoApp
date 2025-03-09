// RootLayout.tsx
"use client";

import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
 
const inter = Inter({
  subsets: ['latin'],
})

import { Provider } from "react-redux";
import { GlobalStyle } from "@/styles/GlobalStyle";
import { store } from "@/store/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <Provider store={store}>
          <GlobalStyle />
          {children}
          <Analytics />
        </Provider>
      </body>
    </html>
  );
}

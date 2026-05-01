import '@rainbow-me/rainbowkit/styles.css'
import './globals.css'

import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from '@/lib/config'

const qc = new QueryClient()

export const metadata = {
  title: 'Base Wallet Pro',
  other: {
    "base:app_id": "69d8a85f34c69936dc95d6d0"
  }
}

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <WagmiProvider config={config}>
          <QueryClientProvider client={qc}>
            <RainbowKitProvider>
              {children}
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  )
}

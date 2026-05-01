'use client'

import Wallet from '@/components/Wallet'
import Swap from '@/components/Swap'

export default function Home() {
  return (
    <div className="container">
      <h1>🚀 Base Wallet</h1>
      <Wallet />
      <Swap />
    </div>
  )
}

'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, useBalance } from 'wagmi'

export default function Wallet() {
  const { address } = useAccount()

  const { data } = useBalance({
    address,
  })

  return (
    <div className="card">
      <ConnectButton />
      <p>{address}</p>
      <p>ETH: {data?.formatted}</p>
    </div>
  )
}

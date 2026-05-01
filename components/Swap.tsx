'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { TOKENS } from '@/lib/tokens'

export default function Swap() {
  const { address } = useAccount()

  const [amount, setAmount] = useState('')
  const [quote, setQuote] = useState<any>(null)

  async function getQuote(val: string) {
    setAmount(val)
    if (!val || !address) return

    const sellAmount = Math.floor(Number(val) * 1e18)

    const res = await fetch(
      `https://api.0x.org/swap/v1/quote?sellToken=ETH&buyToken=USDC&sellAmount=${sellAmount}&takerAddress=${address}&chainId=8453`
    )

    const data = await res.json()
    setQuote(data)
  }

  async function swap() {
    if (!quote) return

    await (window as any).ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: address,
        to: quote.to,
        data: quote.data,
        value: quote.value || '0x0'
      }]
    })
  }

  return (
    <div className="card">
      <h3>Swap ETH → USDC</h3>

      <input
        placeholder="Amount"
        onChange={(e) => getQuote(e.target.value)}
      />

      <p>
        Receive: {quote
          ? (quote.buyAmount / 1e6).toFixed(4)
          : '--'}
      </p>

      <button onClick={swap}>Swap</button>
    </div>
  )
}

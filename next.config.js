/** @type {import('next').NextConfig} */
import { Metadata } from 'next';

export const metadata: Metadata = {
  other: {
    'base:app_id': '69f459c491ab4dbfa9e7cc50',
  },
};

export default function Home() {
  return (<div>{/* Your page content */}</div>);
}
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

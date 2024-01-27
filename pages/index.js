import Image from 'next/image'
import { Hero, Feature1 } from '../components';
import RootLayout from '../app/layout.js';

export default function Home() {
  return (
    <RootLayout>
      <main className="w-screen h-screen bg-white">
        <Hero />
        <Feature1 />

      </main>
    </RootLayout>

  )
}

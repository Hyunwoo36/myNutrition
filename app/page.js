import Image from 'next/image'
import { Hero, Feature1 } from '../components';

export default function Home() {
  return (
    <main className="w-screen h-screen bg-white">
      <Hero />
      <Feature1 />
      
    </main>
  )
}

import FoodList from '@/components/FoodList/FoodList'
import Hero from '@/components/Hero/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <FoodList />
    </main>
  )
}

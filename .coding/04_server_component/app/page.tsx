import Link from 'next/link'
import { foodList } from '@/mocks/food'
import FoodCard from '@/components/FoodCard'

export default function Home() {
    return (
        <main className="flex items-center justify-center h-full min-h-screen bg-gray-700 flex-col">
            <div className="grid gap-10 p-5">
                {foodList.map(food => {
                    return (
                        <Link key={`${food.name}_${food.description}`} href={`/detail/${food.id}`}>
                            <FoodCard
                                name={food.name}
                                description={food.description}
                                price={food.price}
                            />
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}

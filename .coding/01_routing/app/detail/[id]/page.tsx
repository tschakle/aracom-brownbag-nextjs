import React from 'react'
import { foodList } from '@/mocks/food'
import FoodCard from '@/components/FoodCard'

function FoodDetail({ params }: { params: { id: string } }) {
    return (
        <main className="flex items-center justify-center h-full min-h-screen bg-gray-700 p-5 flex-col">
            <div className="grid gap-10">
                {foodList
                    .filter(f => params.id && f.id === params.id)
                    .map(food => {
                        return (
                            <FoodCard
                                key={`${food.name}_${food.description}`}
                                name={food.name}
                                description={food.description}
                                price={food.price}
                            />
                        )
                    })}
            </div>
        </main>
    )
}

export default FoodDetail

import React from 'react'
import FoodCard from '@/components/FoodCard'

async function FoodDetail({ params }: { params: { id: string } }) {
    const food = await fetch(`http://localhost:3000/api/food/${params.id}`)
        .then(res => res.json())
        .then(data => data)

    return (
        <main className="flex items-center justify-center h-full min-h-screen bg-gray-700 p-5 flex-col">
            <div className="grid gap-10">
                {food ? (
                    <FoodCard
                        key={`${food.name}_${food.description}`}
                        name={food.name}
                        description={food.description}
                        price={food.price}
                    />
                ) : (
                    <p className="text-xl text-white">Loading...</p>
                )}
            </div>
        </main>
    )
}

export default FoodDetail

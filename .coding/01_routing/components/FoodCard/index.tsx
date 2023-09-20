import { FC, memo } from 'react'
import FavoriteButton from '../FavoriteButton'

type FoodCardProps = {
    name: string
    description?: string
    price: string
}

const FoodCard: FC<FoodCardProps> = ({ name, description = 'Mit allem!', price }) => {
    return (
        <div className="w-96 p-4 flex items-center justify-center bg-gray-800 border rounded flex-col relative">
            <FavoriteButton />
            <h1 className="text-3xl font-bold text-white">{name}</h1>
            <p className="text-white mt-1">{description}</p>
            <p className="text-white mt-3 text-xl font-bold">{`Preis: ${price}`}</p>
        </div>
    )
}

export default memo(FoodCard)

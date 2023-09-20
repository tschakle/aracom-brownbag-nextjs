type FoodProps = {
    name: string
    description?: string
    price: string
}

export const foodList: (FoodProps & { id: string })[] = [
    {
        id: '1',
        name: 'Döner',
        description: 'mit allem, Cocktailsauce und scharf',
        price: '6,40€',
    },
    {
        id: '2',
        name: 'Döner',
        description: 'mit allem, Cocktailsauce',
        price: '6,40€',
    },
    {
        id: '3',
        name: 'Falafel-Döner',
        description: 'ohne Zwiebeln, Cocktailsauce',
        price: '7,20€',
    },
    {
        id: '4',
        name: 'Dürüm',
        description: 'ohne Tomate, scharf',
        price: '7,20€',
    },
    {
        id: '5',
        name: 'Dürüm',
        description: 'Gemüsekebab',
        price: '6,40€',
    },
]

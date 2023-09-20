import { foodList } from '@/mocks/food'

export const GET = async (_request: Request, { params }: { params: { id: string } }) => {
    try {
        await new Promise(resolve => setTimeout(resolve, 3000))
        const food = foodList.find(food => food.id === params.id)
        return new Response(JSON.stringify(food), { status: 200 })
    } catch {
        return new Response('ERROR', { status: 500 })
    }
}

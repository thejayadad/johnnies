import db from "@/util/db";
import Food from "@/models/Food";

export async function GET(req) {
    await db.connect()

    try {
        const food = await Food.find({})
        return new Response(JSON.stringify(food), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

export async function POST(req) {
    await db.connect()

    try {
        const body = await req.json()
        const newFood = await Food.create(body)

        return new Response(JSON.stringify(newFood), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}
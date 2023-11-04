import db from "@/util/db";
import Food from "@/models/Food";

export async function GET(req, ctx) {
    await db.connect()
    const id = ctx.params.id
    try {
        const food = await Food.findById(id)

        return new Response(JSON.stringify(food), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}
import { NextResponse } from "next/server";


// Using response.json is valid but will give an ts error
// Dyanamic Route
export async function GET(){

    return  NextResponse.json({
        "title": "Hitting hello2 ",
        "type": "Dyanamic route"
    })

}
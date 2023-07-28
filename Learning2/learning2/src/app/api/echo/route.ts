import { NextResponse } from "next/server";


// Echo for specific parameter

    // export async function GET(request: Request){

    //     const {searchParams} = new URL(request.url)
    //     const name = searchParams.get('name')
    //     const instrument = searchParams.get("instrument")

    //     return NextResponse.json({
    //         name, instrument
    //     })

    // } 

// ---------------------------------------------------- //

// Echo for any Parameter 

    export async function GET(req : Request){

        const {searchParams} = new URL(req.url)
        const obj = Object.fromEntries(searchParams.entries())

        return NextResponse.json(obj)

    }
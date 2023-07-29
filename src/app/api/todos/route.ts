import { error } from "console";
import { NextResponse } from "next/server";

const SRC_URL ="https://jsonplaceholder.typicode.com/todos"

export async function GET(){

  
        const res = await (await fetch(SRC_URL)).json()

       
        return NextResponse.json(res)
        
} 
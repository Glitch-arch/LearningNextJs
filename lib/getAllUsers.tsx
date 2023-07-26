// import { error } from "console"

export default async function getAllUsers(url:string){

    const data = (await fetch(url)).json()
    if(!data) throw new Error("Error while fetching Users")
    return data


}
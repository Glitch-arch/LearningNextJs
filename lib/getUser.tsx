
export default async function getUser(userId:string) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    if(!res) throw new Error("Failed to fetch")
    const data = await res.json()
    return data

 
}

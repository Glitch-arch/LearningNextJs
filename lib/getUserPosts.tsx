
export default async function getUserPosts(userId:any) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    if(!res) throw new Error("Failed to fetch")
    const data = await res.json()
    return data

 
}


export default async function getUserPosts(userId:any) {

    // As 2nd param can pass cache to determine the fetching static or dyanamic 

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
        cache:'no-store'
    }  )
    if(!res) throw new Error("Failed to fetch")
    const data = await res.json()
    return data

 
}

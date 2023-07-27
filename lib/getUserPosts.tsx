
export default async function getUserPosts(userId:any) {

    // As 2nd param can pass cache to determine the fetching static or dyanamic
    // Or can use ISR and set the sec after which it will update  

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
        next: {revalidate:60}
    }  )
    if(!res) throw new Error("Failed to fetch")
    const data = await res.json()
    return data

 
}

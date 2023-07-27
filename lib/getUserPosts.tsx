
export default async function getUserPosts(userId:any) {

    // As 2nd param can pass cache to determine the fetching static or dyanamic
    // Or can use ISR and set the sec after which it will update  
    // Or can export the revalidate in layout that will apply in all pages 

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    {
        next: {revalidate:60}
    }  )

    // Changed to undifined beacuse using notfound() in pages
    if(!res) return undefined
    const data = await res.json()
    return data

 
}

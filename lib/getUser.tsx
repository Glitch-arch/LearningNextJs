
export default async function getUser(userId:string) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    
    // Changed to undifined beacuse using notfound() in pages
    if(!res) return undefined
    const data = await res.json()
    return data

 
}

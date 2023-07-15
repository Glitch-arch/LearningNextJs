
export default async function getAllUsers(url: string) {
    const res = await fetch(url)
    if(!res) throw new Error("Failed to fetch User data")
    const data = await res.json()
    return data;
  
}

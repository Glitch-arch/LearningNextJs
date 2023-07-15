import getUser from "../../../../lib/getUser"
import getAllUsers from "../../../../lib/getAllUsers"
import { Suspense } from "react"

type Params = {
    params:{
        userId:string
    }
}

export default async function userPage({params:{userId}}:Params) {
  const userData:Promise<user> = getAllUsers(`https://jsonplaceholder.typicode.com/posts`)
  const userPosts:Promise<user[]> = getUser(`https://jsonplaceholder.typicode.com/posts/?userId=${userId}`)

  const [user ,userPost] = await Promise.all([userData,userPosts])
  return (
    <div>

      <h2>{user.title}</h2>
      <br />
      <Suspense fallback={<h2>Loading</h2>} >
        <userPosts posts={userPost} />
      </Suspense>
    </div>
  )
}

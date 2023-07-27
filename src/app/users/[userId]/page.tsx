import getUser from "../../../../lib/getUser"
import getAllUsers from "../../../../lib/getAllUsers"
import { Suspense } from "react"
import getUserPosts from "../../../../lib/getUserPosts"

import { notFound } from "next/navigation"

type Params = {
    params:{
        userId:string
    }
}

export async function generateMetadata({params:{userId}}:Params){

  const userData = await getUser(userId)
  console.log(userData)

  return{
    title:  userData.name,
    description: 'This is an dyanamic meta data '
  }

}

export default async function userPage({params:{userId}}:Params) {
  
  // Here didnt use await because we want to fetch both api parrallel 
  const userData:any =  getUser(userId)
  const userPosts:any =  getUserPosts(userId)

  // used await so that we can render the data after the promise is resolved
  const [user ,userPost] = await Promise.all([userData,userPosts])
  
  // notFound() does not require you to use return notFound() due to using the TypeScript never type.
  if(!user.name) notFound()


  return (
    <div className="text-white">

      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading</h2>} >
        <div>
          {
            userPost.map((post:any)=>{
              return (<div key = {post.id}>
                <h3>{post.title}</h3>
                <p>{post.id}</p>
              </div>)
            })
          }
        </div>
      </Suspense>
    </div>
  )
}


// Implemented SSG by providing all possible pramas 
export async function generateStaticParams(){

  const userData:Promise<any> = getAllUsers("https://jsonplaceholder.typicode.com/users")
  const users = await userData
 return users.map((user:any)=>{
    const UserId = user.id
 })

}

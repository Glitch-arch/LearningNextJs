import getUser from "../../../../lib/getUser"
import getAllUsers from "../../../../lib/getAllUsers"
import { Suspense } from "react"
import getUserPosts from "../../../../lib/getUserPosts"

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

import React from 'react'
import type { Metadata } from 'next'
import getAllUsers from '../../../lib/getAllUsers'
import Link from 'next/link'

// Static meta data
export const metadata: Metadata = {
    title: 'Users',
}


export default async function UsersPage() {
    
    // promise that will be resolved into an array of user
    const userData:Promise<any[]> = getAllUsers("https://jsonplaceholder.typicode.com/users")
    const users = await userData  
    console.log(users)

    const content = (
        <section className='text-white'>
            <h2>
                <Link href='/'>Back to home</Link>
            </h2>
            <br />
            {
                users.map((user)=>{
                    return(
                        // Key is important for reconcilliation 
                        <div key={user.id}>
                            <Link href={`/users/${user.id}`} >{user.name}</Link>
                        </div>
                    )
                })
            }
        </section>
    )

    
    return (
    <div>
        {content}
    </div>
  )

    }
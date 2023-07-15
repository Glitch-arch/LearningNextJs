import React from 'react'
import type { Metadata } from 'next'
import getAllUsers from '../../../lib/getAllUsers'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Users',
}


export default async function UsersPage() {
    const userData:Promise<user[]> = getAllUsers("https://jsonplaceholder.typicode.com/posts")
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
                        <div key={user.id}>
                            <h3>{user.title}</h3>
                            <p>{user.body}</p>
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
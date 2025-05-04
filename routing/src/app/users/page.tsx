import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div>
            <ul>
                <Link href="/users/1"> <li>user 1</li></Link>
                <Link href="/users/2"> <li>user 2</li></Link>
                <Link href="/users/3"> <li>user 3</li></Link>
            </ul>
        </div>
    )
}

export default page

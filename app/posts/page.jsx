import Link from 'next/link'

async function getPostData() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
}

async function getUsersData() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
}

const Posts = async () => {

    // const posts = await getPostData();
    const [posts, users] = await Promise.all([getPostData(), getUsersData()])

  return (
    <div>
        <h1 className="text-4xl">Posts Page</h1>

        <h2 className='text-2xl'>Users</h2>

        {
            users.map((user, index) => (
                <p key={index}>{user.name}</p>
            ))
        }

        <ul className='flex flex-col gap-5'>
            {
                posts.map(post => (
                  <Link key={post.id} href={`/posts/${post.id}`}>
                    <li className='bg-gray-100 p-5 cursor-pointer'>
                        <h4 className='text-xl font-bold'>{post.title}</h4>
                        <p>{post.body}</p>

                    </li>
                  </Link>  
                ))
            }
        </ul>
    </div>
  )
}

export default Posts
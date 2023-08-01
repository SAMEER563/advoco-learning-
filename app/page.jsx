import Link from 'next/link'

const HomePage = () => {
  return (
    <div>
      <h1 className='text-4xl'>Home Page</h1>
      <p className='py-10'>This site is the dummy websites . it is used to learning the nextjS tutorial.</p>
      <Link href="/about">About Page</Link>
    </div>
  )
}

export default HomePage;

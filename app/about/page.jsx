import Link from 'next/link'

const AboutPage = () => {
  return (
    <div>
      <h1 className='text-4xl'>About Page</h1>
      <p className='py-10'>
        This is our about page.
        This site is the dummy websites . it is used to learning the nextjS tutorial.</p>
        <Link href="/">Home Page</Link>
    </div>
  )
}

export default AboutPage;

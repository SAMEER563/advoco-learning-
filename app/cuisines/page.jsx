import AddCuisines from '../components/AddCuisines'
import CuisinesList from '../components/CuisinesList'
import Link from'next/link'

async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", { cache: 'no-store' });

    if(!res.ok) {
        throw new Error ("Failed to fetch data")
    }
    return res.json();
}
const Cuisines = async () => {

   const posts = await getData();


   console.log(posts);



  return (
    <div className='text-black-500 text-lg flex-col font-bold'>
      <Link href="/">Admin Panel</Link>
        <div className='my-5 flex flex-col gap-4'>
            <h1 className='text-3xl text-blue-500 font-bold'>Cuisines List </h1>
            <AddCuisines />
        </div>

         <CuisinesList  posts = {posts}/>
    </div>
  )
}

export default Cuisines
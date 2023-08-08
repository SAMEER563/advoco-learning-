import Cuisines from "./Cuisines"
const CuisinesList = ({posts}) => {
  return (
    <ul>
        {
            posts.map(post => (
                <Cuisines key={post.id} post={post} />
            ))
        }
    </ul>
  )
}

export default CuisinesList
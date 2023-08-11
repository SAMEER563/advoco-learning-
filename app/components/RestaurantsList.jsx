import Restaurants from "./Restaurants"
const RestaurantsList = ({posts}) => {
  return (
    <ul>
        {
            posts.map(post => (
                <Restaurants key={post.id} post={post} />
            ))
        }
    </ul>
  )
}

export default RestaurantsList
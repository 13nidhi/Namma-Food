
const RestaurantCard = ({resData}) => {
    const {name, cuisines, avgRating, costForTwo, deliveryTime} = resData;
    return (
      <div className="m-4 p-4 w-[200px] bg-gray-200 rounded-lg hover:bg-gray-400">
        <img 
          className="rounded-lg"
          alt='res-logo' 
          src='https://b.zmtcdn.com/data/pictures/8/19900128/5d7423625109bc2bf975e834f2c6c355_featured_v2.jpg'/>
        <h3 className="font-bold py-3">{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{costForTwo / 100} FOR TWO</h4>
        <h4>{avgRating} stars</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    )
  }

  //Higher Order Component

  //input - RestaurentCard ==>> RestaurentcardPromoted

  export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute  bg-black text-white rounded-md">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }

  export default RestaurantCard;
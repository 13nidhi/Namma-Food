import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentsMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
    const {resId} = useParams();
    console.log(resId);
    
    //by using custom hook we are fetching data from API 
    const resInfo = useRestaurentMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

     if (resInfo === null) return <Shimmer /> 
         const {name, cuisines, costForTwo } = resInfo?.cards[0]?.card?.card?.info;

         const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
         console.log("item card data",resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

         const categories = 
            resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (c)=> c.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            )
            console.log("category filtered", categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")} - {costForTwo}
            </p>
            {/* categories Accordian*/} 
            {categories.map((category, index)=> (
                <RestaurantCategory 
                    key={category?.card?.card.title} 
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                    
                    />)
                )}
        </div>
    )
}

export default RestaurantMenu;  

import { useState, useEffect } from "react";
import RestaurantCard, {withPromotedLabel} from "./RestaurentCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";  

const Body = () => {
  //state variable: super powerful variable
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("Body Rendered",ListOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.895701&lng=77.657036&page_type=DESKTOP_WEB_LISTING");
    
    const json = await data.json();

    console.log("json data", json);
    //console.log("bla bla",json.data.cards[2].data.data.cards);
    // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    // setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log("ListOfRestaurants",ListOfRestaurants);
  }

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false){
    return (
      <h1>Looks like you're offline!! Please check your internet connection;</h1>
    )
  }
    return ListOfRestaurants.length === 0 ? (
      <Shimmer />
    )
    :(
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
          <input 
            type="text" 
            className="border border-solid border-black" 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
            <button className="px-4 py-1 m-4 bg-green-200 rounded-lg"
              onClick={() => {
              //Filter the  restaurent card and update the UI
              console.log(searchText);
              const filteredRestaurants = ListOfRestaurants.filter(
                (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
              )
              setFilteredRestaurant(filteredRestaurants);
            }}>
              Search
            </button>
          </div>
          <div className="search m-4 p-4 flex items-center">
            <button 
              className="px-4 py-2 bg-gray-200 rounded-lg"
              onClick={() => {
                const FilteredList = ListOfRestaurants.filter((res) => res.data.rating > 4)
                setFilteredRestaurant(FilteredList);
              }}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
        <div className="res-container flex flex-wrap m-4">
        {filteredRestaurant.map((item)=> (
         <Link 
          key={item?.info.id}
          to={"/restaurents/"+item?.info.id} 
          >
            { /** if the restaurent is promoted then add a promoted  */
              item?.info.promoted ? (
                <RestaurantCardPromoted resData={item}/> 
              ) : <RestaurantCard resData={item?.info}/>
            }
            
          </Link>
        ))}      
        </div>
      </div>
    );
  }

  export default Body;

          {/* <div className="res-container">
          <RestaurantCard 
            resName="Meghana Food"
            cuisins="Biryani, North Indian, Asian"
            rating={3.8}
          />
          <RestaurantCard 
            resName="KFC"
            cuisins="Burger, Fast Food"
            rating={4.5}
          />
          <RestaurantCard 
            resName="Dominos"
            cuisins="Burger, Fast Food"
            rating={4.0}
          />
            <RestaurantCard 
            resName="piZZa HUT"
            cuisins="Burger, Fast Food"
            rating={2.5}
          />
            <RestaurantCard 
            resName="A2B"
            cuisins="Burger, Fast Food"
            rating={4.1}
          /> */}


  //           // Normal JS Variable
  // let ListOfRestaurantsJs = [
  //   {
  //    data: {
  //       id: "334475",
  //       resName: "Meghana Food",
  //       cuisins: "Biryani, North Indian, Asian",
  //       rating: "3.8",
  //     } 
  //   },
  //   {
  //     data: {
  //        id: "334476",
  //        resName: "Dominos",
  //        cuisins: " North Indian, Asian",
  //        rating: "4.5",
  //      } 
  //    },
  //    {
  //     data: {
  //        id: "334477",
  //        resName: "MCD",
  //        cuisins: " North Indian, Asian",
  //        rating: "4.1",
  //      } 
  //    },
  // ];
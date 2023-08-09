import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    //console.log("item list DataTransfer", items);
    return (
        // <div>Category Items</div>
        <div>
           {items.map((item) => (
            <div 
                key={item.card.info.id} 
                className="p-2 m-2 border border-gray-200 border-b-2 text-left flex"
            >
              <div className="w-9/12">
                 <div className="py-2">
                    <span>{item.card.info.name}</span>
                    <span> -  ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                 </div>
                    <p className="text-xs">{item.card.info.description}</p>
              </div>
              
              <div className="w-3/12 p-4">
                <div className="absolute">
                    <button className="p-1 bg-black text-white rounded shadow-lg mx-7 ">Add +</button>
                </div>
              <img src={CDN_URL + item.card.info.imageId} alt="img"  />
              </div>
            </div>
           ))}
        </div>
    )
}   

export default ItemList;
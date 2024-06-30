import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";


export default function RestaurantCard ({restaurant}){
    return(
        <div className="rounded-lg border bg-white text-gray-900 shadow-sm group" key={restaurant.id}>
        <div className="p-0">
          <Link className="block inset-0 z-10" to={`/restaurant/${restaurant.id}`}>
            <img
              src={restaurant.image}
              alt="Restaurant Image"
              className="object-cover w-full h-48 rounded-t-lg group-hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
        <div className="flex items-center p-4 justify-between overflow-hidden">
          <div className="overflow-hidden">
            <h3 className="text-lg font-medium truncate">{restaurant.name}</h3>
            <p className="text-sm text-gray-500 truncate">{restaurant.cuisine}</p>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
              <FaRegStar />
            <span className="text-sm font-medium">{restaurant.rating}</span>
          </div>
        </div>
      </div>
  
    );
}
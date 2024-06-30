import { useContext, useEffect, useState } from "react"
import { restaurantData } from "../../assets/dummydata";
import { useParams } from "react-router-dom";
import { FaRegStar, FaStar } from "react-icons/fa";
import MenuItem from "../../components/MenuItem";
import UserReview from "../../components/UserReview";
import UserContext from "../../utils/UserContext";

export default function Restaurant() {

    const {id} = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const items = restaurant?.menu;
    const { loggedInUser } = useContext(UserContext);

    useEffect(()=>{
        setRestaurant(restaurantData.find(restaurant => restaurant.id == id));
        setLoading(false);
    },[])

    if (loading) {
        return <p>Loading...</p>;
    }

    const handleEditItem = (itemId) => {
      // Implement edit functionality here
   };

   const handleDeleteItem = (itemId) => {
      const updatedMenu = restaurant.menu.filter(item => item.id !== itemId);
      const updatedRestaurant = { ...restaurant, menu: updatedMenu };
      setRestaurant(updatedRestaurant);
      // Update backend or database here
   };


    const groupedByMealType = items.reduce((acc, item) => {
        item.mealType.forEach(meal => {
            if (!acc[meal]) {
                acc[meal] = [];
            }
            acc[meal].push(item);
        });
        return acc;
    }, {});

  return (
          <div className="flex-1 py-12 md:py-16 mx-auto grid gap-8 mx-8 px-4 md:px-6 md:grid-cols-5">
             <div className="col-span-5 xl:col-span-3 grid gap-6">
                <div className="rounded-lg border w-full bg-card text-card-foreground shadow-sm group" data-v0-t="card">
                   <div className="p-0">
                    <img src={restaurant.image} alt="Restaurant Image" className="object-cover w-full aspect-video rounded-t-lg group-hover:opacity-80 transition-opacity"/>
                    </div>
                   <div className="flex flex-col items-center p-6 md:p-8">
                         <div className="flex items-center justify-between">
                            <div>
                               <h1 className="text-3xl font-bold">{restaurant.name}</h1>
                               <p className="text-sm text-muted-foreground">{restaurant.address}</p>
                            </div>
                         </div>
                         <hr className="h-px my-8 bg-gray-300 border-none dark:bg-gray-600"/>
                         <div className="grid w-full sm:px-10 grid-cols-1 md:grid-cols-2 md:gap-x-12">
                         {Object.keys(groupedByMealType).map(mealType => (
                            <div className="grid gap-4 mb-5" key={mealType}>
                               <h2 className="text-2xl font-medium">{mealType}</h2>
                               <ul className="grid gap-4 items-start">
                               {groupedByMealType[mealType].map(item => (
                                 <MenuItem item={item} restaurant={restaurant} loggedInUser={loggedInUser} key={item.id}/>
                               ))}
                               </ul>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-span-5 xl:col-span-2">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                   <div className="flex flex-col space-y-1.5 p-6">
                      <h1 className="whitespace-nowrap text-2xl font-bold leading-none tracking-tight">{restaurant.name}</h1>
                      <h2 className="text-sm font-semibold text-muted-foreground">{restaurant.cuisine} Cuisine</h2>
                   </div>
                   <div className="p-6">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-1 text-yellow-500">
                         {[...Array(5)].map((_, i) =>(
                           restaurant.rating >= i+1 ? <FaStar  key={i} className="text-yellow-400" /> : <FaRegStar  key={i} className="text-yellow-400" />
                           ))}                            
                           <span className="text-md font-medium">{restaurant.rating}</span>
                         </div>
                         <div>
                         <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-amber-600 hover:text-white border border-amber-700 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 m-2 ">Reserve</button>
                         
                         <button type="button" class=" inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 text-red-600 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 m-2">
                           Delete
                         </button>
                         </div>
                      </div>
                      <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4"></div>
                      <div className="grid gap-4">
                         <div>
                            <h2 className="text-2xl font-medium">About</h2>
                            <p className="text-muted-foreground">The {restaurant.name} is a cozy {restaurant.cuisine} restaurant serving classic dishes in a charming setting. With a focus on fresh, seasonal ingredients, the menu offers a taste of authentic {restaurant.cuisine} cuisine.</p>
                         </div>
                         <div>
                            <h2 className="text-2xl font-medium">location</h2>
                            <p className="text-muted-foreground">{restaurant.city}, {restaurant.address}</p>
                         </div>
                         <div>
                            <h2 className="text-2xl font-medium">Hours</h2>
                            <p className="text-muted-foreground">Monday - Friday: 11am - 10pm
                                <br></br>
                                Saturday - Sunday: 10am - 11pm
                            </p>
                         </div>
                         <div>
                           <br></br>
                           <h2 className="text-2xl font-medium my-4">User Reviews</h2>
                           {restaurant.reviews && restaurant.reviews.length > 0 ? (
                              <div className="space-y-4">
                              {restaurant.reviews.map((review, index) => (
                                 <UserReview review={review} key={index} />
                              ))}
                           </div>
                           
                           ) : (
                              <p className="text-muted-foreground">No reviews yet.</p>
                           )}
                        </div>

                      </div>
                   </div>
                </div>
             </div>
          </div>
  )
}

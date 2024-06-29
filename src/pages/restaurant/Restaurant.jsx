import { useEffect, useState } from "react"
import { restaurantData } from "../../assets/dummydata";
import { useParams } from "react-router-dom";

export default function Restaurant() {

    const {id} = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const items = restaurant?.menu;

    useEffect(()=>{
        console.log(id);
        setRestaurant(restaurantData.find(restaurant => restaurant.id == id));
        setLoading(false);
    },[])

    if (loading) {
        return <p>Loading...</p>;
    }

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
          <div className="flex-1 py-12 md:py-16 container grid gap-8 px-4 md:px-6 md:grid-cols-2">
             <div className="grid gap-6">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm group" data-v0-t="card">
                   <div className="p-0">
                    <img src={restaurant.image} width="800" height="450" alt="Restaurant Image" className="object-cover aspect-video rounded-t-lg group-hover:opacity-80 transition-opacity"/>
                    </div>
                   <div className="flex items-center p-6 md:p-8">
                      <div className="flex flex-col gap-4">
                         <div className="flex items-center justify-between">
                            <div>
                               <h1 className="text-3xl font-bold">{restaurant.name}</h1>
                               <p className="text-sm text-muted-foreground">{restaurant.address}</p>
                            </div>
                         </div>
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         {Object.keys(groupedByMealType).map(mealType => (
                            <div className="grid gap-4" key={mealType}>
                               <h2 className="text-2xl font-medium">{mealType}</h2>
                               <ul className="grid gap-4">
                               {groupedByMealType[mealType].map(item => (

                                  <li className="flex items-center justify-between" key={item.id}>
                                     <div className="flex items-center gap-4">
                                        <img src={item.image} alt={item.name} className="rounded-md object-cover w-16 h-16" />
                                     <span>{item.name}</span>
                                     </div>
                                     <span>${item.caloriesPerServing}</span>
                                  </li>

                               ))}
                               </ul>
                            </div>
                         ))}
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="hidden md:block">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                   <div className="flex flex-col space-y-1.5 p-6">
                      <h1 className="whitespace-nowrap text-2xl font-bold leading-none tracking-tight">{restaurant.name}</h1>
                      <h2 className="text-sm font-semibold text-muted-foreground">{restaurant.cuisine} Cuisine</h2>
                   </div>
                   <div className="p-6">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-1 text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                               <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <span className="text-sm font-medium">{restaurant.rating}</span>
                         </div>
                         <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Reserve</button>
                      </div>
                      <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full my-4"></div>
                      <div className="grid gap-4">
                         <div>
                            <h2 className="text-2xl font-medium">About</h2>
                            <p className="text-muted-foreground">The {restaurant.name} is a cozy {restaurant.cuisine} restaurant serving classic dishes in a charming setting. With a focus on fresh, seasonal ingredients, the menu offers a taste of authentic {restaurant.cuisine} cuisine.</p>
                         </div>
                         <div>
                            <h2 className="text-2xl font-medium">Location</h2>
                            <p className="text-muted-foreground">{restaurant.address}</p>
                         </div>
                         <div>
                            <h2 className="text-2xl font-medium">Hours</h2>
                            <p className="text-muted-foreground">Monday - Friday: 11am - 10pm
                                <br></br>
                                Saturday - Sunday: 10am - 11pm</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
  )
}



export default function MenuItem({item, restaurant, loggedInUser}){

    const handleDeleteItem = (id)=>{
        
    }
    return(
        <div className="relative grid grid-cols-4">
            <div className="col-span-3">
                <li className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="rounded-md object-cover w-16 h-16" />
                        <span>{item.name}</span>
                    </div>
                    <span>${item.price}</span>
                </li>
            </div>
            {restaurant.owner === loggedInUser?.email && (
            <div className="col-span-1 absolute top-2 right-2 flex flex-col gap-2">
                <button
                    onClick={() => handleEditItem(item.id)}
                    className="text-blue-500 hover:text-blue-700"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                >
                    Delete
                </button>
            </div>
            )}
        </div>
    )
}
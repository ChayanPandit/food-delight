

export default function MenuItem({item}){
    return(
        <li className="flex items-center justify-between">
        <div className="flex items-center gap-4">
           <img src={item.image} alt={item.name} className="rounded-md object-cover w-16 h-16" />
        <span>{item.name}</span>
        </div>
        <span>${item.price}</span>
     </li>

    )
}
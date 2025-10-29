export default function Foodcart({foodVal}){
    return(
        <div className="flex-shrink-0 w-[180px]">
        <a href={foodVal?.action?.link}>
        <img className="w-36 h-44 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + foodVal?.imageId}></img>
        </a>
        </div>
    )
}
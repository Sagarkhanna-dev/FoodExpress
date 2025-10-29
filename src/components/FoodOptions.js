import { imageGridCards } from "../../util/FoodData"
import Foodcart from "./Foodcart"

// Relationship of components
// Home.js -> FoodOptions.js -> Foodcart.js
export default function FoodOptions(){
    return(
        <div className="w-[80%] mx-auto mt-20 overflow-x-auto">
        <div className="grid grid-rows-2 grid-flow-col gap-6">
            {
                imageGridCards.map((foodVal) => <Foodcart key={foodVal.id} foodVal={foodVal}/>)
            }
        </div>
        </div>
    )
}
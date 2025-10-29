import { Outlet } from "react-router";
import RestaurantHeader from "./NextHead";

export default function SecondaryHome(){
    return(
        <>
        <RestaurantHeader/>
        <Outlet></Outlet>
        </>
    )
}
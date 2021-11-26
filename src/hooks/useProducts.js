// import { AuthContext } from "../../App";
import { useContext } from "react";
import { ProductContext } from "../components/ProductsList";

export const useProducts = () => {
    const context = useContext(ProductContext)
    return context
}
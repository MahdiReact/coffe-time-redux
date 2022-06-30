import axios from "axios";

const DRINKS_URL = "http://localhost:9000";

//get all drinks from db
//http://localhost:9000/drinks
export const getAllDrinks = () => {
    const url = `${DRINKS_URL}/drinks`;
    return axios.get(url);
}

//add a new drink to db
//http://localhost:9000/drinks
export const addDrink = (newDrink) => {
    const url = `${DRINKS_URL}/drinks`;
    return axios.post(url , newDrink);
}

//editing  a  drink info
//http://localhost:9000/drinks/:drinkId
export const editDrink = (drinkId , editedDrink) => {
    const url = `${DRINKS_URL}/drinks/${drinkId}`;
    return axios.put(url,editedDrink);
}

//delete a drink
//http://localhost:9000/drinks/:drinkId
export const deleteDrink = (drinkId) => {
    const url = `${DRINKS_URL}/drinks/${drinkId}`;
    return axios.delete(url);
}
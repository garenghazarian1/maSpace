import { useEffect, useState } from "react"
import RecipHeader from "../recipes/RecipHeader"
import RecipLayout from "../recipes/RecipLayout"
import RecipMeal from "../recipes/RecipMeal"
import RecipSearchBar from "../recipes/RecipSearchBar"




export default function Recipes() {

const [list, setList] = useState([]);
const [ingredients, setIngredients] = useState([])
const [searchQuery, setSearchQuery] = useState("");
const [meals, setMeals] = useState("");
//getIngredient func start 
  const getIngredient = async ()=> {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
    const data = await response.json();
   
    const list = data.meals.map((meal)=> meal.strIngredient.trim().toLowerCase()
    );
    setList(list);
  }
  //getIngredient func end 
 //useEffect func start 
  useEffect(() => {
    getIngredient();
    
  }, [])
  //useEffect func end 
  useEffect(() => {
    
    getMeals();
  }, [searchQuery])


  const getMeals = async ()=> {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + searchQuery);
    const data = await response.json();
    setMeals(data.meals);
   
   
   
    setList(meals);
  }

const handlerSearch = (e)=>{
const value = e.target.value.trim().toLowerCase();

if(!value || value.length < 2 ){
  return;
}
const findIngredients = list.filter((item)=>item.includes(value));
setIngredients(findIngredients);


};
const handlerSelectIngredient = (e)=>{
  const value = e.target.textContent;
  setSearchQuery(value);
  e.target.reset();
  setIngredients([]);
  
};

  return (
    <RecipLayout>
        <RecipHeader/>
        <RecipSearchBar onChange={handlerSearch} ingredients={ingredients} handlerSelectIngredient={handlerSelectIngredient} />
        <RecipMeal meals = {meals}/>
    </RecipLayout>
  )
}

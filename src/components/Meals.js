import { useState } from "react"
import { useEffect } from "react"
import MealItem from "./MealItem"

const Meals = () => {
    const [meals, setMeals] = useState([])

    const getMealsData = async () => {
        try {
            const response = await fetch("http://localhost:3001/meals", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error("Failed to obtain data.");
            }
            setMeals(responseData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getMealsData()
    }, [])

    return (
        <ul id="meals">
            {meals.map((value, index) => {
                return (
                    <MealItem meal={value}></MealItem>
                )
            })}
        </ul>
    )
}

export default Meals
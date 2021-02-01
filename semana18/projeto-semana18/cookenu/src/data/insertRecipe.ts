import { connection } from "..";
import { recipe } from "../types/recipe";

export const insertRecipe = async(newRecipe: recipe) => {
    try {
        await connection('Cookenu_Recipes')
        .insert(newRecipe)
    } catch (error) {
        throw new Error(error.message || error.sqlMessage)
    }
}
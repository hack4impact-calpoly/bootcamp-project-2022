import React, { useState } from "react";
import RecipePage from "./RecipePage";
import recipes, {Recipe} from "../Recipedata"
import { useParams } from "react-router-dom";


export default function Recipe1() {
    const {id} = useParams();
    return (
        <div>
            <p>{id}</p>
        </div>
    );
}
import React from 'react';

export interface Recipe {
    name: string;
    description: string;
    image: string;
    ingredients: string[];
    instructions: string[];
  }

 const recipes: Recipe[] = [
  {name: "Chicken Adobo", 
  description: "Chicken Adobo is a tangy chicken stew marinated in soy sauce and spices, pan-fried, and stewed.", 
  image: "https://www.sandravalvassori.com/wp-content/uploads/2022/05/Adobo-chicken-9894-2.jpg",
  ingredients: ["Boneless chicken thighs", "Soy sauce", "White Vinegar", "Onion", "Garlic", "Peppercorn", "Brown Sugar", "Bay Leaves"],
  instructions: []
  },
   {name: "Beef and Pork Lumpia",
    description: "Beef and Pork Lumpia is a type of crunchy egg roll filled with ground meat and various seasoned vegetables.",
    image: "https://img.buzzfeed.com/video-api-prod/assets/cca4d5ea049a4ba08f5e26a0272dbe25/BeautyShotbeautyTemplate.jpg",
    ingredients: [],
    instructions: []},
    {name: "Chicken Sotanghon",
    description: "Chicken Sotanghon is the Filipino chicken noodle soup made with vegetables, rice noodles, and flavorful fish sauce.",
    image: "https://salu-salo.com/wp-content/uploads/2014/06/Chicken-Sotanghon-Soup-Bean-Thread-Noodle-Soup-3.jpg",
    ingredients: [],
    instructions: []}];

 export default recipes;
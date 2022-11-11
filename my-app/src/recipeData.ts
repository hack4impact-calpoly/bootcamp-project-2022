import biryaniImg from "./images/biryani.jpeg"
import chickenImg from "./images/orangeChicken.jpeg"
import padThai from "./images/padThai.jpeg"

export interface Rec {
    name: string;
    desc: string;
    image: string;
    ingredients: string[];
    instructions: string[];
    alt:string;
  }  
  const recipes: Rec[] = [
    {
      name: "Chicken biryani",
      desc:
        "This is a popular Indian dish consisting of spicy, flavored rice and chicken",
      image: biryaniImg,
      ingredients: [
        "Chicken",
        "Aromatics",
        "Herbs",
        "Rice"
      ],
      instructions: [
        "To marinate the chicken for the biryani, combine the vegetable oil, garlic, ginger, chili peppers, mint, cilantro, garam masala, cinnamon and salt in a large bowl and stir together.<br> Add the chicken pieces and toss together making sure the chicken is thoroughly coated in the marinade. Allow the chicken to marinate for at least 1 hour or up to overnight.",
        "In a pot wide enough to hold the chicken in a single layer, add the ghee and onions and saute the onions until they are well caramelized (15-20 minutes). Transfer the caramelized <br>onions to a bowl and set aside.",
        "To assemble the biryani, add the saffron to the rice and toss to distribute evenly. Add half the rice mixture to the bottom of the pot you browned the chicken in.",
      ],
      alt:"biryani",
    },
    {
      name: "Orange Chicken",
      desc:
        "Delicious chicken dish",
      image: chickenImg,
      ingredients: [
        "OJ",
        "Soy sauce (+ other sauces)",
        "Chicken"
      ],
      instructions: [
          "Mix the sauces and juice to make the sauce.",
          "Fry the chicken coated in flour and corn starch.", 
          "Wok fry the chicken in the sauce.",
      ],
      alt:"orange-chickecn",
    },
    {
      name: "Pad Thai",
      desc:
        "Scrumptous noodle dish",
      image: padThai,
      ingredients: [
          "Chicken",
          "Noodles",
          "Pad Thai Sauce",
          "Veggies",
      ],
      instructions: [
          "Chop chicken and veggies. Soak noodles.",
          "Stir fry chickn.",
          "Add veggies.",
          "Add noodles."
      ],
      alt:"pad-thai",
    },
  ];
  
  export default recipes;
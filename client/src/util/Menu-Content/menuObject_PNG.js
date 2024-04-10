import { v4 as uuidv4 } from 'uuid';

export const Menu= {

    Main:[
        {   
            id:uuidv4(),
            name:"Braised Lamb Shanks",
            Description: "Lamb shanks marinated with red wine sauce consisting of carrots, apples,potatoes, and gravy",
            Price:"$19.99",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Main PNG/Braised Lamb Shanks.png'),
        },
        {   
            id:uuidv4(),
            name:"Chicken Dumplings",
            Description: "Minced chicken meat seasoned with garlic, ginger, black pepper and salt wrapped in a dumpling, served with vinegar.",
            Price:"$8.99",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Main PNG/Chicken Dumplings.png'),
        },
        {   
            id:uuidv4(),
            name:"Chicken Green Curry Katsudon",
            Description:"Chicken fried with panko crumbs served with coconut milk, green curry paste, palm sugar, fish sauce, and kaffir lime leaves",
            Price:"$12.99",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Main PNG/Chicken Green Curry Katsudon.png'),
        },
        {   
            id:uuidv4(),
            name:"Vietnamese Pho",
            Description:"Traditional Vietnamese vermicelli noodles served with beef broth",
            Price:"$12.99",
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Main PNG/Pho.png'),
        },
        {   
            id:uuidv4(),
            name:"Risotto",
            Description: "Italian risotto consisting of white wine and parmesan",
            Price:"$15.00",
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Main PNG/Risotto.png'),
        },
        {   
            id:uuidv4(),
            name:"Salmon Steak",
            Description: "Atlantic Grilled Salmon served with potatoes and asparagus",
            Price:"$18.99",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Main PNG/Salmon Steak.png'),
        },
        {   
            id:uuidv4(),
            name:"Seafood Curry Noodles",
            Description:"Curry Noodles served with prawns and squid",
            Price:"$12.99",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Main PNG/Seafood Curry Noodles.png'),
        },
        {   
            id:uuidv4(),
            name:"Seafood Pizza",
            Description:"Pizza fusion with prawns, squids and crabsticks",
            Price:"$15.00",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Main PNG/Seafood Pizza.png'),
        },
        {   
            id:uuidv4(),
            name:"Smoke Duck Pizza",
            Description:"Pizza fused with duck cooked with peking and barbequed styled",
            Price:"$15.00",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Main PNG/Smoke Duck Pizza.png'),
        },
        {   
            id:uuidv4(),
            name:"Southern Style",
            Description:"Chicken wrapped with smoked bacon served with long beans",
            Price:"$15.00",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Main PNG/Southern Style.png'),
        },
        {   
            id:uuidv4(),
            name:"Steak with Mash",
            Description:"Steak fillet served with a side of Mash potatoes and gravy",
            Price:"$15.00",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Main PNG/Steak with Mash.png'),
        },
      
       
    ],


    Pasta:[
        {   
            id:uuidv4(),
            name:"Beef Bolognese Pasta",
            Description: "Pesto pasta served with bolognese sauce and mince meat with parmesan garnish",
            Price:"$14.99",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta PNG/Beef Bolognese Pasta.png'),
        },
        {   
            id:uuidv4(),
            name:"Carbonara Pasta",
            Description: "Spaghetti served with parmesan and egg yolks with parmesan garnish",
            Price:"$14.99",
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Pasta PNG/Carbonara.png'),
        },
        {   
            id:uuidv4(),
            name:"Chicken Alfredo",
            Description: "Pesto pasta served with Alfredo sauce consisting of broccoli and chicken",
            Price:"$14.99",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta PNG/Chicken Alfredo.png'),
        },
        {   
            id:uuidv4(),
            name:"Chicken Maccaroni",
            Description: "Maccaroni pasta served with panko fried chicken and chilli flakes",
            Price:"$14.99",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta PNG/Chicken Pesto.png'),
        },
        {   
            id:uuidv4(),
            name:"Fajita",
            Description: "Pesto pasta served with stir fried bell peppers and mozarella",
            Price:"$14.99",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta PNG/Fajita.png'),
        },
        {   
            id:uuidv4(),
            name:"Vegan Pesto Pasta",
            Description: "Pesto pasta served with blended spinach, olive oil, sugar, mayonnaise sauce",
            Price:"$14.99",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta PNG/Pesto Pasta.png'),
        },
        {   
            id:uuidv4(),
            name:"Tomato Pesto Pasta",
            Description: "Tomato Pesto Pasta served with minced beef,tomato sauce, and mixed cheese",
            Price:"$14.99",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Pasta PNG/Tomato Pesto Pasta.png'),
        },
        {   
            id:uuidv4(),
            name:"Vegan Pasta",
            Description: "Stir Fried Pasta with zuccini, mushroom, squash and served with tomato sauce",
            Price:"$14.99",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta PNG/Vegan spaghetti.png'),
        },
    ],



    Appetizers:[
        {   
            id:uuidv4(),
            name:"Cheesed Apple Bacon",
            Description: "Mashed potato tarts infused with apple wood bacon",
            Price:"$11.99",
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Appetizers PNG/Cheesed Apple Bacon.png'),
        },
        {   
            id:uuidv4(),
            name:"Flat Meat Cakes",
            Description: "Honey biscuits filled with spam and glassed with butter",
            Price:"$11.99",
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Appetizers PNG/Flat Meat Cakes.png'),
        },
        {   
            id:uuidv4(),
            name:"Fried Dumplings",
            Description: "Chinese style fried pork dumplings",
            Price:"$11.99",
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Appetizers PNG/Fried Dumplings.png'),
        },
        {   
            id:uuidv4(),
            name:"Meat Cherry",
            Description: "Ghost peppers wrapped with apple wood bacon",
            Price:"$11.99",
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Appetizers PNG/Meat Cherry.png'),
        },
        {   
            id:uuidv4(),
            name:"Shrimp Salad",
            Description: "Shrimp mayo on lettuce wraps",
            Price:"$8.99",
            RRating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Appetizers PNG/Shrimp Salad.png'),
        },
        {   
            id:uuidv4(),
            name:"Vegetarian Sticks",
            Description: "Egg, cherry tomato kebabs served with olive oil",
            Price:"$6.99",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Appetizers PNG/Vegan Sticks.png'),
        },
       
    ],


    Beverage:[
        {   
            id:uuidv4(),
            name:"Citrus Orange Lemon Cocktail",
            Description: "Citrust infused alcohol cocktail",
            Price:"$2.99",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Beverages PNG/Citrus Orange Lemon Cocktail.png'),
        },
        {   
            id:uuidv4(),
            name:"Lemon Coke",
            Description: "Lemon Coke",
            Price:"$2.99",
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Beverages PNG/Lemon Coke.png'),
        },
        {   
            id:uuidv4(),
            name:"Orange Guava Cocktail",
            Description: "Orange Guava infused cocktail",
            Price:"$4.99",
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Beverages PNG/Orange Guava Cocktail.png'),
        },
        {   
            id:uuidv4(),
            name:"Soda Lime Cocktail",
            Description: "Soda, lime, alcohol",
            Price:"$4.99",
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Beverages PNG/Soda Lime Cocktail.png'),
        },
        {   
            id:uuidv4(),
            name:"Watermelon Mint",
            Description: "Watermelon, alcohol, mint",
            Price:"$4.99",
            Rating:require('../../theme/images/Rating_Stars/2stars.png'),
            Image:require('../../theme/images/Beverages PNG/Watermelon Mint.png'),
        },
       
    ],


    Desserts:[
        {   
            id:uuidv4(),
            name:"Apple Crumbles",
            Description:"Baked diced apples served on creme tart",
            Price:"$7.99",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts PNG/Apple Crumbles.png'),
        },
        {   
            id:uuidv4(),
            name:"Chocolate Tiramisu",
            Description:"Chocolate Coffee Slice",
            Price:"$7.99",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts PNG/Chocolate Tiramisu.png'),
        },
        {   
            id:uuidv4(),
            name:"Milk & Corn Panna Cotta",
            Description:"Panna Cotta made with Corn and Goat milk",
            Price:"$7.99",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts PNG/Goat Milk & Corn Panna Cotta.png'),
        },
        {   
            id:uuidv4(),
            name:"Granola Butter Cake",
            Description:"Granola bar butter cake",
            Price:"$8.99",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts PNG/Granola Butter Cake.png'),
        },
        {   
            id:uuidv4(),
            name:"Panna Cotta Souffle",
            Description:"Panna Cotta with top charred souffle",
            Price:"$9.99",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts PNG/Panna Cotta Souffle.png'),
        },
        {   
            id:uuidv4(),
            name:"Tiramisu Panna Cotta",
            Description:"Tiramisu panna cotta served with charred banana and tiramisu cake",
            Price:"$9.99",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts PNG/Tiramisu Panna Cotta.png'),
        },
    ],
    




}


export default Menu
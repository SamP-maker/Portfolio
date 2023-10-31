import { v4 as uuidv4 } from 'uuid';

export const Menu= {

    Main:[
        {   
            id:uuidv4(),
            name:"Braised Lamb Shanks",
            Description: "Lamb shanks marinated with red wine sauce consisting of carrots, apples,potatoes, and gravy",
            Price:19.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Main/Braised Lamb Shanks.jpg'),
            Amount:1
        },

        {   
            id:uuidv4(),
            name:"Chicken Green Curry Katsudon",
            Description:"Chicken fried with panko crumbs served with coconut milk, green curry paste, palm sugar, fish sauce, and kaffir lime leaves",
            Price:12.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Main/Chicken Green Curry Katsudon.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Vietnamese Pho",
            Description:"Traditional Vietnamese vermicelli noodles served with beef broth",
            Price:12.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Main/Pho.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Risotto",
            Description: "Italian risotto consisting of white wine and parmesan",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Main/Risotto.jpeg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Salmon Steak",
            Description: "Atlantic Grilled Salmon served with potatoes and asparagus",
            Price:18.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Main/Salmon Steak.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Seafood Curry Noodles",
            Description:"Curry Noodles served with prawns and squid",
            Price:12.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Main/Seafood Curry Noodles.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Seafood Pizza",
            Description:"Pizza fusion with prawns, squids and crabsticks",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Main/Seafood Pizza.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Smoke Duck Pizza",
            Description:"Pizza fused with duck cooked with peking and barbequed styled",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Main/Smoke Duck Pizza.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Southern Style",
            Description:"Chicken wrapped with smoked bacon served with long beans",
            Price:15.00,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Main/Southern Style.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Steak with Mash",
            Description:"Steak fillet served with a side of Mash potatoes and gravy",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Main/Steak with Mash.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Chicken Wings",
            Description: "Barbecued chicken wings glazed with honey",
            Price:6.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Main/Wings.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Meatball Pho",
            Price:15.99,
            Description:"Traditional Vietnamese vermicelli noodles served with beef broth and meatballs",
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Main/Meatball Pho.jpg'),
            Amount:1
        },
      
      
       
    ],


    Pasta:[
        {   
            id:uuidv4(),
            name:"Beef Bolognese Pasta",
            Price:14.99,
            Description: "Pesto pasta served with bolognese sauce and mince meat with parmesan garnish",
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta/Beef Bolognese.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Carbonara Pasta",
            Description: "Spaghetti served with parmesan and egg yolks with parmesan garnish",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta/Carbonara.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Chicken Alfredo",
            Description: "Pesto pasta served with Alfredo sauce consisting of broccoli and chicken",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta/Chicken Alfredo.webp'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Chicken Maccaroni",
            Description: "Maccaroni pasta served with panko fried chicken and chilli flakes",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta/Chicken Pesto.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Fajita",
            Description: "Pesto pasta served with stir fried bell peppers and mozarella",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta/Fajita.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Vegan Pesto Pasta",
            Description: "Pesto pasta served with blended spinach, olive oil, sugar, mayonnaise sauce",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta/Pesto Pasta.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Vegan Pasta",
            Description: "Stir Fried Pasta with zuccini, mushroom, squash and served with tomato sauce",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta/Vegan spaghetti.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Aglio Olio",
            Description: "Stir Fried Pasta with zuccini, mushroom, squash and served with tomato sauce",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta/Aglio Olio.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Ravioli",
            Description: "Italian handmade Ravioli served with special mushroom sauce and grated cheese",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/5stars.png'),
            Image:require('../../theme/images/Pasta/Ravioli.jpeg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Lasagna",
            Description: "Lasagna served with minced beef,tomato sauce, and mixed cheese",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Pasta/Lasagna.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Tomato Pasta",
            Description: "Original spaghetti served with tomato sauce",
            Price:14.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Pasta/Tomato Pasta.jpg'),
            Amount:1
        },
    ],



    Appetizers:[
        {   
            id:uuidv4(),
            name:"Cheesed Apple Bacon",
            Description: "Mashed potato tarts infused with apple wood bacon",
            Price:11.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Appetizers/Cheesed Apple Bacon.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Flat Meat Cakes",
            Description: "Honey biscuits filled with spam and glassed with butter",
            Price:11.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Appetizers/Flat Meat Cakes.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Fried Dumplings",
            Description: "Chinese style fried pork dumplings",
            Price:11.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Appetizers/Fried Dumplings.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Meat Cherry",
            Description: "Ghost peppers wrapped with apple wood bacon",
            Price:11.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Appetizers/Meat Cherry.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Shrimp Salad",
            Description: "Shrimp mayo on lettuce wraps",
            Price:8.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Appetizers/Shrimp Salad.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Vegetarian Sticks",
            Description: "Egg, cherry tomato kebabs served with olive oil",
            Price:6.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Appetizers/Vegan Sticks.jpg'),
            Amount:1
        },
       
    ],


    Beverage:[
        {   
            id:uuidv4(),
            name:"Chrysanthemum Milk Tea",
            Description:"Milk Tea infused with Chrysanthemum essence",
            Price:3.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Beverages/Chrysanthemum Milk Tea.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Coffee Milk Tea",
            Description:"Milk Tea with espresso coffee",
            Price:3.99,
            Rating:require('../../theme/images/Rating_Stars/1stars.png'),
            Image:require('../../theme/images/Beverages/Coffee Milk Tea.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Mango Smoothy",
            Description:"Mango blended with yogurt and ice",
            Price:4.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Beverages/Mango Smoothy.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Passionfruit Tea",
            Description:"Passionfruit infused Tea",
            Price:3.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Beverages/Passionfruit Tea.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Pineapple Juice",
            Description:"Blended pineapple with no extra additives",
            Price:4.99,
            Rating:require('../../theme/images/Rating_Stars/4stars.png'),
            Image:require('../../theme/images/Beverages/Pineapple Juice.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Rose Tea",
            Description:"Tea obtained from rose plant",
            Price:2.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Beverages/Rose Tea.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Strawberry Juice",
            Description:"Blended strawberry with no extra additives",
            Price:4.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Beverages/Strawberry Juice.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Strawberry Smoothy",
            Description:"Strawberry blended with yogurt and ice",
            Price:4.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Beverages/Strawberry Smoothy.jpg'),
            Amount:1
        },
       
    ],


    Desserts:[
        {   
            id:uuidv4(),
            name:"Apple Crumbles",
            Description:"Baked diced apples served on creme tart",
            Price:7.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts/Apple Crumbles.webp'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Chocolate Tiramisu",
            Description:"Chocolate Coffee Slice",
            Price:7.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts/Chocolate Tiramisu.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Goat Milk & Corn Panna Cotta",
            Description:"Panna Cotta made with Corn and Goat milk",
            Price:7.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts/Goat Milk & Corn Panna Cotta.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Granola Butter Cake",
            Description:"Granola bar butter cake",
            Price:8.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts/Granola Butter Cake.jpeg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Panna Cotta Souffle",
            Description:"Panna Cotta with top charred souffle",
            Price:9.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts/Panna Cotta Souffle.jpg'),
            Amount:1
        },
        {   
            id:uuidv4(),
            name:"Tiramisu Panna Cotta",
            Description:"Tiramisu panna cotta served with charred banana and tiramisu cake",
            Price:9.99,
            Rating:require('../../theme/images/Rating_Stars/3stars.png'),
            Image:require('../../theme/images/Desserts/Tiramisu Panna Cotta.jpg'),
            Amount:1
        },
    ],
    




}


export default Menu
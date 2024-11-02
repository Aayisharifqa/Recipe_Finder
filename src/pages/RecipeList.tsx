import React from 'react';
import { useParams, Link } from 'react-router-dom';

const recipes = {
  veg: [
    // Previous veg recipes remain the same
  ],
  'non-veg': [
    // Previous non-veg recipes remain the same
  ],
  breakfast: [
    {
      id: 'b1',
      title: 'Classic Pancakes',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445',
      description: 'Fluffy pancakes with maple syrup',
      time: '20 mins',
      difficulty: 'Easy'
    },
    {
      id: 'b2',
      title: 'Avocado Toast',
      image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2',
      description: 'Smashed avocado on sourdough bread',
      time: '10 mins',
      difficulty: 'Easy'
    },
    {
      id: 'b3',
      title: 'Eggs Benedict',
      image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7',
      description: 'Poached eggs with hollandaise sauce',
      time: '30 mins',
      difficulty: 'Medium'
    },
    {
      id: 'b4',
      title: 'Overnight Oats',
      image: 'https://images.unsplash.com/photo-1586511925558-a4c6376fe65f',
      description: 'Healthy oats with fruits and nuts',
      time: '5 mins + overnight',
      difficulty: 'Easy'
    },
    {
      id: 'b5',
      title: 'Breakfast Burrito',
      image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f',
      description: 'Scrambled eggs with vegetables in tortilla',
      time: '25 mins',
      difficulty: 'Medium'
    },
    {
      id: 'b6',
      title: 'French Toast',
      image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
      description: 'Classic French toast with berries',
      time: '20 mins',
      difficulty: 'Easy'
    },
    {
      id: 'b7',
      title: 'Smoothie Bowl',
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38',
      description: 'Fruit smoothie topped with granola',
      time: '15 mins',
      difficulty: 'Easy'
    },
    {
      id: 'b8',
      title: 'Breakfast Sandwich',
      image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847',
      description: 'Egg and cheese breakfast sandwich',
      time: '15 mins',
      difficulty: 'Easy'
    },
    {
      id: 'b9',
      title: 'Waffles',
      image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d',
      description: 'Crispy waffles with fresh berries',
      time: '25 mins',
      difficulty: 'Medium'
    },
    {
      id: 'b10',
      title: 'Fruit Parfait',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
      description: 'Yogurt parfait with granola and fruits',
      time: '10 mins',
      difficulty: 'Easy'
    }
  ],
  lunch: [
    {
      id: 'l1',
      title: 'Quinoa Bowl',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      description: 'Healthy quinoa with roasted vegetables',
      time: '30 mins',
      difficulty: 'Easy'
    },
    {
      id: 'l2',
      title: 'Chicken Caesar Wrap',
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
      description: 'Grilled chicken with Caesar salad wrap',
      time: '20 mins',
      difficulty: 'Easy'
    },
    {
      id: 'l3',
      title: 'Caprese Sandwich',
      image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5',
      description: 'Fresh mozzarella and tomato sandwich',
      time: '15 mins',
      difficulty: 'Easy'
    },
    {
      id: 'l4',
      title: 'Tuna Salad',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
      description: 'Classic tuna salad with greens',
      time: '20 mins',
      difficulty: 'Easy'
    },
    {
      id: 'l5',
      title: 'Vegetable Soup',
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
      description: 'Hearty vegetable soup with bread',
      time: '40 mins',
      difficulty: 'Medium'
    },
    {
      id: 'l6',
      title: 'Greek Salad',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
      description: 'Traditional Greek salad with feta',
      time: '15 mins',
      difficulty: 'Easy'
    },
    {
      id: 'l7',
      title: 'Pesto Pasta',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
      description: 'Pasta with fresh basil pesto',
      time: '25 mins',
      difficulty: 'Easy'
    },
    {
      id: 'l8',
      title: 'Turkey Club',
      image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847',
      description: 'Classic turkey club sandwich',
      time: '15 mins',
      difficulty: 'Easy'
    },
    {
      id: 'l9',
      title: 'Buddha Bowl',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      description: 'Nutritious bowl with grains and veggies',
      time: '30 mins',
      difficulty: 'Medium'
    },
    {
      id: 'l10',
      title: 'Chicken Quesadilla',
      image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f',
      description: 'Cheesy chicken quesadilla',
      time: '20 mins',
      difficulty: 'Easy'
    }
  ],
  dinner: [
    {
      id: 'd1',
      title: 'Salmon Fillet',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
      description: 'Baked salmon with vegetables',
      time: '30 mins',
      difficulty: 'Medium'
    },
    {
      id: 'd2',
      title: 'Spaghetti Bolognese',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
      description: 'Classic Italian meat sauce pasta',
      time: '45 mins',
      difficulty: 'Medium'
    },
    {
      id: 'd3',
      title: 'Chicken Stir-Fry',
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398',
      description: 'Asian-style chicken with vegetables',
      time: '25 mins',
      difficulty: 'Medium'
    },
    {
      id: 'd4',
      title: 'Beef Tacos',
      image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b',
      description: 'Ground beef tacos with toppings',
      time: '30 mins',
      difficulty: 'Easy'
    },
    {
      id: 'd5',
      title: 'Vegetable Lasagna',
      image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3',
      description: 'Layered pasta with vegetables',
      time: '60 mins',
      difficulty: 'Hard'
    },
    {
      id: 'd6',
      title: 'Shrimp Scampi',
      image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa',
      description: 'Garlic shrimp with pasta',
      time: '25 mins',
      difficulty: 'Medium'
    },
    {
      id: 'd7',
      title: 'Beef Stir-Fry',
      image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f',
      description: 'Beef and vegetable stir-fry',
      time: '30 mins',
      difficulty: 'Medium'
    },
    {
      id: 'd8',
      title: 'Chicken Parmesan',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8',
      description: 'Breaded chicken with marinara',
      time: '45 mins',
      difficulty: 'Medium'
    },
    {
      id: 'd9',
      title: 'Pork Chops',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
      description: 'Grilled pork chops with herbs',
      time: '35 mins',
      difficulty: 'Medium'
    },
    {
      id: 'd10',
      title: 'Vegetable Curry',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7',
      description: 'Spicy vegetable curry with rice',
      time: '40 mins',
      difficulty: 'Medium'
    }
  ],
  fitness: [
    {
      id: 'f1',
      title: 'Protein Smoothie',
      image: 'https://images.unsplash.com/photo-1526424382096-74a93e105682',
      description: 'High-protein fruit smoothie',
      time: '10 mins',
      difficulty: 'Easy'
    },
    {
      id: 'f2',
      title: 'Chicken Rice Bowl',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      description: 'Lean chicken with brown rice',
      time: '30 mins',
      difficulty: 'Medium'
    },
    {
      id: 'f3',
      title: 'Egg White Omelette',
      image: 'https://images.unsplash.com/photo-1612240498936-65f5101365d2',
      description: 'Egg whites with vegetables',
      time: '15 mins',
      difficulty: 'Easy'
    },
    {
      id: 'f4',
      title: 'Protein Pancakes',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445',
      description: 'High-protein breakfast pancakes',
      time: '20 mins',
      difficulty: 'Medium'
    },
    {
      id: 'f5',
      title: 'Turkey Meatballs',
      image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468',
      description: 'Lean turkey meatballs',
      time: '35 mins',
      difficulty: 'Medium'
    },
    {
      id: 'f6',
      title: 'Quinoa Salad',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      description: 'Protein-rich quinoa salad',
      time: '25 mins',
      difficulty: 'Easy'
    },
    {
      id: 'f7',
      title: 'Grilled Chicken Breast',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8',
      description: 'Simple grilled chicken breast',
      time: '20 mins',
      difficulty: 'Easy'
    },
    {
      id: 'f8',
      title: 'Sweet Potato Bowl',
      image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38',
      description: 'Sweet potato and protein bowl',
      time: '30 mins',
      difficulty: 'Medium'
    },
    {
      id: 'f9',
      title: 'Tuna Steak',
      image: 'https://images.unsplash.com/photo-1501595091296-3aa970afb3ff',
      description: 'Grilled tuna with vegetables',
      time: '20 mins',
      difficulty: 'Medium'
    },
    {
      id: 'f10',
      title: 'Protein Bars',
      image: 'https://images.unsplash.com/photo-1622484211148-906c68fa0d2f',
      description: 'Homemade protein bars',
      time: '40 mins',
      difficulty: 'Medium'
    }
  ],
  children: [
    {
      id: 'c1',
      title: 'Mac and Cheese',
      image: 'https://images.unsplash.com/photo-1543352634-99a5d50ae78e',
      description: 'Creamy macaroni and cheese',
      time: '25 mins',
      difficulty: 'Easy'
    },
    {
      id: 'c2',
      title: 'Chicken Nuggets',
      image: 'https://images.unsplash.com/photo-1562967914-608f82629710',
      description: 'Homemade chicken nuggets',
      time: '30 mins',
      difficulty: 'Medium'
    },
    {
      id: 'c3',
      title: 'Pizza Faces',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591',
      description: 'Fun pizza with face toppings',
      time: '25 mins',
      difficulty: 'Easy'
    },
    {
      id: 'c4',
      title: 'Spaghetti & Meatballs',
      image: 'https://images.unsplash.com/photo-1515516969-d4008cc6241a',
      description: 'Classic spaghetti and meatballs',
      time: '40 mins',
      difficulty: 'Medium'
    },
    {
      id: 'c5',
      title: 'Rainbow Fruit Skewers',
      image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea',
      description: 'Colorful fruit on skewers',
      time: '15 mins',
      difficulty: 'Easy'
    },
    {
      id: 'c6',
      title: 'Mini Burgers',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
      description: 'Kid-sized beef burgers',
      time: '25 mins',
      difficulty: 'Medium'
    },
    {
      id: 'c7',
      title: 'Fish Fingers',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947',
      description: 'Crispy breaded fish fingers',
      time: '20 mins',
      difficulty: 'Easy'
    },
    {
      id: 'c8',
      title: 'Funny Face Pancakes',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445',
      description: 'Pancakes with fruit faces',
      time: '20 mins',
      difficulty: 'Easy'
    },
    {
      id: 'c9',
      title: 'Veggie Trains',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
      description: 'Vegetables arranged as trains',
      time: '15 mins',
      difficulty: 'Easy'
    },
    {
      id: 'c10',
      title: 'Cookie Monsters',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e',
      description: 'Decorated monster cookies',
      time: '35 mins',
      difficulty: 'Medium'
    }
  ]
};

function RecipeList() {
  const { type, category } = useParams();
  const param = type || category;
  const recipeList = recipes[param as keyof typeof recipes] || [];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 capitalize">
        {param?.replace('-', ' ')} Recipes
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeList.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>⏱ {recipe.time}</span>
                <span>📊 {recipe.difficulty}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecipeList;
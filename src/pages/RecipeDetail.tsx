import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams();

  // This would typically fetch recipe details from an API
  const recipe = {
    id: 1,
    title: 'Vegetable Stir Fry',
    image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f',
    description: 'A healthy and delicious vegetable stir fry',
    prepTime: '10 mins',
    cookTime: '20 mins',
    servings: 4,
    ingredients: [
      '2 cups mixed vegetables',
      '1 tablespoon oil',
      '2 cloves garlic, minced',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Prepare all vegetables',
      'Heat oil in a large pan',
      'Add garlic and stir-fry until fragrant',
      'Add vegetables and cook until tender-crisp',
      'Season with salt and pepper'
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.description}</p>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <span className="block text-gray-500">Prep Time</span>
              <span className="font-semibold">{recipe.prepTime}</span>
            </div>
            <div className="text-center">
              <span className="block text-gray-500">Cook Time</span>
              <span className="font-semibold">{recipe.cookTime}</span>
            </div>
            <div className="text-center">
              <span className="block text-gray-500">Servings</span>
              <span className="font-semibold">{recipe.servings}</span>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-600">{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h2>
            <ol className="list-decimal list-inside space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="text-gray-600">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
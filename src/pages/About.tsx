import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Recipe Finder</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-4">
          Recipe Finder is your ultimate destination for discovering delicious recipes from around the world. 
          Whether you're a seasoned chef or just starting your culinary journey, we have recipes for every skill level and taste preference.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to make cooking accessible and enjoyable for everyone. We carefully curate and test each recipe 
          to ensure you get the best results in your kitchen.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Recipe Finder?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Carefully curated recipes for all skill levels</li>
            <li>Detailed instructions and ingredient lists</li>
            <li>Wide variety of cuisines and dietary preferences</li>
            <li>Active community of food enthusiasts</li>
            <li>Regular updates with new recipes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
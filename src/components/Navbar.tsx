import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, ChevronDown, Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [recipeDropdown, setRecipeDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold text-gray-800">Recipe Finder</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-red-500">Home</Link>
            
            <div className="relative group">
              <button
                className="flex items-center text-gray-600 hover:text-red-500"
                onMouseEnter={() => setRecipeDropdown(true)}
                onMouseLeave={() => setRecipeDropdown(false)}
              >
                Recipes <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {recipeDropdown && (
                <div className="absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
                     onMouseEnter={() => setRecipeDropdown(true)}
                     onMouseLeave={() => setRecipeDropdown(false)}>
                  <Link to="/recipes/veg" className="block px-4 py-2 text-gray-700 hover:bg-red-50">Vegetarian</Link>
                  <Link to="/recipes/non-veg" className="block px-4 py-2 text-gray-700 hover:bg-red-50">Non-Vegetarian</Link>
                </div>
              )}
            </div>

            <div className="relative group">
              <button
                className="flex items-center text-gray-600 hover:text-red-500"
                onMouseEnter={() => setCategoryDropdown(true)}
                onMouseLeave={() => setCategoryDropdown(false)}
              >
                Categories <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {categoryDropdown && (
                <div className="absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
                     onMouseEnter={() => setCategoryDropdown(true)}
                     onMouseLeave={() => setCategoryDropdown(false)}>
                  <Link to="/categories/breakfast" className="block px-4 py-2 text-gray-700 hover:bg-red-50">Breakfast</Link>
                  <Link to="/categories/lunch" className="block px-4 py-2 text-gray-700 hover:bg-red-50">Lunch</Link>
                  <Link to="/categories/dinner" className="block px-4 py-2 text-gray-700 hover:bg-red-50">Dinner</Link>
                  <Link to="/categories/fitness" className="block px-4 py-2 text-gray-700 hover:bg-red-50">Fitness</Link>
                  <Link to="/categories/children" className="block px-4 py-2 text-gray-700 hover:bg-red-50">Children</Link>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-600 hover:text-red-500">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-red-500">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-red-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-red-500">Home</Link>
            <div className="relative">
              <button
                onClick={() => setRecipeDropdown(!recipeDropdown)}
                className="w-full text-left px-3 py-2 text-gray-600 hover:text-red-500"
              >
                Recipes
              </button>
              {recipeDropdown && (
                <div className="pl-6 space-y-1">
                  <Link to="/recipes/veg" className="block px-3 py-2 text-gray-600 hover:text-red-500">Vegetarian</Link>
                  <Link to="/recipes/non-veg" className="block px-3 py-2 text-gray-600 hover:text-red-500">Non-Vegetarian</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setCategoryDropdown(!categoryDropdown)}
                className="w-full text-left px-3 py-2 text-gray-600 hover:text-red-500"
              >
                Categories
              </button>
              {categoryDropdown && (
                <div className="pl-6 space-y-1">
                  <Link to="/categories/breakfast" className="block px-3 py-2 text-gray-600 hover:text-red-500">Breakfast</Link>
                  <Link to="/categories/lunch" className="block px-3 py-2 text-gray-600 hover:text-red-500">Lunch</Link>
                  <Link to="/categories/dinner" className="block px-3 py-2 text-gray-600 hover:text-red-500">Dinner</Link>
                  <Link to="/categories/fitness" className="block px-3 py-2 text-gray-600 hover:text-red-500">Fitness</Link>
                  <Link to="/categories/children" className="block px-3 py-2 text-gray-600 hover:text-red-500">Children</Link>
                </div>
              )}
            </div>
            <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-red-500">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-red-500">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
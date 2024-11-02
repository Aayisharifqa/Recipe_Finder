import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    quote: 'Cooking is like love. It should be entered into with abandon or not at all.',
    author: 'Harriet Van Horne'
  },
  {
    image: 'https://images.unsplash.com/photo-1543353071-087092ec393a',
    quote: "Food is not just eating energy. It's an experience.",
    author: 'Guy Fieri'
  },
  {
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352',
    quote: "The only real stumbling block is fear of failure. In cooking you've got to have a what-the-hell attitude.",
    author: 'Julia Child'
  }
];

const featuredRecipes = [
  {
    id: 1,
    title: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca',
    description: 'Classic Italian pizza with fresh basil'
  },
  {
    id: 2,
    title: 'Sushi Rolls',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c',
    description: 'Fresh and colorful sushi assortment'
  },
  {
    id: 3,
    title: 'Beef Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    description: 'Juicy beef burger with all the fixings'
  },
  {
    id: 4,
    title: 'Pad Thai',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e',
    description: 'Traditional Thai stir-fried noodles'
  },
  {
    id: 5,
    title: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
    description: 'Fresh romaine lettuce with classic Caesar dressing'
  },
  {
    id: 6,
    title: 'Chocolate Cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    description: 'Rich and decadent chocolate layer cake'
  },
  {
    id: 7,
    title: 'Chicken Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8',
    description: 'Aromatic Indian rice dish with spiced chicken'
  },
  {
    id: 8,
    title: 'Tacos',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b',
    description: 'Mexican street tacos with various fillings'
  },
  {
    id: 9,
    title: 'Ramen',
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e',
    description: 'Japanese noodle soup with rich broth'
  },
  {
    id: 10,
    title: 'Greek Moussaka',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b',
    description: 'Layered eggplant and meat casserole'
  }
];

function Home() {
  return (
    <div className="space-y-12">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[500px] w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <p className="text-2xl md:text-4xl font-serif italic mb-4">"{slide.quote}"</p>
                  <p className="text-lg md:text-xl">- {slide.author}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredRecipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                <p className="text-gray-600">{recipe.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
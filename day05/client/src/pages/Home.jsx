import { useState, useEffect } from "react";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // ✅ FIX: typo 'cconst'

  // ✅ Step 1: define fetchRecipes OUTSIDE of useEffect so the button can use it too
  const fetchRecipes = async () => {
    setLoading(true); // Show loading when search starts
    try {
      const response = await fetch(
        `https://api.api-ninjas.com/v1/recipe?query=${searchTerm || 'pasta'}`,
        {
          headers: {
            'X-Api-Key': import.meta.env.VITE_API_KEY,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setRecipes(data);
      } else {
        console.error("Failed to fetch recipes: ", response.status);
      }
    } catch (error) {
      console.error("Error fetching recipes: ", error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 2: useEffect with empty [] to call fetchRecipes() once on page load
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="bg-yellow-50 min-h-screen">
      {/* Image Section */}
      <div className="flex justify-center mt-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?q=80&w=2438&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="food pic"
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Title and Paragraph */}
      <div className="text-center mt-8 px-4">
        <h1 className="text-4xl font-bold text-gray-800">Recipe Finder App</h1>
        <p className="text-lg mt-2 text-gray-700">
          Discover every recipe you’ll ever need. Just type in an ingredient or a dish below to get started!
        </p>
      </div>

      {/* Input Field and Search Button */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a recipe..."
          className="px-4 py-2 border rounded-l-md w-1/2"
        />
        <button
          onClick={fetchRecipes}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-md"
        >
          Search
        </button>
      </div>

      {/* Recipe Results */}
      {/* <div className="mt-10 px-4"> */}
      <div className="mt-10 w-full px-0 mx-0">
        {loading ? (
          <p className="text-center text-gray-600">Loading recipes...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-md">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-700 mt-2">{recipe.ingredients}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

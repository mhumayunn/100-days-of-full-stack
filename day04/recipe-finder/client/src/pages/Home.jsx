
function Home() {
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
      </div>
    );
  }
  
  export default Home;
  
  
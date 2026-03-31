const Home = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Welcome to E-Shop
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing products and enjoy seamless shopping experience. 
          Fast delivery, secure payments, and great customer service.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Categories</h2>
          <div className="space-y-3">
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">👕</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Clothing</h3>
                <p className="text-gray-600">Premium fashion for every occasion</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-green-600 font-bold">📱</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Electronics</h3>
                <p className="text-gray-600">Latest gadgets and accessories</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-12 rounded-3xl shadow-2xl">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Ready to shop?</h3>
            <a href="/products" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition transform hover:-translate-y-1 shadow-lg">
              Browse Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


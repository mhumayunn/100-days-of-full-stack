function Navbar() {
    return (
        <div className="bg-green-200 px-6 py-4 flex items-center justify-between">
        <div className="flex space-x-6 text-sm font-medium text-gray-700">
            <a href="#">Best Sellers</a>
            <a href="#">Shop</a>
            <a href="#">About us</a>
            </div>
            <div className="flex space-x-4 text-xl text-gray-700">
        <span role="img" aria-label="search">🔍</span>
        <span role="img" aria-label="cart">🛒</span>
      </div>
        </div>
    );
}
export default Navbar;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductsNavigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md border-b border-purple-500/20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">NexFab</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                to="/"
                className="text-purple-200 hover:text-purple-300 transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                to="/products"
                className="text-purple-300 font-semibold"
              >
                Products
              </Link>
              <Link 
                to="/"
                className="text-purple-200 hover:text-purple-300 transition-colors duration-200"
              >
                About Us
              </Link>
              <Link 
                to="/"
                className="text-purple-200 hover:text-purple-300 transition-colors duration-200"
              >
                Contact
              </Link>
              <Button 
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProductsNavigation;

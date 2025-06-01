
import { Link } from "react-router-dom";

const ProductsFooter = () => {
  return (
    <footer className="bg-black/90 text-purple-200 py-16 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">NexFab</h4>
            <p className="text-purple-400 mb-4">Greater London</p>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-purple-300">Product</h5>
            <ul className="space-y-2 text-purple-400">
              <li><Link to="/products" className="hover:text-purple-300 transition-colors">Superlens.ai</Link></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-purple-300">Quick Links</h5>
            <ul className="space-y-2 text-purple-400">
              <li><a href="#" className="hover:text-purple-300 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors">API Reference</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 text-purple-300">Connect with Us:</h5>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">LinkedIn</a>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Facebook</a>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="border-t border-purple-500/20 mt-12 pt-8 text-center text-purple-400">
          <p>&copy; 2025 by NexFab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ProductsFooter;


import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const ProductsHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center justify-center mb-8">
          <Zap className="h-20 w-20 text-purple-400" />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-purple-100 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">Superlens.ai</span>
        </h1>
        <p className="text-2xl md:text-3xl text-purple-300 mb-8 max-w-4xl mx-auto">
          AI-powered analytics platform that transforms your data into actionable insights. Discover patterns, predict trends, and make data-driven decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-purple-400 text-purple-300 hover:bg-purple-900/20 px-8 py-4 text-lg rounded-full transition-all duration-300"
          >
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;

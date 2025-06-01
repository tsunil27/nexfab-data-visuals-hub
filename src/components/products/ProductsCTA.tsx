
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProductsCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-950/80 to-black/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-purple-100 mb-6">Ready to Transform Your Data?</h2>
        <p className="text-xl text-purple-300 mb-8">
          Start your journey with Superlens.ai today and unlock the full potential of your data with AI-powered analytics.
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
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCTA;

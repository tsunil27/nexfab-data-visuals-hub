
const ProductsBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-black/80 to-purple-950/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-100 mb-6">Why Choose Superlens.ai?</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 hover:bg-purple-900/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/50">
            <div className="text-5xl font-bold text-purple-200 mb-4">10x</div>
            <div className="text-xl text-purple-300 mb-2">Faster Insights</div>
            <div className="text-purple-400">Reduce analysis time from days to minutes</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 hover:bg-purple-900/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/50">
            <div className="text-5xl font-bold text-purple-200 mb-4">95%</div>
            <div className="text-xl text-purple-300 mb-2">Accuracy Rate</div>
            <div className="text-purple-400">Industry-leading prediction accuracy</div>
          </div>
          <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 hover:bg-purple-900/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/50">
            <div className="text-5xl font-bold text-purple-200 mb-4">24/7</div>
            <div className="text-xl text-purple-300 mb-2">Support</div>
            <div className="text-purple-400">Expert assistance whenever you need it</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsBenefits;

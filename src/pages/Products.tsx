
import ProductsNavigation from "@/components/products/ProductsNavigation";
import ProductsHero from "@/components/products/ProductsHero";
import ProductsCarousel from "@/components/products/ProductsCarousel";
import ProductsDecisionMaking from "@/components/products/ProductsDecisionMaking";
import ProductsPerformance from "@/components/products/ProductsPerformance";
import ProductsFeatures from "@/components/products/ProductsFeatures";
import ProductsBenefits from "@/components/products/ProductsBenefits";
import ProductsCTA from "@/components/products/ProductsCTA";
import ProductsFooter from "@/components/products/ProductsFooter";

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <ProductsNavigation />

      <main className="pt-16">
        <ProductsHero />

        {/* What is SuperLens Section */}
        <section className="py-20 bg-gradient-to-br from-purple-950/60 to-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-purple-100 mb-6">What is SuperLens?</h2>
              <p className="text-xl text-purple-300 max-w-4xl mx-auto">
                SuperLens is a decision intelligence platform that enables data-driven insights through AI-powered analytics
              </p>
            </div>

            {/* Platform Carousel and Decision-Making Section Side by Side */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <ProductsCarousel />
              <ProductsDecisionMaking />
            </div>
          </div>
        </section>

        <ProductsPerformance />
        <ProductsFeatures />
        <ProductsBenefits />
        <ProductsCTA />
        <ProductsFooter />
      </main>
    </div>
  );
};

export default Products;

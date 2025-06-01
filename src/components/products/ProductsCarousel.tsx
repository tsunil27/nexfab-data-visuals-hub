
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const ProductsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    return () => {
      clearInterval(interval);
      api.off("select", () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full max-w-2xl mx-auto">
        <CarouselContent>
          {/* Slide 1 - Intro */}
          <CarouselItem>
            <div className="p-1">
              <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <h3 className="text-3xl font-bold text-purple-100 leading-tight">
                      SuperLens: Your Personal AI Data Analyst
                    </h3>
                    <p className="text-lg text-purple-300 leading-relaxed">
                      Transform complex data into clear, actionable insights.
                    </p>
                    <p className="text-lg text-purple-300 leading-relaxed">
                      Our AI-powered analytics platform is built for everyone, no technical expertise required.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Slide 2 - Natural Language Conversations */}
          <CarouselItem>
            <div className="p-1">
              <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <h3 className="text-3xl font-bold text-purple-100 leading-tight">
                      Ask, and You Shall See
                    </h3>
                    <p className="text-lg text-purple-300 mb-4">
                      Ask questions like:
                    </p>
                    <div className="space-y-3">
                      <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/30">
                        <p className="text-purple-200 font-medium italic">
                          "Show me this year's revenue trend."
                        </p>
                      </div>
                      <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/30">
                        <p className="text-purple-200 font-medium italic">
                          "Which product had the highest growth last quarter?"
                        </p>
                      </div>
                    </div>
                    <p className="text-lg text-purple-300">
                      Get instant, meaningful insights without needing SQL or complicated dashboards.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Slide 3 - The Problem We Solve */}
          <CarouselItem>
            <div className="p-1">
              <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <h3 className="text-3xl font-bold text-purple-100 leading-tight">
                      Why Businesses Struggle Today
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/30 text-left">
                        <h4 className="text-lg font-bold text-purple-200 mb-2">Data Overload</h4>
                        <p className="text-purple-300">
                          Organizations use only about <strong className="text-purple-100">33%</strong> of their available data for decision-making.
                        </p>
                      </div>
                      <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/30 text-left">
                        <h4 className="text-lg font-bold text-purple-200 mb-2">Lack of Timely Insights</h4>
                        <p className="text-purple-300">
                          About <strong className="text-purple-100">two-thirds</strong> of executives report they can't access insights when they need them. <strong className="text-purple-100">Two-thirds</strong> of dashboards are unused by non-technical staff.
                        </p>
                      </div>
                      <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/30 text-left">
                        <h4 className="text-lg font-bold text-purple-200 mb-2">Financial Impact</h4>
                        <p className="text-purple-300">
                          Slow data access or poor decision-making costs mid-to-large enterprises between <strong className="text-purple-100">$1.5M and $5M</strong> per year.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          {/* Slide 4 - Our Core Features */}
          <CarouselItem>
            <div className="p-1">
              <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <h3 className="text-3xl font-bold text-purple-100 leading-tight">
                      What Makes SuperLens Powerful
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/30">
                        <p className="text-lg font-medium text-purple-200">Conversational Language Understanding</p>
                      </div>
                      <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/30">
                        <p className="text-lg font-medium text-purple-200">Domain Context Knowledge</p>
                      </div>
                      <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/30">
                        <p className="text-lg font-medium text-purple-200">Automatic SQL Generation</p>
                      </div>
                      <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/30">
                        <p className="text-lg font-medium text-purple-200">Insights and Storytelling</p>
                      </div>
                      <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-400/30">
                        <p className="text-lg font-medium text-purple-200">Fine-tuning for your business needs</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      
      {/* Dot Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index + 1 === current
                ? 'bg-purple-400 scale-125'
                : 'bg-purple-700 hover:bg-purple-500'
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsCarousel;

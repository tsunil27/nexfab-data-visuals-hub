import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { ArrowRight, BarChart3, Brain, TrendingUp, Zap, Database, Shield, Lightbulb, MessageSquare, Eye, Layers, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      {/* Navigation */}
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

      {/* Hero Section */}
      <main className="pt-16">
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
              {/* Carousel */}
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

              {/* Streamline Decision-Making Section */}
              <div>
                <div className="text-left mb-12">
                  <h3 className="text-3xl font-bold text-purple-100 mb-6">Streamline Decision-Making with AI</h3>
                  <p className="text-lg text-purple-300 mb-8">
                    SuperLens combines the power of artificial intelligence with business intelligence to help teams make data-backed decisions faster and with greater accuracy.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-purple-200 mb-2">Natural language processing</h4>
                      <p className="text-purple-300">
                        for querying complex data without SQL knowledge
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Brain className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-purple-200 mb-2">Automated insights</h4>
                      <p className="text-purple-300">
                        that identify patterns and anomalies in your data
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <BarChart3 className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-purple-200 mb-2">Advanced visualization tools</h4>
                      <p className="text-purple-300">
                        that make data interpretation simple
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Lightbulb className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-purple-200 mb-2">Data storytelling</h4>
                      <p className="text-purple-300">
                        that transforms complex analytics into compelling narratives
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Database className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-purple-200 mb-2">Data platform integrations</h4>
                      <p className="text-purple-300">
                        from CSV through to Snowflake
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Predictions + AI Insights Section */}
        <section className="py-20 bg-gradient-to-br from-black/80 to-purple-950/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-purple-100 mb-6">Performance Predictions + AI Insights</h2>
              <p className="text-xl text-purple-300 max-w-4xl mx-auto">
                Leverage predictive analytics and AI-powered insights to stay ahead of trends and optimize your business performance.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Performance Predictions Chart */}
              <div>
                <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-purple-100 mb-2">Performance Predictions</h3>
                      <p className="text-purple-300">Forecasted trends for the next 6 months</p>
                    </div>
                    
                    {/* Chart Container */}
                    <div className="h-80 bg-purple-950/30 rounded-lg border border-purple-500/20 p-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-purple-300">Revenue Growth %</span>
                        <div className="flex gap-4 text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                            <span className="text-purple-300">Predicted</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                            <span className="text-purple-300">Historical</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Simplified Chart Visualization */}
                      <div className="relative h-60">
                        <div className="absolute inset-0 flex items-end justify-between px-2">
                          {[
                            { month: 'Aug', historical: 60, predicted: 68 },
                            { month: 'Sep', historical: 45, predicted: 72 },
                            { month: 'Oct', historical: 0, predicted: 78 },
                            { month: 'Nov', historical: 0, predicted: 82 },
                            { month: 'Dec', historical: 0, predicted: 88 },
                            { month: 'Jan', historical: 0, predicted: 95 }
                          ].map((data, index) => (
                            <div key={data.month} className="flex flex-col items-center w-16">
                              <div className="relative h-48 w-8 flex flex-col justify-end">
                                {data.historical > 0 && (
                                  <div 
                                    className="w-full bg-purple-600 rounded-t-sm mb-1"
                                    style={{ height: `${(data.historical / 100) * 100}%` }}
                                  ></div>
                                )}
                                <div 
                                  className="w-full bg-purple-400 rounded-t-sm"
                                  style={{ height: `${(data.predicted / 100) * 100}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-purple-300 mt-2">{data.month}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Y-axis labels */}
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-purple-400 -ml-8">
                          <span>100%</span>
                          <span>75%</span>
                          <span>50%</span>
                          <span>25%</span>
                          <span>0%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-purple-900/30 rounded-lg border border-purple-400/30">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="h-5 w-5 text-green-400" />
                        <div>
                          <p className="text-sm font-medium text-purple-200">Key Prediction</p>
                          <p className="text-xs text-purple-300">Expected 35% growth increase by January 2025</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* AI Insights */}
              <div>
                <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-purple-100 mb-2">AI Insights</h3>
                      <p className="text-purple-300">Actionable recommendations from your data</p>
                    </div>
                    
                    <div className="space-y-4">
                      {/* Insight 1 */}
                      <div className="p-4 bg-purple-950/30 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-green-500/20 rounded-lg">
                            <TrendingUp className="h-4 w-4 text-green-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-purple-200 mb-1">Revenue Optimization Opportunity</h4>
                            <p className="text-xs text-purple-300 mb-2">
                              Peak user activity occurs between 2-4 PM. Consider launching campaigns during this window for 23% higher conversion rates.
                            </p>
                            <span className="text-xs text-green-400 font-medium">+23% potential uplift</span>
                          </div>
                        </div>
                      </div>

                      {/* Insight 2 */}
                      <div className="p-4 bg-purple-950/30 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-blue-500/20 rounded-lg">
                            <Eye className="h-4 w-4 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-purple-200 mb-1">User Engagement Pattern</h4>
                            <p className="text-xs text-purple-300 mb-2">
                              Mobile users show 40% longer session times. Prioritizing mobile experience could significantly boost engagement.
                            </p>
                            <span className="text-xs text-blue-400 font-medium">Mobile-first strategy recommended</span>
                          </div>
                        </div>
                      </div>

                      {/* Insight 3 */}
                      <div className="p-4 bg-purple-950/30 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-purple-500/20 rounded-lg">
                            <Layers className="h-4 w-4 text-purple-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-purple-200 mb-1">Feature Usage Analysis</h4>
                            <p className="text-xs text-purple-300 mb-2">
                              Advanced analytics features are underutilized. Guided tutorials could increase adoption by 60%.
                            </p>
                            <span className="text-xs text-purple-400 font-medium">Training opportunity identified</span>
                          </div>
                        </div>
                      </div>

                      {/* Insight 4 */}
                      <div className="p-4 bg-purple-950/30 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-orange-500/20 rounded-lg">
                            <Settings className="h-4 w-4 text-orange-400" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-purple-200 mb-1">System Performance Alert</h4>
                            <p className="text-xs text-purple-300 mb-2">
                              Query response times increase by 15% during peak hours. Consider scaling infrastructure.
                            </p>
                            <span className="text-xs text-orange-400 font-medium">Infrastructure review needed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Button 
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        View All Insights <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-purple-950/80 to-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-purple-100 mb-6">Powerful Features</h2>
              <p className="text-xl text-purple-300 max-w-3xl mx-auto">
                Superlens.ai combines cutting-edge AI technology with intuitive design to deliver unparalleled analytics capabilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50">
                <CardContent className="p-6">
                  <Brain className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-purple-200 mb-3">AI-Powered Insights</h3>
                  <p className="text-purple-300">
                    Advanced machine learning algorithms automatically identify patterns and anomalies in your data, providing intelligent recommendations.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50">
                <CardContent className="p-6">
                  <TrendingUp className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-purple-200 mb-3">Predictive Analytics</h3>
                  <p className="text-purple-300">
                    Forecast future trends and outcomes with sophisticated predictive models, helping you stay ahead of the competition.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50">
                <CardContent className="p-6">
                  <BarChart3 className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-purple-200 mb-3">Interactive Dashboards</h3>
                  <p className="text-purple-300">
                    Create stunning, interactive visualizations that make complex data easy to understand and share with your team.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50">
                <CardContent className="p-6">
                  <Database className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-purple-200 mb-3">Data Integration</h3>
                  <p className="text-purple-300">
                    Seamlessly connect to multiple data sources including databases, APIs, and cloud services for comprehensive analysis.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50">
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-purple-200 mb-3">Enterprise Security</h3>
                  <p className="text-purple-300">
                    Bank-level security with end-to-end encryption, role-based access control, and compliance with industry standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50">
                <CardContent className="p-6">
                  <Lightbulb className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-purple-200 mb-3">Smart Recommendations</h3>
                  <p className="text-purple-300">
                    Get actionable recommendations based on your data patterns, helping you make informed business decisions quickly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
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

        {/* Call to Action */}
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

        {/* Footer */}
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
      </main>
    </div>
  );
};

export default Products;

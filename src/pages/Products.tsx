import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { ArrowRight, BarChart3, Brain, TrendingUp, Zap, Database, Shield, Lightbulb, MessageSquare, Eye, Layers, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
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
              <div>
                <Carousel setApi={setApi} opts={{ loop: true }} className="w-full max-w-2xl mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
                          <CardContent className="flex flex-col items-center justify-center p-8">
                            <div className="w-full h-80 bg-gradient-to-br from-purple-900/40 to-black/60 rounded-lg mb-6 flex items-center justify-center border border-purple-500/30">
                              <div className="text-center">
                                <Eye className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-purple-200 mb-4">SuperLens is your personal AI data analyst</h3>
                                <p className="text-purple-300 max-w-md">
                                  Transform complex data into clear insights with our AI-powered analytics platform designed for everyone.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
                          <CardContent className="flex flex-col items-center justify-center p-8">
                            <div className="w-full h-80 bg-gradient-to-br from-purple-900/40 to-black/60 rounded-lg mb-6 flex items-center justify-center border border-purple-500/30">
                              <div className="text-center">
                                <MessageSquare className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-purple-200 mb-4">Natural Language Conversations</h3>
                                <p className="text-purple-300 max-w-md">
                                  Ask questions like: "Show me the revenue trend this year" and get instant insights without complex queries.
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
                          <CardContent className="flex flex-col items-center justify-center p-8">
                            <div className="w-full h-80 bg-gradient-to-br from-purple-900/40 to-black/60 rounded-lg mb-6 flex items-center justify-center border border-purple-500/30">
                              <div className="text-center">
                                <h3 className="text-2xl font-bold text-purple-200 mb-6">Problem</h3>
                                <p className="text-purple-300 mb-6">Organizations struggle with data complexity and decision-making speed</p>
                                <div className="grid grid-cols-1 gap-4">
                                  <div className="bg-purple-600/20 p-4 rounded-lg border border-purple-400/30">
                                    <Database className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                                    <p className="text-sm font-semibold text-purple-200 mb-1">Data Overload</p>
                                    <p className="text-xs text-purple-300">Organizations utilize only about 1/3rd of available data for decision making</p>
                                  </div>
                                  <div className="bg-purple-600/20 p-4 rounded-lg border border-purple-400/30">
                                    <Shield className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                                    <p className="text-sm font-semibold text-purple-200 mb-1">How painful?</p>
                                    <p className="text-xs text-purple-300">2/3 execs report lacking timely insights. 2/3 dashboards unused by non-technical users</p>
                                  </div>
                                  <div className="bg-purple-600/20 p-4 rounded-lg border border-purple-400/30">
                                    <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                                    <p className="text-sm font-semibold text-purple-200 mb-1">At what scale?</p>
                                    <p className="text-xs text-purple-300">Slow data access costs mid-to-large enterprises between $1.5M-$5M annually</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Card className="bg-black/40 backdrop-blur-md border border-purple-500/20">
                          <CardContent className="flex flex-col items-center justify-center p-8">
                            <div className="w-full h-80 bg-gradient-to-br from-purple-900/40 to-black/60 rounded-lg mb-6 flex items-center justify-center border border-purple-500/30">
                              <div className="text-center">
                                <div className="space-y-3 mb-6">
                                  <div className="bg-purple-600/30 p-3 rounded-lg border border-purple-400/50 flex items-center">
                                    <Brain className="h-6 w-6 text-purple-400 mr-3" />
                                    <span className="text-purple-200 text-sm">Conversational Language Understanding</span>
                                  </div>
                                  <div className="bg-purple-600/30 p-3 rounded-lg border border-purple-400/50 flex items-center">
                                    <Layers className="h-6 w-6 text-purple-400 mr-3" />
                                    <span className="text-purple-200 text-sm">Domain Context Knowledge</span>
                                  </div>
                                  <div className="bg-purple-600/30 p-3 rounded-lg border border-purple-400/50 flex items-center">
                                    <Database className="h-6 w-6 text-purple-400 mr-3" />
                                    <span className="text-purple-200 text-sm">SQL Generation</span>
                                  </div>
                                  <div className="bg-purple-600/30 p-3 rounded-lg border border-purple-400/50 flex items-center">
                                    <BarChart3 className="h-6 w-6 text-purple-400 mr-3" />
                                    <span className="text-purple-200 text-sm">Insights & Storytelling</span>
                                  </div>
                                  <div className="bg-purple-600/30 p-3 rounded-lg border border-purple-400/50 flex items-center">
                                    <Settings className="h-6 w-6 text-purple-400 mr-3" />
                                    <span className="text-purple-200 text-sm">Fine-Tuning</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="bg-purple-900/40 border-purple-500/30 text-purple-300 hover:bg-purple-800/60" />
                  <CarouselNext className="bg-purple-900/40 border-purple-500/30 text-purple-300 hover:bg-purple-800/60" />
                </Carousel>
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

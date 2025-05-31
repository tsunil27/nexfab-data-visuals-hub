import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Cloud, Code, Database, Users, ChevronRight, Zap, TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClientLogos from "@/components/ClientLogos";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const dashboardMetrics = [
    {
      title: "Total Users",
      value: "24.5K",
      change: 12,
      isPositive: true,
      period: "vs last period"
    },
    {
      title: "Active Sessions", 
      value: "1,429",
      change: 8,
      isPositive: true,
      period: "vs last period"
    },
    {
      title: "Avg. Session Time",
      value: "4m 38s", 
      change: 2,
      isPositive: false,
      period: "vs last period"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: 0.8,
      isPositive: true,
      period: "vs last period"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      {/* Skip to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to Main Content
      </a>

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
                  className="text-purple-200 hover:text-purple-300 transition-colors duration-200"
                >
                  Products
                </Link>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-purple-200 hover:text-purple-300 transition-colors duration-200"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-purple-200 hover:text-purple-300 transition-colors duration-200"
                >
                  Contact
                </button>
                <Link 
                  to="/products"
                  className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="main-content" className="pt-16">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-7xl font-bold text-purple-100 mb-6 leading-tight">
              Empower Your Data with <span className="bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">NexFab</span>
            </h2>
            <p className="text-xl md:text-2xl text-purple-300 mb-8 max-w-3xl mx-auto">
              Unlock the Power of Data & AI for Informed Business Decisions
            </p>
            <Button 
              onClick={() => scrollToSection('featured-product')}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Discover More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Featured Product Section */}
        <section id="featured-product" className="py-20 bg-gradient-to-br from-purple-950/80 to-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-purple-100 mb-6">Featured Product</h3>
            </div>
            
            <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Zap className="h-16 w-16 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-3xl font-bold text-purple-200 mb-4 text-center">Superlens.ai</h4>
                <p className="text-xl text-purple-300 mb-6 text-center max-w-3xl mx-auto">
                  AI-powered analytics platform that transforms your data into actionable insights. Discover patterns, predict trends, and make data-driven decisions.
                </p>
                <div className="text-center">
                  <Link to="/products">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                      Explore Superlens.ai <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Interactive Dashboard Overview Section */}
        <section id="dashboard" className="py-20 bg-gradient-to-br from-black/80 to-purple-950/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-purple-100 mb-6">Interactive Dashboard Overview</h3>
              <p className="text-xl text-purple-300 max-w-4xl mx-auto">
                Monitor your Superlens.ai performance metrics in real-time with our interactive dashboard.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <Tabs defaultValue="overview" className="w-full max-w-md">
                <TabsList className="grid w-full grid-cols-3 bg-black/40 backdrop-blur-md border border-purple-500/20">
                  <TabsTrigger 
                    value="overview" 
                    className="text-purple-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="user-metrics" 
                    className="text-purple-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    User Metrics
                  </TabsTrigger>
                  <TabsTrigger 
                    value="performance" 
                    className="text-purple-200 data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                  >
                    Performance
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardMetrics.map((metric, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50"
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-purple-300 mb-2">{metric.title}</h4>
                        <div className="text-3xl font-bold text-purple-100">{metric.value}</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {metric.isPositive ? (
                          <TrendingUp className="h-4 w-4 text-green-400" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-400" />
                        )}
                        <span className={`text-sm font-medium ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                          {metric.isPositive ? '↑' : '↓'} {metric.change}% {metric.period}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-black/80 to-purple-950/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-purple-100 mb-6">Empowering Businesses with Data</h3>
              <p className="text-xl text-purple-300 max-w-4xl mx-auto">
                NexFab is dedicated to empowering businesses through advanced data analytics and cloud solutions. Our mission is to help businesses harness the full potential of their data to drive growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 bg-gradient-to-br from-purple-950/80 to-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50">
                <CardContent className="p-6">
                  <Cloud className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold text-purple-200 mb-3">Cloud Analytics Solutions</h4>
                  <p className="text-purple-300">
                    At NexFab, we specialize in modernizing cloud analytics to provide scalable and efficient solutions for businesses. Our cloud analytics services are designed to optimize performance and drive strategic decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50">
                <CardContent className="p-6">
                  <Code className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold text-purple-200 mb-3">Customized Application Development</h4>
                  <p className="text-purple-300">
                    NexFab offers versatile and tailored application development services to meet the unique needs of businesses. Our team is adept at creating cutting-edge applications that streamline operations and enhance user experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50">
                <CardContent className="p-6">
                  <Database className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold text-purple-200 mb-3">Data Science Expertise</h4>
                  <p className="text-purple-300">
                    With NexFab's data science acceleration services, businesses can leverage advanced analytics and predictive modeling to gain valuable insights. Our data science expertise enables organizations to stay ahead in a competitive digital landscape.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold text-purple-200 mb-3">Enhanced Customer Experience</h4>
                  <p className="text-purple-300">
                    NexFab provides end-to-end customer experience services to ensure businesses deliver exceptional experiences. From personalized marketing automation to seamless customer journeys, we enhance brand loyalty and satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience and Expertise Section */}
        <section id="experiences" className="py-20 bg-gradient-to-r from-purple-900/80 to-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-purple-100 mb-6">Experience and Expertise</h3>
            </div>
            
            {/* Client Logos Section */}
            <ClientLogos />
            
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 hover:bg-purple-900/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/50">
                <div className="text-4xl font-bold text-purple-200 mb-2">20+</div>
                <div className="text-purple-400">Years of Excellence</div>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 hover:bg-purple-900/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/50">
                <div className="text-4xl font-bold text-purple-200 mb-2">50+</div>
                <div className="text-purple-400">Successful Deployments</div>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 hover:bg-purple-900/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/50">
                <div className="text-4xl font-bold text-purple-200 mb-2">70M+</div>
                <div className="text-purple-400">Users Data Processed</div>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 hover:bg-purple-900/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/50">
                <div className="text-4xl font-bold text-purple-200 mb-2">5+</div>
                <div className="text-purple-400">Global Clients</div>
              </div>
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-6 hover:bg-purple-900/20 transition-all duration-300 border border-purple-500/20 hover:border-purple-400/50">
                <div className="text-4xl font-bold text-purple-200 mb-2">100+</div>
                <div className="text-purple-400">Platform Integrations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="partners" className="py-20 bg-gradient-to-br from-purple-950/80 to-black/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl font-bold text-purple-100 mb-6">Ready to Elevate Your Data Strategy?</h3>
            <p className="text-xl text-purple-300 mb-8">
              Discover how NexFab can optimize your data infrastructure and drive actionable insights for your business. Let's embark on a journey of data-driven success together.
            </p>
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-black/90 text-purple-200 py-16 border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">NexFab</h4>
                <p className="text-purple-400 mb-4">Greater London</p>
              </div>
              <div>
                <h5 className="font-semibold mb-4 text-purple-300">Solutions</h5>
                <ul className="space-y-2 text-purple-400">
                  <li><Link to="/" className="hover:text-purple-300 transition-colors">About Us</Link></li>
                  <li><a href="#" className="hover:text-purple-300 transition-colors">Insights</a></li>
                  <li><a href="#" className="hover:text-purple-300 transition-colors">Resources</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4 text-purple-300">Quick Links</h5>
                <ul className="space-y-2 text-purple-400">
                  <li><Link to="/products" className="hover:text-purple-300 transition-colors">Start Now</Link></li>
                  <li><a href="#" className="hover:text-purple-300 transition-colors">Subscribe for Updates</a></li>
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

export default Index;

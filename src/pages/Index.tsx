
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Cloud, Code, Database, Users, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Skip to main content */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded-md z-50"
      >
        Skip to Main Content
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">NexFab</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('vision')}
                  className="text-white hover:text-purple-300 transition-colors duration-200"
                >
                  Vision
                </button>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  className="text-white hover:text-purple-300 transition-colors duration-200"
                >
                  Solutions
                </button>
                <button 
                  onClick={() => scrollToSection('partners')}
                  className="text-white hover:text-purple-300 transition-colors duration-200"
                >
                  Partners
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-purple-300 transition-colors duration-200"
                >
                  Get in Touch
                </button>
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
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className={`relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Empower Your Data with <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">NexFab</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the Power of Data & AI for Informed Business Decisions
            </p>
            <Button 
              onClick={() => scrollToSection('about')}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Discover More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Empowering Businesses with Data</h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                NexFab is dedicated to empowering businesses through advanced data analytics and cloud solutions. Our mission is to help businesses harness the full potential of their data to drive growth and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <Cloud className="h-12 w-12 text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Cloud Analytics Solutions</h4>
                  <p className="text-gray-600">
                    At NexFab, we specialize in modernizing cloud analytics to provide scalable and efficient solutions for businesses. Our cloud analytics services are designed to optimize performance and drive strategic decision-making.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <Code className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Customized Application Development</h4>
                  <p className="text-gray-600">
                    NexFab offers versatile and tailored application development services to meet the unique needs of businesses. Our team is adept at creating cutting-edge applications that streamline operations and enhance user experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <Database className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Data Science Expertise</h4>
                  <p className="text-gray-600">
                    With NexFab's data science acceleration services, businesses can leverage advanced analytics and predictive modeling to gain valuable insights. Our data science expertise enables organizations to stay ahead in a competitive digital landscape.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Enhanced Customer Experience</h4>
                  <p className="text-gray-600">
                    NexFab provides end-to-end customer experience services to ensure businesses deliver exceptional experiences. From personalized marketing automation to seamless customer journeys, we enhance brand loyalty and satisfaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience and Expertise Section */}
        <section id="vision" className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-white mb-6">Experience and Expertise</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-300">Years of Excellence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-300">Successful Deployments</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">70M+</div>
                <div className="text-gray-300">Users Data Processed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">5+</div>
                <div className="text-gray-300">Global Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-300">Platform Integrations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="partners" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Elevate Your Data Strategy?</h3>
            <p className="text-xl text-gray-600 mb-8">
              Discover how NexFab can optimize your data infrastructure and drive actionable insights for your business. Let's embark on a journey of data-driven success together.
            </p>
            <Button 
              onClick={() => scrollToSection('contact')}
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-2xl font-bold mb-4">NexFab</h4>
                <p className="text-gray-400 mb-4">Greater London</p>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Solutions</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Quick Links</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Start Now</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Subscribe for Updates</a></li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4">Connect with Us:</h5>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2025 by NexFab. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;

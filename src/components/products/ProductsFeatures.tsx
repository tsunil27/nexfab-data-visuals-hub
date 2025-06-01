
import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, BarChart3, Database, Shield, Lightbulb } from "lucide-react";

const ProductsFeatures = () => {
  return (
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
  );
};

export default ProductsFeatures;

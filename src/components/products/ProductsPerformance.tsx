
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Eye, Layers, Settings } from "lucide-react";

const ProductsPerformance = () => {
  return (
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
  );
};

export default ProductsPerformance;

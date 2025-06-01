
import { MessageSquare, Brain, BarChart3, Lightbulb, Database } from "lucide-react";

const ProductsDecisionMaking = () => {
  return (
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
  );
};

export default ProductsDecisionMaking;

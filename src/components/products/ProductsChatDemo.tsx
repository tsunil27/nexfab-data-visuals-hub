
import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const ProductsChatDemo = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [showGraph, setShowGraph] = useState(false);

  const scenes = [
    {
      type: 'user',
      text: 'How does the customer acquisition funnel analysis look for last quarter?',
      delay: 0
    },
    {
      type: 'system',
      text: 'Analyzing customer acquisition data for Q4...',
      delay: 2000
    },
    {
      type: 'system',
      text: 'SuperLens AI is analyzing',
      delay: 3500,
      showDots: true
    },
    {
      type: 'system',
      text: 'Here\'s your customer acquisition funnel analysis for Q4:',
      delay: 6000,
      showGraph: true
    }
  ];

  const funnelData = [
    { stage: 'Awareness', visitors: 12000, color: '#FF6B35' },
    { stage: 'Interest', visitors: 8500, color: '#B388FF' },
    { stage: 'Consideration', visitors: 4200, color: '#00E5FF' },
    { stage: 'Purchase', visitors: 1800, color: '#4CAF50' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
        setTypingText('');
      } else {
        // Reset animation
        setTimeout(() => {
          setCurrentScene(0);
          setTypingText('');
          setShowGraph(false);
        }, 4000);
      }
    }, scenes[currentScene]?.delay || 2000);

    return () => clearTimeout(timer);
  }, [currentScene]);

  useEffect(() => {
    if (currentScene < scenes.length) {
      const scene = scenes[currentScene];
      if (scene.showGraph) {
        setTimeout(() => setShowGraph(true), 1000);
      }
      
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index < scene.text.length) {
          setTypingText(scene.text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeTimer);
        }
      }, 50);

      return () => clearInterval(typeTimer);
    }
  }, [currentScene]);

  const TypingDots = () => (
    <div className="flex space-x-1 ml-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-purple-950/80 to-black/90 backdrop-blur-sm overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-100 mb-4">
            Experience SuperLens AI in Action
          </h2>
          <p className="text-xl text-purple-300">
            Watch how our AI transforms complex queries into actionable insights
          </p>
        </div>

        {/* Chat Interface Container */}
        <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-md rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/50 px-6 py-4 border-b border-purple-500/20">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-purple-100 font-semibold">SuperLens AI Platform</h3>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6 space-y-6 min-h-[400px] max-h-[600px] overflow-y-auto">
            {scenes.slice(0, currentScene + 1).map((scene, index) => (
              <div
                key={index}
                className={`flex ${scene.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    scene.type === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/25'
                      : 'bg-gradient-to-r from-indigo-900/80 to-purple-900/60 text-purple-100 border border-purple-400/30 shadow-lg'
                  }`}
                >
                  <div className="flex items-center">
                    {index === currentScene ? (
                      <>
                        <span className="font-medium">{typingText}</span>
                        {scene.showDots && <TypingDots />}
                      </>
                    ) : (
                      <span className="font-medium">{scene.text}</span>
                    )}
                  </div>
                  
                  {/* Graph Display */}
                  {scene.showGraph && showGraph && (
                    <div className="mt-4 bg-black/40 rounded-xl p-4 border border-purple-400/20 animate-scale-in">
                      <h4 className="text-purple-200 font-semibold mb-3">Q4 Customer Acquisition Funnel</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={funnelData}>
                            <XAxis 
                              dataKey="stage" 
                              tick={{ fill: '#C4B5FD', fontSize: 12 }}
                              axisLine={{ stroke: '#7C3AED' }}
                            />
                            <YAxis 
                              tick={{ fill: '#C4B5FD', fontSize: 12 }}
                              axisLine={{ stroke: '#7C3AED' }}
                            />
                            <Bar 
                              dataKey="visitors" 
                              fill="#B388FF"
                              radius={[4, 4, 0, 0]}
                              className="animate-fade-in"
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
                        <div className="text-purple-300">
                          <span className="text-orange-400 font-bold">↗ 23%</span> conversion improvement
                        </div>
                        <div className="text-purple-300">
                          <span className="text-green-400 font-bold">1,800</span> total conversions
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="px-6 py-4 border-t border-purple-500/20 bg-gradient-to-r from-purple-950/30 to-black/30">
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-purple-900/20 border border-purple-400/30 rounded-full px-4 py-3">
                <input 
                  type="text" 
                  placeholder="Ask SuperLens AI anything about your data..."
                  className="w-full bg-transparent text-purple-200 placeholder-purple-400 focus:outline-none"
                  readOnly
                />
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-orange-400 text-sm font-medium">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <span>Powered by NexFab Agentic AI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsChatDemo;

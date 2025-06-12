import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts';

const ProductsChatDemo = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [showGraph, setShowGraph] = useState(false);
  const [graphAnimation, setGraphAnimation] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const scenes = [
    {
      type: 'user',
      text: 'How does the customer acquisition funnel analysis look for last quarter?',
      delay: 0,
      duration: 3000
    },
    {
      type: 'system',
      text: 'Analyzing customer acquisition data for Q4...',
      delay: 1000,
      duration: 2000
    },
    {
      type: 'system',
      text: 'SuperLens AI is processing',
      delay: 1500,
      duration: 2500,
      showDots: true
    },
    {
      type: 'system',
      text: 'Here\'s your customer acquisition funnel analysis for Q4:',
      delay: 1000,
      duration: 3000,
      showGraph: true
    }
  ];

  const funnelData = [
    { stage: 'Awareness', visitors: 12000, color: '#3B82F6' },
    { stage: 'Interest', visitors: 8500, color: '#1E40AF' },
    { stage: 'Consideration', visitors: 4200, color: '#1D4ED8' },
    { stage: 'Purchase', visitors: 1800, color: '#2563EB' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentScene < scenes.length - 1) {
        setCurrentScene(currentScene + 1);
        setTypingText('');
        setShowGraph(false);
        setGraphAnimation(false);
      } else {
        // Reset animation cycle
        setTimeout(() => {
          setCurrentScene(0);
          setTypingText('');
          setShowGraph(false);
          setGraphAnimation(false);
          setShowParticles(false);
        }, 3000);
      }
    }, scenes[currentScene]?.duration || 3000);

    return () => clearTimeout(timer);
  }, [currentScene]);

  useEffect(() => {
    if (currentScene < scenes.length) {
      const scene = scenes[currentScene];
      
      if (scene.showGraph) {
        setTimeout(() => {
          setShowGraph(true);
          setShowParticles(true);
          setTimeout(() => setGraphAnimation(true), 500);
        }, 1500);
      }
      
      let index = 0;
      const typeTimer = setInterval(() => {
        if (index < scene.text.length) {
          setTypingText(scene.text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeTimer);
        }
      }, 40);

      return () => clearInterval(typeTimer);
    }
  }, [currentScene]);

  const TypingDots = () => (
    <div className="flex space-x-1 ml-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 bg-blue-600 rounded-full"
          style={{
            animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );

  const ParticleEffect = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );

  const AnimatedBar = ({ data, index }: { data: any; index: number }) => (
    <div
      className="relative"
      style={{
        animation: graphAnimation ? `slideUp 0.6s ease-out ${index * 0.1}s both` : 'none',
      }}
    >
      <Bar dataKey="visitors" fill={data.color} radius={[4, 4, 0, 0]} />
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white backdrop-blur-sm overflow-hidden relative">
      {showParticles && <ParticleEffect />}
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 animate-fade-in">
            Experience SuperLens AI in Action
          </h2>
          <p className="text-xl text-blue-700 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Watch how our AI transforms complex queries into actionable insights
          </p>
        </div>

        {/* Chat Interface Container */}
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl border border-blue-200 shadow-2xl overflow-hidden relative animate-scale-in">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-blue-200/30 blur-xl -z-10 animate-pulse" />
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 border-b border-blue-300/20 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <h3 className="text-white font-semibold">SuperLens AI Platform</h3>
              </div>
              
              {/* NexFab Logo with Glow */}
              <div className="flex items-center space-x-2 text-orange-400 text-sm font-medium">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-orange-500/50">
                  N
                </div>
                <span className="text-orange-400 drop-shadow-lg">NexFab</span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6 space-y-6 min-h-[450px] max-h-[600px] overflow-y-auto relative">
            {scenes.slice(0, currentScene + 1).map((scene, index) => (
              <div
                key={index}
                className={`flex ${scene.type === 'user' ? 'justify-end' : 'justify-start'}`}
                style={{
                  animation: `slideIn 0.6s ease-out ${index * 0.3}s both`,
                }}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl relative ${
                    scene.type === 'user'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gradient-to-r from-gray-100 to-blue-50 text-blue-900 border border-blue-200 shadow-lg'
                  }`}
                >
                  {/* Message glow effect */}
                  <div className={`absolute inset-0 rounded-2xl blur-sm -z-10 ${
                    scene.type === 'user' ? 'bg-blue-500/30' : 'bg-blue-100/50'
                  }`} />
                  
                  <div className="flex items-center relative z-10">
                    {index === currentScene ? (
                      <>
                        <span className="font-medium">{typingText}</span>
                        {scene.showDots && <TypingDots />}
                        <span className="ml-1 w-0.5 h-5 bg-blue-600 animate-pulse" />
                      </>
                    ) : (
                      <span className="font-medium">{scene.text}</span>
                    )}
                  </div>
                  
                  {/* Graph Display */}
                  {scene.showGraph && showGraph && (
                    <div 
                      className="mt-4 bg-white/80 rounded-xl p-4 border border-blue-200 relative overflow-hidden"
                      style={{
                        animation: graphAnimation ? 'scaleIn 0.8s ease-out 0.3s both' : 'none',
                      }}
                    >
                      {/* Graph glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/50 rounded-xl animate-pulse" />
                      
                      <h4 className="text-blue-800 font-semibold mb-3 relative z-10">Q4 Customer Acquisition Funnel</h4>
                      <div className="h-64 relative z-10">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={funnelData}>
                            <XAxis 
                              dataKey="stage" 
                              tick={{ fill: '#1E40AF', fontSize: 12 }}
                              axisLine={{ stroke: '#3B82F6' }}
                            />
                            <YAxis 
                              tick={{ fill: '#1E40AF', fontSize: 12 }}
                              axisLine={{ stroke: '#3B82F6' }}
                            />
                            <Bar dataKey="visitors" radius={[4, 4, 0, 0]}>
                              {funnelData.map((entry, index) => (
                                <Cell 
                                  key={`cell-${index}`} 
                                  fill={entry.color}
                                  style={{
                                    animation: graphAnimation ? `barGrow 0.8s ease-out ${index * 0.1}s both` : 'none',
                                  }}
                                />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-4 text-sm relative z-10">
                        <div className="text-blue-700 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                          <span className="text-orange-500 font-bold">↗ 23%</span> conversion improvement
                        </div>
                        <div className="text-blue-700 animate-fade-in" style={{ animationDelay: '1.4s' }}>
                          <span className="text-green-600 font-bold">1,800</span> total conversions
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="px-6 py-4 border-t border-blue-200 bg-gradient-to-r from-blue-50 to-white relative">
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-blue-50 border border-blue-200 rounded-full px-4 py-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 to-blue-50/50 animate-pulse" />
                <input 
                  type="text" 
                  placeholder="Ask SuperLens AI anything about your data..."
                  className="w-full bg-transparent text-blue-800 placeholder-blue-500 focus:outline-none relative z-10"
                  readOnly
                />
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Watermark */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 text-orange-400 text-sm font-medium animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/50"></div>
            <span className="drop-shadow-lg">Powered by NexFab Agentic AI</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes barGrow {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(100px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductsChatDemo;

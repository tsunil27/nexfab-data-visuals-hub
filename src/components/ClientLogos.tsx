
import { Card, CardContent } from "@/components/ui/card";

const ClientLogos = () => {
  const clients = [
    { name: "DAZN", logo: "DAZN" },
    { name: "Warner Bros Discovery", logo: "WBD" },
    { name: "Sky", logo: "SKY" },
    { name: "Virgin Media", logo: "VM" },
  ];

  return (
    <div className="mb-16">
      <h4 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
        Trusted by Industry Leaders
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <Card 
            key={index} 
            className="client-logo group bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50 hover:bg-purple-900/20 transition-all duration-300 transform hover:scale-105"
          >
            <CardContent className="p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors duration-300 mb-2">
                  {client.logo}
                </div>
                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {client.name}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;

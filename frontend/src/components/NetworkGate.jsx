import React, { useState } from 'react';
import { Button } from './ui/button';
import { Shield, Network, Server } from 'lucide-react';

const NetworkGate = ({ onAccessGranted }) => {
  const [step, setStep] = useState(0);
  const [isConnecting, setIsConnecting] = useState(false);

  const steps = [
    { label: 'SYN', description: 'Initiating connection request...' },
    { label: 'SYN-ACK', description: 'Server acknowledging request...' },
    { label: 'ACK', description: 'Confirming connection...' }
  ];

  const handlePortClick = (portNumber) => {
    if (portNumber === step + 1 && !isConnecting) {
      setIsConnecting(true);
      setTimeout(() => {
        setStep(portNumber);
        setIsConnecting(false);
        if (portNumber === 3) {
          setTimeout(() => {
            onAccessGranted();
          }, 1000);
        }
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#00ff41] rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl w-full px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <Shield className="w-20 h-20 text-[#00ff41]" strokeWidth={1.5} />
              <div className="absolute inset-0 animate-ping">
                <Shield className="w-20 h-20 text-[#00ff41] opacity-20" strokeWidth={1.5} />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-[#00ff41] mb-4 font-mono tracking-wider">
            NETWORK ACCESS
          </h1>
          <p className="text-[#00d9ff] text-xl mb-2 font-mono">Welcome to Tirth's Portfolio Network</p>
          <p className="text-gray-400 text-sm font-mono">Establishing TCP Connection...</p>
        </div>

        {/* TCP Handshake Steps */}
        <div className="flex justify-center items-center gap-8 mb-16">
          {steps.map((s, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-24 h-24 rounded-full border-2 flex items-center justify-center mb-3 transition-all duration-500 ${
                step > index 
                  ? 'border-[#00ff41] bg-[#00ff41]/10 shadow-[0_0_20px_rgba(0,255,65,0.5)]' 
                  : step === index
                  ? 'border-[#00d9ff] bg-[#00d9ff]/10 shadow-[0_0_20px_rgba(0,217,255,0.5)] animate-pulse'
                  : 'border-gray-700 bg-gray-900/50'
              }`}>
                <span className={`text-2xl font-mono font-bold ${
                  step > index ? 'text-[#00ff41]' : step === index ? 'text-[#00d9ff]' : 'text-gray-600'
                }`}>
                  {index + 1}
                </span>
              </div>
              <span className={`text-sm font-mono font-semibold mb-1 ${
                step > index ? 'text-[#00ff41]' : step === index ? 'text-[#00d9ff]' : 'text-gray-500'
              }`}>
                {s.label}
              </span>
              <span className={`text-xs font-mono text-center max-w-[120px] ${
                step === index ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {step === index ? s.description : ''}
              </span>
            </div>
          ))}
        </div>

        {/* Port Selection */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 shadow-2xl">
          <div className="text-center mb-6">
            <p className="text-[#00d9ff] font-mono text-sm mb-2">CLICK THE NETWORK PORTS IN ORDER</p>
            <p className="text-gray-500 font-mono text-xs">Follow the TCP handshake protocol</p>
          </div>
          
          <div className="flex justify-center items-center gap-6">
            {[1, 2, 3].map((port) => (
              <Button
                key={port}
                onClick={() => handlePortClick(port)}
                disabled={isConnecting || step >= 3}
                className={`h-32 w-32 rounded-lg border-2 transition-all duration-300 font-mono text-lg relative overflow-hidden ${
                  step >= port
                    ? 'border-[#00ff41] bg-[#00ff41]/10 text-[#00ff41] hover:bg-[#00ff41]/20 shadow-[0_0_25px_rgba(0,255,65,0.4)]'
                    : step === port - 1
                    ? 'border-[#00d9ff] bg-[#00d9ff]/5 text-[#00d9ff] hover:bg-[#00d9ff]/10 shadow-[0_0_25px_rgba(0,217,255,0.4)] animate-pulse'
                    : 'border-gray-700 bg-gray-900/50 text-gray-600 hover:border-gray-600'
                } ${
                  isConnecting && step === port - 1 ? 'animate-pulse' : ''
                }`}
              >
                <div className="flex flex-col items-center justify-center">
                  <Network className="w-10 h-10 mb-2" />
                  <span className="font-bold">PORT {port}</span>
                </div>
                {step >= port && (
                  <div className="absolute inset-0 bg-[#00ff41]/5 animate-ping"></div>
                )}
              </Button>
            ))}
          </div>
        </div>

        {/* Connection Status */}
        {step === 3 && (
          <div className="mt-8 text-center animate-fadeIn">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#00ff41]/10 border border-[#00ff41] rounded-lg">
              <Server className="w-5 h-5 text-[#00ff41] animate-pulse" />
              <span className="text-[#00ff41] font-mono text-sm font-semibold">CONNECTION ESTABLISHED</span>
            </div>
            <p className="text-gray-400 font-mono text-xs mt-3">Redirecting to portfolio...</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default NetworkGate;

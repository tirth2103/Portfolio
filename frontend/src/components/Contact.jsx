import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Terminal, Send, Mail, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/mock';
import { toast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission for now
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-[#0f0f0f] relative" id="contact">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-[#00d9ff] font-mono text-sm mb-2">
            <Terminal className="inline w-4 h-4 mr-2" />
            root@portfolio:~$ ./connect.sh
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
            <span className="text-[#00ff41]">{'> '}</span>Get In Touch
          </h2>
          <p className="text-gray-400 mt-4">Have a project or opportunity? Let's connect!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 mb-6">
              <h3 className="text-[#00ff41] font-mono font-semibold mb-6 text-lg">
                {'> '} Contact Information
              </h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="flex items-center gap-4 p-4 bg-[#0f0f0f] border border-gray-700 rounded-lg hover:border-[#00ff41] hover:shadow-[0_0_20px_rgba(0,255,65,0.2)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded-lg flex items-center justify-center group-hover:bg-[#00ff41]/20">
                    <Mail className="w-5 h-5 text-[#00ff41]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono mb-1">Email</p>
                    <p className="text-white font-mono text-sm group-hover:text-[#00ff41] transition-colors">
                      {portfolioData.personal.email}
                    </p>
                  </div>
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#0f0f0f] border border-gray-700 rounded-lg hover:border-[#00d9ff] hover:shadow-[0_0_20px_rgba(0,217,255,0.2)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-[#00d9ff]/10 border border-[#00d9ff]/30 rounded-lg flex items-center justify-center group-hover:bg-[#00d9ff]/20">
                    <Linkedin className="w-5 h-5 text-[#00d9ff]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-mono mb-1">LinkedIn</p>
                    <p className="text-white font-mono text-sm group-hover:text-[#00d9ff] transition-colors">
                      View Profile
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick info */}
            <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse"></div>
                <span className="text-[#00ff41] font-mono text-sm font-semibold">Available for opportunities</span>
              </div>
              <p className="text-gray-400 text-sm font-mono">
                Currently seeking IT Support, System Administration, or Network Administration roles.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden">
            {/* Terminal header */}
            <div className="bg-[#0f0f0f] border-b border-gray-800 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-500 font-mono text-xs ml-2">~/contact/message.sh</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="text-[#00d9ff] font-mono text-xs mb-2 block">
                    {'> Name'}
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-[#0f0f0f] border-gray-700 text-white font-mono focus:border-[#00ff41] focus:ring-[#00ff41]/20"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="text-[#00d9ff] font-mono text-xs mb-2 block">
                    {'> Email'}
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[#0f0f0f] border-gray-700 text-white font-mono focus:border-[#00ff41] focus:ring-[#00ff41]/20"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="text-[#00d9ff] font-mono text-xs mb-2 block">
                    {'> Subject'}
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-[#0f0f0f] border-gray-700 text-white font-mono focus:border-[#00ff41] focus:ring-[#00ff41]/20"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="text-[#00d9ff] font-mono text-xs mb-2 block">
                    {'> Message'}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-[#0f0f0f] border-gray-700 text-white font-mono focus:border-[#00ff41] focus:ring-[#00ff41]/20 resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00ff41] hover:bg-[#00ff41]/90 text-black font-mono font-bold py-6 rounded-lg shadow-[0_0_30px_rgba(0,255,65,0.3)] hover:shadow-[0_0_40px_rgba(0,255,65,0.5)] transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

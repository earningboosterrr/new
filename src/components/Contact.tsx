
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your retail business? Contact us today for a personalized quote 
            and discover how our POS terminals can boost your sales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>
              <Textarea
                name="message"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="border-2 border-gray-200 focus:border-blue-500 transition-colors"
              />
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Phone className="w-6 h-6 mr-3 text-cyan-400" />
                <h4 className="text-lg font-semibold">Phone</h4>
              </div>
              <p className="text-blue-100">+1 (555) 123-4567</p>
              <p className="text-blue-100">+1 (555) 987-6543</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 mr-3 text-cyan-400" />
                <h4 className="text-lg font-semibold">Email</h4>
              </div>
              <p className="text-blue-100">sales@posterterminals.com</p>
              <p className="text-blue-100">support@posterterminals.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 mr-3 text-cyan-400" />
                <h4 className="text-lg font-semibold">Address</h4>
              </div>
              <p className="text-blue-100">123 Business Plaza</p>
              <p className="text-blue-100">Tech District, NY 10001</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-white">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 mr-3 text-cyan-400" />
                <h4 className="text-lg font-semibold">Business Hours</h4>
              </div>
              <p className="text-blue-100">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-blue-100">Saturday: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Instagram, Mail, MapPin, Send } from 'lucide-react';
import Button from '../components/Button';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <footer className="bg-gradient-to-b from-forest-green to-earthy-brown text-white">
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-soft-beige mb-8 leading-relaxed">
                Have questions or want to join our mission? We'd love to hear from you! Together, we can make a difference.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Instagram className="w-6 h-6 text-sunshine-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Follow Us</h3>
                    <a
                      href="https://instagram.com/project.nurturee"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-soft-beige hover:text-sunshine-yellow transition-colors"
                    >
                      @project.nurturee
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-sunshine-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-soft-beige">Pune, Maharashtra, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-sunshine-yellow mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:contact@projectnurture.org"
                      className="text-soft-beige hover:text-sunshine-yellow transition-colors"
                    >
                      contact@projectnurture.org
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="bg-sunshine-yellow/20 border-2 border-sunshine-yellow rounded-lg p-6 text-center">
                  <p className="text-lg font-semibold text-sunshine-yellow">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sunshine-yellow"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sunshine-yellow"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sunshine-yellow resize-none"
                      placeholder="Tell us how you'd like to help or get involved..."
                    ></textarea>
                  </div>

                  <Button type="submit" variant="secondary" className="w-full">
                    Send Message
                    <Send className="inline-block ml-2 w-5 h-5" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Leaf className="w-6 h-6 text-sunshine-yellow" />
              <span className="text-lg font-serif font-bold">Project Nurture</span>
            </div>

            <div className="text-center md:text-left">
              <p className="text-soft-beige text-sm">
                © {new Date().getFullYear()} Project Nurture. All rights reserved.
              </p>
              <p className="text-soft-beige/80 text-xs mt-1">
                Made with 💚 by youth, for the planet
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://instagram.com/project.nurturee"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sunshine-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

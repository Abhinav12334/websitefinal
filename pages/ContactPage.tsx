import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="relative text-text-light">
      {/* 🌌 Hero */}
      <section className="relative py-32 text-center overflow-hidden">
        <div className="hero-glow absolute inset-0"></div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl font-extrabold gradient-text mb-6">Get In Touch</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* 💬 Contact Section */}
      <section className="py-20 bg-transparent">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* 🧭 Info Card */}
          <div className="space-y-8 bg-background-card/80 border border-primary/20 p-10 rounded-2xl shadow-glow backdrop-blur-lg">
            <h2 className="text-3xl font-bold gradient-text">Contact Information</h2>
            <p className="text-gray-300">
              Fill up the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6 mt-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-full shadow-glow">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-100">Phone</p>
                  <p className="text-gray-300">8089223990</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-full shadow-glow">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-100">Email</p>
                  <p className="text-gray-300 break-all">
                    aptivoraglobalsolutions@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-full shadow-glow">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-100">Address</p>
                  <p className="text-gray-300 leading-relaxed">
                    Aptivora Global Solutions<br />
                    Thrissur, Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form action="https://formspree.io/f/xgvpvgla" method="POST"
            className="space-y-6 bg-background-card/60 border border-primary/20 p-10 rounded-2xl shadow-glow backdrop-blur-md">
            {['name', 'email', 'message'].map((field, i) => (
              <div key={i}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-300 capitalize">{field}</label>
                {field === 'message' ? (
                  <textarea id="message" name="message" rows={5} required
                    className="mt-2 w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:ring-primary focus:border-primary text-gray-100 placeholder-gray-500" />
                ) : (
                  <input type={field === 'email' ? 'email' : 'text'} id={field} name={field} required
                    className="mt-2 w-full px-4 py-3 bg-transparent border border-gray-600 rounded-md focus:ring-primary focus:border-primary text-gray-100 placeholder-gray-500" />
                )}
              </div>
            ))}
            <button type="submit"
              className="w-full bg-primary text-black font-semibold px-6 py-3 rounded-md hover:shadow-glow-strong transition-transform hover:scale-105">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

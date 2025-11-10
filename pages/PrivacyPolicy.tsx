import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="relative text-text-light py-20">
      <div className="hero-glow absolute inset-0"></div>
      <div className="relative z-10 container mx-auto px-6 max-w-3xl">
        <h1 className="text-5xl font-extrabold gradient-text text-center mb-12">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            At <strong>Aptivora Global Solutions</strong>, we value your privacy.
            This Privacy Policy explains how we collect, use, and protect your
            personal information.
          </p>
          <h2 className="text-2xl font-bold gradient-text">1. Information We Collect</h2>
          <p>We may collect your name, email, and message details through our contact forms.</p>

          <h2 className="text-2xl font-bold gradient-text">2. How We Use Information</h2>
          <p>We use your info to respond to inquiries and improve services. We never sell your data.</p>

          <h2 className="text-2xl font-bold gradient-text">3. Cookies</h2>
          <p>We may use cookies to improve experience and analyze traffic. You can disable them anytime.</p>

          <h2 className="text-2xl font-bold gradient-text">4. Contact Us</h2>
          <p>
            For questions, email us at{" "}
            <a href="mailto:aptivoraglobalsolutions@gmail.com" className="text-primary underline">
              aptivoraglobalsolutions@gmail.com
            </a>
          </p>

          <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

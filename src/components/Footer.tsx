import React from 'react';
import { Sparkles, Instagram, Facebook, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Sparkles className="text-primary-500 mr-2" size={28} />
              <span className="text-xl font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Radiance AI
              </span>
            </Link>
            <p className="mt-4 text-neutral-600">
              Your personalized skin health assistant, making expert skincare advice accessible to everyone.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialLink icon={<Instagram size={20} />} href="#" />
              <SocialLink icon={<Facebook size={20} />} href="#" />
              <SocialLink icon={<Twitter size={20} />} href="#" />
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/assessment" label="Skin Check" />
              <FooterLink href="/about" label="About Us" />
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <FooterLink href="/faq" label="FAQ" />
              <FooterLink href="/privacy" label="Privacy Policy" />
              <FooterLink href="/terms" label="Terms of Service" />
              <FooterLink href="/contact" label="Contact Us" />
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-neutral-600 mb-4">
              Subscribe to our newsletter for skincare tips and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="input-field"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-8 text-center text-neutral-600">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="text-accent-500 mx-1" /> in India
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Radiance AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-primary-100 transition-colors"
    >
      <span className="text-primary-500">{icon}</span>
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li>
      <Link
        to={href}
        className="text-neutral-600 hover:text-primary-500 transition-colors"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;
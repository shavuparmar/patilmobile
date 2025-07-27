import {
  MdCall,
  MdLocationOn,
  MdEmail,
} from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900 py-12 px-6 sm:px-16 md:px-24 lg:px-36">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-12 gap-x-12">
        {/* Logo + About */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img
            src="/android-chrome-192x192.png"
            alt="Patil Mobile Logo"
            className="w-24 h-24 object-contain mb-4"
          />
          <p className="max-w-xs text-gray-700 text-sm sm:text-base leading-relaxed">
            Patil Mobile - Your Trusted Mobile Repair & Financial Service
            Center in Surat. Professional, reliable, and customer-focused.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Quick Links</h3>
          <a
            href="#home"
            className="mb-3 text-gray-700 hover:text-yellow-500 transition duration-300 font-medium text-base sm:text-lg"
          >
            Home
          </a>
          <a
            href="#service"
            className="mb-3 text-gray-700 hover:text-yellow-500 transition duration-300 font-medium text-base sm:text-lg"
          >
            Services
          </a>
          <a
            href="#About"
            className="mb-3 text-gray-700 hover:text-yellow-500 transition duration-300 font-medium text-base sm:text-lg"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="mb-3 text-gray-700 hover:text-yellow-500 transition duration-300 font-medium text-base sm:text-lg"
          >
            Contact
          </a>
        </nav>

        {/* Contact Info + Social */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Us</h3>

          <div className="flex items-center space-x-3 mb-4 text-gray-700 text-base sm:text-lg">
            <MdCall size={28} className="flex-shrink-0 text-yellow-500" />
            <span>+91 99887 76655</span>
          </div>

          <div className="flex items-center space-x-3 mb-4 text-gray-700 text-base sm:text-lg">
            <MdLocationOn size={28} className="flex-shrink-0 text-yellow-500" />
            <span>Kim Main Road opp RK Park, Surat, Gujarat 394110</span>
          </div>

          <div className="flex items-center space-x-3 mb-6 text-gray-700 text-base sm:text-lg break-words">
            <MdEmail size={28} className="flex-shrink-0 text-yellow-500" />
            <a
              href="mailto:patilmobile@gmail.com"
              className="hover:text-yellow-500 transition duration-300 font-medium"
            >
              patilmobile@gmail.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 justify-center sm:justify-start">
            {[FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedinIn].map(
              (Icon, idx) => {
                const links = [
                  "https://facebook.com",
                  "https://instagram.com",
                  "https://twitter.com",
                  "https://wa.me/6352244221",
                  "https://linkedin.com",
                ];
                return (
                  <a
                    key={idx}
                    href={links[idx]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${Icon.displayName || "social"} page`}
                    className="text-gray-700 hover:text-yellow-500 transition duration-300"
                  >
                    <Icon
                      size={28}
                      className="sm:hover:scale-110 transform transition-transform duration-300"
                    />
                  </a>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/* Policy Links */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-300 pt-6 flex flex-wrap justify-center sm:justify-between gap-4 text-gray-600 text-sm sm:text-base select-none">
        <a
          href="/privacy-policy"
          className="hover:text-yellow-500 transition duration-300"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-conditions"
          className="hover:text-yellow-500 transition duration-300"
        >
          Terms &amp; Conditions
        </a>
        <a
          href="/disclaimer"
          className="hover:text-yellow-500 transition duration-300"
        >
          Disclaimer
        </a>
        <a
          href="/refund-policy"
          className="hover:text-yellow-500 transition duration-300"
        >
          Refund Policy
        </a>
        <a
          href="/cookie-policy"
          className="hover:text-yellow-500 transition duration-300"
        >
          Cookie Policy
        </a>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-6 border-t border-gray-300 pt-6 text-center text-gray-600 text-sm sm:text-base select-none">
        &copy; {new Date().getFullYear()} Patil Mobile. All rights reserved.
      </div>
    </footer>
  );
}

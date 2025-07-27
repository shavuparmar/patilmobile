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
  const socialLinks = [
    { icon: FaFacebookF, url: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, url: "https://instagram.com", label: "Instagram" },
    { icon: FaTwitter, url: "https://twitter.com", label: "Twitter" },
    { icon: FaWhatsapp, url: "https://wa.me/6352244221", label: "WhatsApp" },
    { icon: FaLinkedinIn, url: "https://linkedin.com", label: "LinkedIn" },
  ];

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
          {["Home", "Services", "About Us", "Contact"].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              className="mb-3 text-gray-700 hover:text-yellow-500 transition duration-300 font-medium text-base sm:text-lg"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Contact Info + Social */}
        <div className="flex flex-col items-center  sm:items-start text-center sm:text-left">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Us</h3>

          {/* Call */}
          <div className="flex items-center mb-4 space-x-3 text-gray-700 text-base sm:text-lg">
            <MdCall size={28} className="text-yellow-500 flex-shrink-0" />
            <span>+91 99887 76655</span>
          </div>

          {/* Location */}
          <div className="flex items-center mb-5 mt-5 space-x-3 text-gray-700 text-base sm:text-2lg max-w-md">
            <MdLocationOn size={28} className="text-yellow-500 flex-shrink-0" />
            <p className="flex-1 leading-snug">
              Kim Main Road opp RK Park
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center mb-6 space-x-3 text-gray-700 text-base sm:text-lg break-words">
            <MdEmail size={28} className="text-yellow-500 flex-shrink-0" />
            <a
              href="mailto:patilmobile@gmail.com"
              className="hover:text-yellow-500 transition duration-300 font-medium"
            >
              patilmobile@gmail.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 justify-center sm:justify-start">
            {socialLinks.map(({ icon: Icon, url, label }, idx) => (
              <a
                key={idx}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${label} page`}
                className="text-gray-700 hover:text-yellow-500 transition duration-300"
              >
                <Icon
                  size={28}
                  className="sm:hover:scale-110 transform transition-transform duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Policy Links */}
      <div className="max-w-7xl mx-auto mt-12 border-t border-gray-300 pt-6 flex flex-wrap justify-center sm:justify-between gap-4 text-gray-600 text-sm sm:text-base select-none">
        <a href="/privacy-policy" className="hover:text-yellow-500 transition duration-300">
          Privacy Policy
        </a>
        <a href="/terms-conditions" className="hover:text-yellow-500 transition duration-300">
          Terms &amp; Conditions
        </a>
        <a href="/disclaimer" className="hover:text-yellow-500 transition duration-300">
          Disclaimer
        </a>
        <a href="/refund-policy" className="hover:text-yellow-500 transition duration-300">
          Refund Policy
        </a>
        <a href="/cookie-policy" className="hover:text-yellow-500 transition duration-300">
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

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Organization Info */}
        <div>
          <h2 className="text-xl font-semibold">BBYDI x SAFERNET</h2>
          <p className="mt-3 text-gray-400">
            Committed to supporting survivors and creating a safe community for all.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Get Help</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="mt-3 flex gap-4">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-500">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-400">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-blue-600">
              <FaLinkedinIn size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 border-t border-gray-700 pt-5 text-gray-500 text-sm">
        © {new Date().getFullYear()} BBYDI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

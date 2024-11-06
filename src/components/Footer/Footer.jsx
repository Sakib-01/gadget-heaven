import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200 w-8/12 mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Gadget Heaven</h1>
          <p className="text-gray-500">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center">
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="text-gray-500 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-700">
                  Product Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="text-gray-500 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="text-gray-500 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-700">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  const links = [
    'About Us',
    'Terms and Conditions',
    'Privacy Policy',
    'Privacy Policy for Mobile Apps',
    'Shipping and Returns Policy',
    'International Delivery',
    'For Businesses, Hotels and Resorts'
  ];

  return (
    <div className="bg-[#E8F3E9] py-8 px-4 flex justify-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[#2F5233] text-lg font-semibold mb-4">Information</h2>
        <nav>
          <ul className="space-y-2">
            {links.map(link => (
              <li key={link}>
                <a href="#" className="text-gray-600 hover:text-[#2F5233] transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
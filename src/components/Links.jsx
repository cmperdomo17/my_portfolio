import React from 'react';

const ContactLink = ({ href, children }) => (
  <a href={href} className={`p-2 mr-1 md:mr-4 mt-4 text-xl rounded-full hover:scale-110 md:hover:scale-125 transition-all duration-500 bg-blue-600 text-white flex items-center justify-center`}>
    {children}
  </a>
);

export default ContactLink;
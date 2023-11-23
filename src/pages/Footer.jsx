import React from 'react';


function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center p-4 mt-8 ">
      <div className="mb-2">
       
        <a href="/terms" className="hover:text-blue-300 mx-2">Terms of Service</a>
        <a href="/privacy" className="hover:text-blue-300 mx-2">Privacy Policy</a>
      
      </div>
      <p>&copy; {new Date().getFullYear()} Garen Ghazarian. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

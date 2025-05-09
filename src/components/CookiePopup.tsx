"use client";

import { useEffect, useState } from "react";
import Button from "./Button";

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check if the user has previously consented to cookies
    const hasConsented = localStorage.getItem("intellicookieConsent");

    if (!hasConsented) {
      // If not, show the popup
      setShowPopup(true);
    }
  }, []);

  const handleAllowCookies = () => {
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);

    // Set the cookie consent in local storage
    localStorage.setItem("intellicookieConsent", "true");

    document.cookie =
      "consent=true; expires=" + expiryDate.toUTCString() + "; path=/";

    setShowPopup(false);
  };

  const handleCancelCookies = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="fixed bottom-0 w-full flex justify-between items-center bg-gray-900 text-white p-4 z-20">
        <p>This website uses cookies to enhance user experience.</p>
        <div className="flex space-x-4">
          <Button
            title="Allow Cookies"
            btnType="button"
            onClick={handleAllowCookies}
          />
          <button
            type="button"
            onClick={handleCancelCookies}
            className="bg-slate-500 hover:bg-black py-1 px-2 lg:px-8 rounded-3xl focus:outline-none transition duration-300 ease-in-out"
          >
            Cancel
          </button>
        </div>
      </div>
    )
  );
};

export default CookiePopup;

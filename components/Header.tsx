"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // --- Mobile Menu Toggle Logic ---
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);


  // --- Header Visibility on Scroll Logic ---
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Don't hide header if mobile menu is open
      if (isMenuOpen) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, isMenuOpen]);

  const navLinks = [
    { href: "/who-we-are", label: "Who we are" },
    { href: "/what-we-do", label: "What we do" },
    { href: "/our-clients", label: "Our Client" },
    { href: "/our-products", label: "Our Products" },
    { href: "#", label: "Become an Affiliate" },
  ];

  const mobileNavLinks = [
    { href: "/", label: "Home" },
    { href: "/who-we-are", label: "Who we are" },
    { href: "/what-we-do", label: "What we do" },
    { href: "/our-clients", label: "Our Client" },
    { href: "/our-products", label: "Our Products" },
  ];

  const isActive = navLinks.some(link => pathname === link.href);
  console.log('pathname', pathname);
  console.log('active link', isActive);
  

  return (
    <>
      {/* -- Page Header -- */}
      <header
        className={`sticky top-0 z-50 container mx-auto max-w-[1200px] bg-white px-4 pt-0 transition-transform duration-300 ease-in-out lg:backdrop-blur-sm shadow-md border-b-2 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-[150%]"
        }`}
      >
        <div className="py-4 md:px-10 w-full flex h-11 md:h-12 items-center justify-between   gap-8">
          <div className="flex items-center ">
            <Link href="/" className="hidden md:flex items-center font-semibold text-sm text-gray-700 px-4 py-2 hover:bg-gray-200 transition-colors rounded-full">
              Home
            </Link>
            <Link
              href="/contact-us"
              className="md:hidden rounded-full bg-red-600 px-2 py-1 text-sm font-medium text-white shadow-sm hover:bg-red-500"
            >
              Get in Touch
            </Link>
            <nav className="hidden lg:flex px-4 py-3">
              <ul className="flex items-center gap-2 font-semibold text-sm text-gray-700 capitalize tracking-wider">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block rounded-full px-4 py-2 hover:bg-gray-200 transition-colors"
                    >
                      {link.label}                     
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              href="/contact-us"
              className="hidden md:inline-block rounded-full bg-red-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-red-500"
            >
              Get in Touch
            </Link>
            <button
              onClick={toggleMenu}
              className="lg:hidden rounded-full p-2 text-black hover:bg-gray-200"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* -- Full-Screen Mobile Menu -- */}
      <nav
        className={`fixed inset-0 z-40 flex justify-center overflow-y-auto bg-red-400/95 py-24 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="my-auto">
          <ul className="flex flex-col items-center gap-8 text-center">
            {mobileNavLinks.map((link) => (
               <li key={link.label}>
                 <Link
                   href={link.href}
                   onClick={closeMenu} // Close menu on link click
                   className="text-xl font-medium text-white/80 hover:text-white"
                 >
                   {link.label}
                 </Link>
               </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
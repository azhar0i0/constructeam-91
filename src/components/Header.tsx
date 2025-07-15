import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { 
      name: "Projects", 
      href: "/projects",
      dropdown: [
        { name: "Residential", href: "/projects/residential" },
        { name: "Commercial", href: "/projects/commercial" }
      ]
    },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleProjectsMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsProjectsOpen(true);
  };

  const handleProjectsMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProjectsOpen(false);
    }, 2000); // 2 second delay
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProjectsOpen(false);
    }, 2000); // 2 second delay
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex justify-between items-center py-2 md:py-3">
          <div className="flex items-center">
            <Link to="/" className="group" onClick={handleLinkClick}>
              <span className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-slate-800 to-orange-600 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-slate-800 transition-all duration-300">
                Constructeam
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={handleProjectsMouseEnter}
                    onMouseLeave={handleProjectsMouseLeave}
                  >
                    <button
                      className={`font-medium transition-all duration-300 relative group flex items-center text-sm lg:text-base xl:text-lg ${
                        isActive(item.href) || location.pathname.startsWith('/projects')
                          ? "text-orange-600"
                          : "text-slate-700 hover:text-orange-600"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isProjectsOpen ? 'rotate-180' : ''}`} />
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full ${
                        isActive(item.href) || location.pathname.startsWith('/projects') ? "w-full" : ""
                      }`}></span>
                    </button>
                    
                    {isProjectsOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fade-in z-50"
                        onMouseEnter={handleDropdownMouseEnter}
                        onMouseLeave={handleDropdownMouseLeave}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            onClick={handleLinkClick}
                            className="block px-4 py-3 text-slate-700 hover:text-orange-600 hover:bg-orange-50 transition-all duration-300 text-sm lg:text-base"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`font-medium transition-all duration-300 relative group text-sm lg:text-base xl:text-lg ${
                      isActive(item.href)
                        ? "text-orange-600"
                        : "text-slate-700 hover:text-orange-600"
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full ${
                      isActive(item.href) ? "w-full" : ""
                    }`}></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-orange-600 transition-colors p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4 bg-gray-50 rounded-lg p-6">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors py-2 block ${
                      isActive(item.href)
                        ? "text-orange-600"
                        : "text-slate-700 hover:text-orange-600"
                    }`}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block text-slate-600 hover:text-orange-600 transition-colors py-1"
                          onClick={handleLinkClick}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

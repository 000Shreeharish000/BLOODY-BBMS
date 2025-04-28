
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, AlignJustify, X, Moon, Sun } from 'lucide-react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { useTheme } from '@/hooks/use-theme';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { theme, setTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Donate Blood', path: '/donate' },
    { name: 'Find Blood', path: '/find' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-lifepulse-red" fill="#ea384c" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">LifePulse</span>
            </Link>
          </div>
          
          {isDesktop ? (
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className="text-gray-600 hover:text-lifepulse-red dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="outline" size="sm" className="ml-4">
                Login
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="mr-2"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isOpen ? <X className="h-6 w-6" /> : <AlignJustify className="h-6 w-6" />}
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && !isDesktop && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-600 hover:text-lifepulse-red dark:text-gray-300 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 pb-1">
              <Button className="w-full" onClick={() => setIsOpen(false)}>Login</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

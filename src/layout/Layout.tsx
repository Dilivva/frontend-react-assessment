import { FC } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

interface ILayoutProps {};

const Layout: FC<ILayoutProps> = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
        
        <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">
            Send24 
            </Link>

          </div>
        </header>
  
        {/* Main Content */}
        <main className="flex-grow container mx-auto px-4 py-6"><Outlet /></main>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-8">
  
            {/* Footer Bottom */}
            <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400">
              <p>© 2025 MyApp. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Layout;
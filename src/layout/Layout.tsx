import { FC } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

interface ILayoutProps {};

const Layout: FC<ILayoutProps> = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
          {/* Header */}
          <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-xl font-bold">
                MyApp
              </Link>
              {/* <nav>
                <Link to="/" className="mr-4 hover:underline">
                  Home
                </Link>
              </nav> */}
            </div>
          </header>
    
          {/* Main Content */}
          <main className="flex-grow container mx-auto p-4"><Outlet /></main>
    
          {/* Footer */}
          <footer className="bg-gray-800 text-white p-4 text-center">
            <p>© 2025 MyApp. All rights reserved.</p>
          </footer>
        </div>
      );
}

export default Layout
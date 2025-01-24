import { FC } from "react";
import { Outlet } from "react-router";

interface ILayoutProps {};

const Layout: FC<ILayoutProps> = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-blue-500 text-white p-4">
                <h1 className="text-xl">My App</h1>
            </header>
            <main className="flex-grow p-4"><Outlet /></main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>© 2025 My App</p>
            </footer>
        </div>
      );
}

export default Layout
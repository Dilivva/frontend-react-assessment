import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full min-h-screen">
      <Sidebar />
      <Navbar />
      <div className="w-full min-h-screen container mx-auto">{children}</div>
    </main>
  );
};

export default Layout;

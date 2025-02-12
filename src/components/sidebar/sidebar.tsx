import { Link } from "react-router";
import React from "react";
import { Store } from "lucide-react";

type sidebarLinks = {
  link: string;
  name: string;
  icon: React.ReactNode;
};

const Sidebar = () => {
  const SIDENAVLINKS: sidebarLinks[] = [
    {
      link: "/",
      name: "Shop",
      icon: <Store />,
    },
  ];
  return (
    <>
      {/* desktop sidenav */}
      <div className="hidden lg:block">
        <div className="fixed left-0 top-0 bottom-0 z-30 border-r bg-gray-50 w-[250px]">
          <div className="w-full h-full py-10">
            <Link
              to={"/"}
              className="px-4 font-bold text-primary-dark text-3xl"
            >
              My Store
            </Link>
            <div className="w-full h-fit flex flex-col gap-4 mt-[50px]">
              {SIDENAVLINKS.map((link: sidebarLinks) => (
                <Link
                  key={link.name}
                  to={link.link}
                  className="w-full h-[50px] bg-primary-dark text-white hover:bg-primary-light hover:text-primary-dark transition-all flex items-center gap-2 px-4"
                >
                  <span>{link.icon}</span>
                  <span className="font-bold">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* tablet-mobile sidenav */}
      {/* <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <div className="w-full h-full py-10">
              <Link
                to={"/"}
                className="px-4 font-bold text-primary-dark text-3xl"
              >
                My Store
              </Link>
              <div className="w-full h-fit flex flex-col gap-4 mt-[50px]">
                {SIDENAVLINKS.map((link: sidebarLinks) => (
                  <Link
                    to={link.link}
                    key={link.name}
                    className="w-full h-[50px] bg-primary-dark text-white hover:bg-primary-light hover:text-primary-dark transition-all flex items-center gap-2 px-4"
                  >
                    <span>{link.icon}</span>
                    <span className="font-bold">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div> */}
    </>
  );
};

export default Sidebar;

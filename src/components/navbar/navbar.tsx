import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { Link } from "react-router";
import { DialogHeader } from "../ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu, Search } from "lucide-react";
import { Store } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type sidebarLinks = {
  link: string;
  name: string;
  icon: React.ReactNode;
};

const Navbar = () => {
  const SIDENAVLINKS: sidebarLinks[] = [
    {
      link: "/",
      name: "Shop",
      icon: <Store />,
    },
  ];
  return (
    <nav className="w-full h-[80px] fixed left-0 top-0 z-10 bg-gray-50 backdrop-blur-sm right-0 px-4">
      {/* desktop navbar */}
      <div className="hidden lg:block ml-[250px]">
        <div className="w-full h-full container mx-auto ">
          <div className="w-full h-full flex items-center justify-between">
            <div className="w-[450px] h-[50px] flex items-center justify-between rounded-md overflow-hidden mt-[15px]">
              <input
                className="w-[85%] h-full border-none outline-none px-2"
                placeholder="Search for a product..."
              />
              <Button className="flex items-center justify-center bg-primary-dark text-white w-[20%] h-full hover:bg-primary-light">
                <Search />
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="border-none outline-none">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-[10px]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      <div className="block lg:hidden">
        <div className="w-full h-[80px] container mx-auto ">
          <div className="w-full h-full flex items-center justify-between">
            <Link to={"/"} className=" font-bold text-primary-dark text-3xl">
              My Store
            </Link>
            <div className="flex items-center gap-4">
              <Dialog>
                <DialogTrigger>
                  <Search />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>Mobile Search Comes here...</DialogHeader>
                </DialogContent>
              </Dialog>
              <Sheet>
                <SheetTrigger>
                  <Menu />
                </SheetTrigger>
                <SheetContent>
                  <div className="w-full h-full py-10">
                    <Link
                      to={"/"}
                      className="font-bold text-primary-dark text-3xl"
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

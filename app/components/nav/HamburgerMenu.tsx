import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavItems from "./NavItems";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

const HamburgerMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="  bg-[#525AA0] text-white">
        <SheetHeader className="">
          <SheetTitle className="pb-6">
            <Link href={"/"} className="block my-auto">
              <Image
                className="object-contain w-28 hover:scale-105"
                src={"/logo.png"}
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </SheetTitle>
          <SheetDescription>
            <NavItems sideNav={true} />
            <div className="flex  mt-6 space-x-5">
              <button className="hover:font-bold text-lg w-fit my-auto text-white">
                Log In
              </button>
              <button className="bg-white w-fit hover:bg-slate-200 transition-all  rounded-[16px] px-6 py-[14px] duration-200 ease-in-out ">
                Join Now
              </button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default HamburgerMenu;

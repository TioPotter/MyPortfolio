import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import SunAnimation from "@/app/looties/SunAnimation";

const Header = () => {
  return (
    <header className="py-8 text-white xl:py-12">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logotipo */}
        <Link href="/" className="">
          <SunAnimation />
        </Link>
        {/* Desktop nav y boton de contratame*/}
        <div className="hidden xl:flex xl:items-center">
          <Nav />
          <Link href="/contact" className="ml-5">
            <Button>Hire me</Button>
            <button className="ml-5 rounded-xl bg-neon px-2 py-1 text-black">
              English
            </button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

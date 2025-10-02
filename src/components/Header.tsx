import { UserButton, useUser } from "@clerk/clerk-react";
import LogoIcon from "./LogoIcon";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
    { name: "New", path: "/new" },
    { name: "PreOwned", path: "/preowned" },
  ];
  const { isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-xl p-3 bg-(--color-primary-foreground) ">
      <LogoIcon width={50} height={50} color="#111" />

      <nav>
        <ul className="md:flex hidden gap-16">
          {navLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <a href={link?.path}>{link?.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {isSignedIn ? (
        <div>
          <UserButton />
          <Link to={"/profile"}>
           <Button>Submit Buttonnn</Button>
          </Link>
          
        </div>
      ) : (
        <Button>Submit Buttonnn</Button>
      )}
    </div>
  );
};

export default Header;

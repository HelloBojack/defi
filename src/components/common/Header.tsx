import { Link } from "react-router-dom";
import { Wallets } from "../Wallets";
import { Container } from "./Container";

const ROUTES = [
  {
    name: "learn",
    to: "/learn",
  },
  {
    name: "governance",
    to: "/governance",
  },
  {
    name: "about",
    to: "/about",
  },
  {
    name: "dashboard",
    to: "/dashboard",
  },
];

export const Header = () => {
  return (
    <div className="h-[64px] max-auto flex items-center justify-center border-b border-b-white/10">
      <Container className="flex items-center justify-between">
        <Link
          className="text-[22px] font-bold transition-all duration-300 hover:opacity-80 hover:text-[color:inherit]"
          to="/"
        >
          DeFiLogo
        </Link>
        <div className="flex items-center space-x-[30px]">
          {ROUTES.map((route) => (
            <Link
              to={route.to}
              key={route.name}
              className="font-semibold transition-all duration-300 hover:opacity-80 hover:text-[color:inherit]"
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div>
          <Wallets />
        </div>
      </Container>
    </div>
  );
};

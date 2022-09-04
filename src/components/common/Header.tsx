import { Link } from "react-router-dom";
import { Wallets } from "../Wallets";

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
    <div>
      <div>DeFi</div>
      <div>
        {ROUTES.map((route) => (
          <Link to={route.to} key={route.name}>
            {route.name}
          </Link>
        ))}
      </div>
      <div>
        <Wallets />
      </div>
    </div>
  );
};

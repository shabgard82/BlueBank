import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { User } from "iconsax-react";
import { Card } from "iconsax-react";
import { ArrowSwapHorizontal } from "iconsax-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home3 } from "iconsax-react";
import { Menu } from "iconsax-react";

export default function LabelBottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <BottomNavigation
      sx={{ zIndex: 666, width: "100%", position: "absolute", bottom: 0 }}
      value={location.pathname}
      onChange={(event, newValue) => handleNavigation(newValue)}
    >
      <BottomNavigationAction
        value="/profile"
        icon={<User size="32" />}
        style={{
          color: location.pathname === "/profile" ? "#3385ff" : "gray"
        }}
      />
      <BottomNavigationAction
        value="/card"
        icon={<Card size="32" />}
        style={{
          color: location.pathname === "/card" ? "#3385ff" : "gray"
        }}
      />
      <BottomNavigationAction
        value="/qrcode-scan"
        icon={<Menu size="32" fontWeight={600} />}
        style={{
          color: location.pathname === "/qrcode-scan" ? "#3385ff" : "gray"
        }}
      />
      <BottomNavigationAction
        value="/enteghal"
        icon={<ArrowSwapHorizontal size="32" />}
        style={{
          color: location.pathname === "/enteghal" ? "#3385ff" : "gray"
        }}
      />
      <BottomNavigationAction
        value="/home"
        icon={<Home3 size="32" />}
        style={{
          color: location.pathname === "/home" ? "#3385ff" : "gray"
        }}
      />
    </BottomNavigation>
  );
}
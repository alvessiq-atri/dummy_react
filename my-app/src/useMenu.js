import { useState } from "react";

const useMenu = () => {
  const [menuList, setMenuList] = useState();
  return menuList;
};

export default useMenu;

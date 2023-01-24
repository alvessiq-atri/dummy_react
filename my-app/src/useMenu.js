import { useState, useEffect } from "react";
import axios from "axios";

// const fetchData = () => {

// }

const useMenu = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const result = await axios.get(url);
      setData(result.data);
      console.log(result.data);
    })();
  }, [url]);

  return data;
};

export default useMenu;

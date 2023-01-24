import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import EditMenu from "../routes/edit-menu";

export default function ParentEditMenu() {
  let { plateId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const result = await axios.get("http://localhost:8000/menu/" + plateId);
      //   console.log(result.data);
      setData(result.data);
    })();
  }, [plateId]);
  //   console.log(data);
  return (
    <div>
      {/* <h2>{data.ingredients + ""}</h2> */}
      <h3 className="d-flex justify-content-center">Edit plate:</h3>
      {data ? <EditMenu data={data} /> : null}
    </div>
  );
}

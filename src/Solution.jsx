import { useEffect, useState } from "react";
import axios from "axios";
import User from "./User.jsx"

function Solution() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=3")
      .then((response) => {
        setData(response.data.results);
        console.log(response.data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((user) => (
        <div key={user.id.value}>
          <User last={user.name.last}
                first={user.name.first}
                email={user.email}
                thumbnail={user.picture.thumbnail}
                />
          </div>
      ))}
    </ul>
  );
}
export default Solution;

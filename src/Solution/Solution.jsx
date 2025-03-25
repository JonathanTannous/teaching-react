import axios from "axios";
import { useEffect, useState } from "react";
import User from "./User";

function Solution() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();

    async function getUserData() {
      try {
        const res = await axios.get("https://randomuser.me/api/?results=3");
        console.log(res?.data);
        setUserData(res?.data.results);
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  return (
    <>
      <h1 className="flex justify-center text-3xl hover:bg-blue-100">
        Hello World
      </h1>
      <div className="flex justify-center">
        <ol className="mt-4 grid w-full grid-cols-3 place-items-center">
          {userData &&
            userData.map((user) => (
              <li key={user.id.value}>
                <User
                  nameFirst={user.name.first}
                  nameLast={user.name.last}
                  email={user.email}
                />
              </li>
            ))}
        </ol>
      </div>
    </>
  );
}

export default Solution;

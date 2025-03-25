import axios from "axios";
import { useEffect, useState } from "react";

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
                <section className="flex gap-2">
                  <h2>Name:</h2>
                  <p>
                    {user.name.first} {user.name.last}
                  </p>
                </section>
                <section className="flex gap-2">
                  <h2>Email:</h2>
                  <p>{user.email}</p>
                </section>
              </li>
            ))}
        </ol>
      </div>
    </>
  );
}

export default Solution;

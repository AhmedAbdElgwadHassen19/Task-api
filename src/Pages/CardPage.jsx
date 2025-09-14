import { useEffect, useState } from "react";
import { getUsers } from "../server/api.js";

export default function CardPage() {

    const [users, setUsers] = useState([]);
    
      useEffect(() => {
        getUsers().then(setUsers);
      }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
        List of Users
      </h1>

      
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div
              key={user.id}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <h2 className="text-lg font-semibold text-gray-700">{user.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{user.email}</p>

              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-full"></button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No users available .
          </p>
        )}
      </div>
    </div>
  )
}

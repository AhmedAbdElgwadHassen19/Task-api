import  { useEffect, useState } from "react";
import { getUsers } from "../server/api.js";
import SearchBox from "../Components/SearchBox.jsx";
import Table from "../Components/Table.jsx";

export default function UserPage() {
    const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm(" Do you want to delete this user? ")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleSaveEdit = () => {
    setUsers(
      users.map((u) => (u.id === editingUser.id ? editingUser : u))
    );
    setEditingUser(null);
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );
  
  
   return (
      <div className="p-6 bg-gray-100 min-h-screen">
  
        <SearchBox value={search} onChange={setSearch} />
  
        <Table
          users={filteredUsers}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
        
  
        {editingUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white p-6 rounded-xl shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4"> Edit User </h2>
  
              <input
                type="text"
                value={editingUser.name}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, name: e.target.value })
                }
                className="w-full border p-2 rounded mb-3"
                placeholder="Name"
              />
  
              <input
                type="email"
                value={editingUser.email}
                onChange={(e) =>
                  setEditingUser({ ...editingUser, email: e.target.value })
                }
                className="w-full border p-2 rounded mb-3"
                placeholder="Email"
              />
  
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setEditingUser(null)}
                  className="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500">Cancel</button>
                <button
                  onClick={handleSaveEdit}
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

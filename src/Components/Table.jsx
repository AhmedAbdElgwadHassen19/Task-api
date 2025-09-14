
export default function Table({ users, onDelete, onEdit }) {
  return (
    <div className="overflow-x-auto shadow-lg rounded-2xl ">
      <table className="w-full table-auto bg-white border border-gray-200 rounded-2xl">
        <thead className="bg-blue-600 text-white text-sm sm:text-base">
          <tr>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">ID</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Name</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Email</th>
            <th className="py-2 px-2 sm:py-3 sm:px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 text-sm sm:text-base"
              >
                <td className="py-2 px-2 sm:py-2 sm:px-4">{user.id}</td>
                <td className="py-2 px-2 sm:py-2 sm:px-4">{user.name}</td>
                <td className="py-2 px-2 sm:py-2 sm:px-4">{user.email}</td>
                <td className="py-2 px-2 sm:py-2 sm:px-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => onEdit(user)}
                    className="bg-yellow-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg hover:bg-yellow-600 text-xs sm:text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(user.id)}
                    className="bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-lg hover:bg-red-600 text-xs sm:text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                className="text-center py-4 text-gray-500 text-sm sm:text-base"
              >
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

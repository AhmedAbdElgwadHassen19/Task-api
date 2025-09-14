export default function SearchBox({ value, onChange }) {
  return (
    <div className="mb-6 w-full">
      <input
        type="text"
        placeholder="search by name..."
        className="w-full border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

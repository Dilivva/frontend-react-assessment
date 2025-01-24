import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import AnimateRoute from "../components/AnimateRoute";

const HomePage: React.FC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item: any) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AnimateRoute>
      <h1 className="text-2xl font-bold mb-6">Home Page</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title..."
        className="w-full p-2 border border-gray-300 rounded mb-6"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item: any) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{item.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <a
                    href={`/details/${item.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {item.title}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AnimateRoute>
  );
};

export default HomePage;
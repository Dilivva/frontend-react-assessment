import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

// DEFINE TYPE
interface Users {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  email: string;
}

const Home: FC = () => {
  // SET STATES
  const [data, setData] = useState<Users[]>([]);
  const [filteredData, setFilteredData] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const resultsPerPage = 5;

  const navigate = useNavigate();
// FETCH DATA
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axios.get('https://randomuser.me/api/?results=50');
        setData(data.results);
        setFilteredData(data.results);
      } catch (err) {
        setError('Failed to fetch users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  // SEARCH DATA
  useEffect(() => {
    const filtered = data.filter(({ name, email }) => {
      const fullName = `${name.first} ${name.last}`.toLowerCase();
      return (
        fullName.includes(search.toLowerCase()) || email.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page on new search
  }, [search, data]);

  // PAGINATE DATA
  const handlePageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentPage < Math.ceil(filteredData.length / resultsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + resultsPerPage);

  const handleItemClick = (user: Users) => {
    navigate(`/product`, { state: { user } });
  };

  return (
    <Layout>
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome to the Delivva!</h2>
        <input
          type="text"
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border border-orange-500 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-orange-300"
        />

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <ul className="grid gap-4">
            {currentData.map((user) => (
              <li
                key={user.login.uuid}
                onClick={() => handleItemClick(user)}
                className="p-4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg cursor-pointer"
              >
                <p className="font-medium text-lg">
                  {user.name.first} {user.name.last}
                </p>
                <p className="text-gray-600">{user.email}</p>
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => handlePageChange('prev')}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${currentPage === 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {Math.ceil(filteredData.length / resultsPerPage)}
          </span>
          <button
            onClick={() => handlePageChange('next')}
            disabled={currentPage === Math.ceil(filteredData.length / resultsPerPage)}
            className={`px-4 py-2 rounded-lg ${currentPage === Math.ceil(filteredData.length / resultsPerPage)
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

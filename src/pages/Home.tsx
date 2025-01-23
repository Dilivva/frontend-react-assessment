import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

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
  const [data, setData] = useState<Users[]>([]);
  const [filteredData, setFilteredData] = useState<Users[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const resultsPerPage = 5;

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

  const handlePageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentPage < Math.ceil(filteredData.length / resultsPerPage)) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + resultsPerPage);

  return (
    <Layout>
      <h1>Welcome to the Home Page!</h1>
      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%', outline: 'none', border: '1px solid #e87003', borderRadius: '5px' }}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <>
          <ol>
            {currentData.map(({ login, name, email }) => (
              <li key={login.uuid}>
                <div>Name: {name.first} {name.last}</div>
                <div>Email: {email}</div>
                <hr />
              </li>
            ))}
          </ol>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
            <button
              onClick={() => handlePageChange('prev')}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>Page {currentPage} of {Math.ceil(filteredData.length / resultsPerPage)}</span>
            <button
              onClick={() => handlePageChange('next')}
              disabled={currentPage === Math.ceil(filteredData.length / resultsPerPage)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Home;

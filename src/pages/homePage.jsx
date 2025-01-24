import { useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { useGlobalContext } from "../utils/context";
import { Pagination } from "../components/pagination";
import { HeaderComponent } from "../components/header";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [leagues, setLeagues] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10); // Default items per page

  const { setGlobalLoading } = useGlobalContext();

  // Fetch leagues data
  async function fetchLeagues() {
    setGlobalLoading(true);
    const url = "all_leagues.php";

    try {
      const {
        data: { leagues },
        status,
      } = await customFetch(url);

      if (status === 200 && leagues) {
        setLeagues(leagues);
        setGlobalLoading(false);
      }
    } catch (error) {
      setGlobalLoading(false);
    }
  }

  // Handle page changes
  const handlePageChange = ({ pageNo, perPage }) => {
    setCurrentPage(pageNo);
    setPaginatedData(paginateData(leagues, pageNo, perPage));
  };

  // Handle per-page changes
  const handlePerPageChange = (newPerPage) => {
    setPerPage(newPerPage);
    setPaginatedData(paginateData(leagues, 1, newPerPage)); // Reset to page 1
    setCurrentPage(1); // Reset to first page
  };

  //Paginate the data
  const paginateData = (data, pageNo, perPage) => {
    const startIndex = (pageNo - 1) * perPage;
    const endIndex = startIndex + perPage;
    return data.slice(startIndex, endIndex);
  };

  useEffect(() => {
    fetchLeagues();
  }, []);

  useEffect(() => {
    // Paginate the fetched data when the current page or perPage changes
    if (leagues.length > 0) {
      setPaginatedData(paginateData(leagues, currentPage, perPage));
    }
  }, [leagues, currentPage, perPage]);

  return (
    <div>
      <HeaderComponent
        title={"Welcome!"}
        subtitle={"Explore your favorite leagues"}
      />
      <h1 className=" text-xl mb-3">Sport Leagues</h1>

      {/* League List */}
      {paginatedData.length > 0 ? (
        <table className="min-w-full table-auto mt-4">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">League</th>
              <th className="px-4 py-2 text-left">Sport</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((league) => (
              <tr key={league.idLeague} className="border-t">
                <td className="px-4 py-2">
                  {" "}
                  <Link to={"#"}>{league.strLeague}</Link>{" "}
                </td>
                <td className="px-4 py-2">{league.strSport}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No leagues found.</p>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(leagues.length / perPage)}
        onPageChange={handlePageChange}
        onPerPageChange={handlePerPageChange}
      />
    </div>
  );
};

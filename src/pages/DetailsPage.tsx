import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import  AnimateRoute from "../components/AnimateRoute";

const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setData(response.data);
      } catch (err) {
        setError("Failed to fetch details.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return (<Loader />);
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <AnimateRoute>
      <h1 className="text-2xl font-bold mb-4">{data?.title}</h1>
      <p>{data?.body}</p>
    </AnimateRoute>
  );
};

export default DetailsPage;
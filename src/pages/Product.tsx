import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";

const Product = () => {
      const location = useLocation();
      const user = location.state?.user;

      if (!user) {
            return <p>No user data available</p>;
      }

      return (
            <Layout>
                  <Link to="/"><p className="text-[#e87003]"> -- Go To List</p></Link>
                  <div className="p-6 max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-4">
                              User Details
                        </h2>
                        <p className="text-lg font-medium">Name: {user.name.first} {user.name.last}</p>
                        <p className="text-lg">Email: {user.email}</p>
                  </div>
            </Layout>
      );
};

export default Product;

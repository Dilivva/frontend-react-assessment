import { Link } from "react-router-dom";
import Layout from "../components/Layout";


const PageNotFound = () => {
  return (
    <>
      <Layout>
        <h1>404 - Page Not Found</h1>
        <Link to="/">Go Home</Link>
      </Layout>

    </>
  )

};

export default PageNotFound;



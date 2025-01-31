import { Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import profile from "../assets/profile.jpg";

const Product = () => {
  const location = useLocation();
  const user = location.state?.user;

  console.log(user);

  // Format Date of Birth
  const formatDate = (dobString: string | number | Date) => {
    if (!dobString) return "May 11, 1998";
    return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(dobString));
  };

  // Calculate Age
  const calculateAge = (dobString: string | number | Date) => {
    if (!dobString) return "26";
    const dob = new Date(dobString);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age;
    }
    return age;
  };

  return (
    <Layout>
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <Link to="/" className="text-[#e87003] hover:underline block mb-4 text-sm">
          ← Go to list
        </Link>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {user ? "User Details" : "Demo User Details"}
        </h2>

        {user ? (
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow">
            {/* User Profile Picture */}

            <img
              src={user.picture.large || profile}
              alt="User"
              className="w-28 h-28  object-cover rounded-full mb-4 border-4 border-gray-300 shadow-sm"
            />

            <p className="text-lg font-semibold text-gray-700">
              {user?.name?.first || "Fatima"} {user?.name?.last || "Bello"}
            </p>
            <p className="text-md text-gray-600">
              <span className="font-medium text-gray-800">Email:</span> {user?.email || "Mailtomodupe@gmail.com"}
            </p>
            <p className="text-md text-gray-600">
              <span className="font-medium text-gray-800">Phone:</span> {user?.phone || "09031703176"}
            </p>
            <p className="text-md text-gray-600">
              <span className="font-medium text-gray-800">Location:</span> {user?.location ? `${user.location.city}, ${user.location.country}` : "Abuja, Nigeria"}
            </p>
            <p className="text-md text-gray-600">
              <span className="font-medium text-gray-800">Date of Birth:</span> {formatDate(user?.dob?.date)}
            </p>
            <p className="text-md text-gray-600">
              <span className="font-medium text-gray-800">Age:</span> {calculateAge(user?.dob?.date)}
            </p>
            <p className="text-md text-gray-600">
              <span className="font-medium text-gray-800">Gender:</span>{user?.gender || "Mailtomodupe@gmail.com"}
            </p>
          </div>
        ) : (
          <div className="text-center text-[#FB585D] p-6">
            <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow">

              <img
                src={profile}
                alt="User"
                className="w-28 h-28 object-cover rounded-full mb-4 border-4 border-gray-300 shadow-sm"
              />

              <p className="text-lg font-semibold text-gray-700">
                {"Fatima"} {"Bello"}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-medium text-gray-800">Email:</span> {"Mailtomodupe@gmail.com"}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-medium text-gray-800">Phone:</span> {"09031703176"}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-medium text-gray-800">Location:</span> {"Abuja, Nigeria"}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-medium text-gray-800">Date of Birth:</span> {"May 11, 1998"}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-medium text-gray-800">Age:</span> {"26"}
              </p>
              <p className="text-md text-gray-600">
                <span className="font-medium text-gray-800">Gender:</span>{"Female"}
              </p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Product;

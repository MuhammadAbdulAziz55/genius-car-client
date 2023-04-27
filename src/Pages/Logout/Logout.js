import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Logout = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div className="mt-6 flex items-center justify-center">
        <button
          onClick={handleLogout}
          className="p-4 bg-orange-600 hover:bg-orange-500 text-white"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Logout;

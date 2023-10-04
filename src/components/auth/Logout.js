// src/components/Logout.js
import { useEffect } from 'react';
// import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import the confirmAlert function
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import the styles

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Show confirmation dialog before logging out
    confirmAlert({
      title: 'Confirm Logout',
      message: 'Are you sure you want to log out?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            // Clear the authentication token from local storage
            sessionStorage.removeItem('token');

            // Optionally, you can redirect to the home page or handle the logout process accordingly
            navigate('/');
          },
        },
        {
          label: 'No',
          onClick: () => {
            navigate(-1);
            // Do nothing if the user cancels the logout
          },
        },
      ],
    });
  }, [navigate]);

};

export default Logout;



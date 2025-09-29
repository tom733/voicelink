import react from 'react';

const Dashboard = () => {

    // Fetch user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    const username = user ? user.name : 'Gast';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">Hi {username} willkommen zu deinem Dashboard!</h1>
    </div>
    );
};
export default Dashboard;


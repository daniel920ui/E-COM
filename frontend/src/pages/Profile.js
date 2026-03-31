import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Please log in to view profile</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-3xl font-bold text-white">👤</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
          <p className="text-gray-600 mt-2">{user.email}</p>
          <span className="inline-block mt-4 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Role: {user.role}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Information</h3>
            <div className="space-y-3 text-sm">
              <p><span className="font-medium text-gray-700">Email:</span> {user.email}</p>
              <p><span className="font-medium text-gray-700">Member since:</span> {new Date(user.createdAt).toLocaleDateString()}</p>
              <p><span className="font-medium text-gray-700">Role:</span> {user.role}</p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
            <p className="text-gray-600 text-sm">Your recent orders will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


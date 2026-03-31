import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ShoppingCart, User, LogIn, LogOut } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">E-Shop</Link>
        <div className="flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-200 transition">Home</Link>
          <Link to="/products" className="text-white hover:text-blue-200 transition">Products</Link>
          <Link to="/cart" className="flex items-center text-white hover:text-blue-200 transition">
            <ShoppingCart size={20} className="mr-1" /> Cart
          </Link>
          {user ? (
            <>
              <Link to="/profile" className="flex items-center text-white hover:text-blue-200 transition">
                <User size={20} className="mr-1" /> {user.name}
              </Link>
              <button onClick={handleLogout} className="flex items-center text-white hover:text-blue-200 transition">
                <LogOut size={20} className="mr-1" />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white hover:text-blue-200 transition">Login</Link>
              <Link to="/register" className="text-white hover:text-blue-200 transition">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
</xai:function_call



<xai:function_call name="create_file">
<parameter name="absolute_path">c:/FULL_STACK_DEV/PRO2/frontend/src/pages/Home.js

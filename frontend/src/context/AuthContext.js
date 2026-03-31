import { createContext, useContext, useReducer, useEffect } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.payload
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        user: null
      };
    case 'USER_DETAILS':
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    loading: true
  });
  const navigate = useNavigate();

  // Load user from localStorage on mount
  useEffect(() => {
    const token = localStorage.getItem('userInfo');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(token).token}`;
      dispatch({ type: 'USER_LOGIN', payload: JSON.parse(token) });
    }
    setTimeout(() => dispatch({ type: 'USER_DETAILS_SUCCESS', payload: { user: null } }), 100);
    state.loading = false;
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('userInfo', JSON.stringify(data));
      api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      dispatch({ type: 'USER_LOGIN', payload: data });
      navigate('/profile');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  const logout = () => {
    localStorage.removeItem('userInfo');
    delete api.defaults.headers.common['Authorization'];
    dispatch({ type: 'USER_LOGOUT' });
    navigate('/');
  };

  const value = {
    ...state,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!state.loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


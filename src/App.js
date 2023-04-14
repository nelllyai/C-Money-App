import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { getToken } from './utils/tokenStorage';
import { tokenSlice } from './store/token/tokenSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  const token = useSelector(state => state.token.token);
  const tokenStorage = getToken();

  const navigate = useNavigate();

  useEffect(() => {
    if (token) return;
    if (tokenStorage) {
      dispatch(tokenSlice.actions.tokenSet({token}));
    } else {
      navigate('/auth');
    }
  }, [token]);


  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

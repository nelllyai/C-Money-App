import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Login from './Login';
import List from './List';
import Account from './Account';
import Exchange from './Exchange';

export const Main = () => {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/accounts/:id' element={<Account />} />
          <Route path='/auth' element={<Login />} />
          <Route path='/exchange' element={<Exchange />} />
        </Routes>
      </Layout>
    </main>
  );
};

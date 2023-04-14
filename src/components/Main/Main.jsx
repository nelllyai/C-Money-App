import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Login from './Login';
import List from './List';
import Account from './Account';

export const Main = () => {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path='/' element={<List />} />
          <Route path='/accounts/:id' element={<Account />} />
          <Route path='/auth' element={<Login />} />
        </Routes>
      </Layout>
    </main>
  );
};

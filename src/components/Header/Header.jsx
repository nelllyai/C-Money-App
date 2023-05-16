import Layout from '../Layout';
import style from './Header.module.css';
import Logo from '../Logo';
import Navigation from './Navigation';
import { useSelector } from 'react-redux';

export const Header = () => {
  const token = useSelector(state => state.token.token);

  return (
    <div className={style.header}>
      <Layout>
        <div className={style.container}>
          <Logo />

          {token && <Navigation />}
        </div>
      </Layout>
    </div>
  );
};

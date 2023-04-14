import Layout from '../Layout';
import style from './Header.module.css';
import Logo from '../Logo';
import { getToken } from '../../utils/tokenStorage';
import Navigation from './Navigation';

export const Header = () => {
  return (
    <div className={style.header}>
      <Layout>
        <div className={style.container}>
          <Logo />

          {getToken() && <Navigation />}
        </div>
      </Layout>
    </div>
  );
};

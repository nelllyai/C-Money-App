import Layout from '../Layout';
import Logo from '../Logo';
import style from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <Layout>
        <div className={style.container}>
          <Logo />
          <span className={style.copy}>© C-Money, 2022</span>
        </div>
      </Layout>
    </div>
  );
};

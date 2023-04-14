import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { accountRequestAsync } from '../../../store/account/accountActions';
import Button from '../../Button';
import Layout from '../../Layout';
import style from './Account.module.css';
import Table from './Table';
import Transaction from './Transaction';

export const Account = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const loading = useSelector(state => state.account.loading);
  const accountInfo = useSelector(state => state.account.account);

  const {
    account,
    transactions
  } = accountInfo;

  useEffect(() => {
    dispatch(accountRequestAsync(id));
  }, []);

  // console.log(transactions.length);

  return (
    <Layout>
      <div className={style.container}>
        <div className={style['container-header']}>
          <h2 className={style.title}>
            {loading || !account ?
              'Счёт' :
              'Счёт №' + account
            }
          </h2>
          <Button
            link='/'
            paddingVertical={12}
            paddingHorizontal={30}
            flex
            gap={10}
          >
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.83 5.5L7.41 1.91L6 0.5L0 6.5L6 12.5L7.41 11.09L3.83 7.5L16 7.5V5.5L3.83 5.5Z" fill="white"></path>
            </svg>
            Вернуться
          </Button>
        </div>
        {
          loading || !account ?
            <p>Загрузка...</p> :
            <>
              <div className={style.dynamic}>
                <div className={style['dynamic-header']}>
                  <h3 className={style['dynamic-title']}>Динамика</h3>
                  <span className={style['dynamic-year']}>2022</span>
                  <select className={style['dynamic-select']}>
                    <option hidden="">Год</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                  </select>
                </div>
              </div>

              <div className={style.history}>
                <h3 className={style['history-title']}>История переводов</h3>
                {
                  transactions.length ?
                    <Table transactions={transactions} /> :
                    <p>Переводы отсутствуют</p>
                }
              </div>

              <Transaction />
            </>
        }
      </div>
    </Layout>
  );
};

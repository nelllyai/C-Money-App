import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { accountRequestAsync } from '../../../store/account/accountActions';
import Button from '../../../UI/Button';
import style from './Account.module.css';
import Table from './Table';
import Transaction from './Transaction';
import Dynamic from './Dynamic';
import { Preloader } from '../../Preloader/Preloader';

export const Account = () => {
  const token = useSelector(state => state.token.token);

  const { id } = useParams();
  const dispatch = useDispatch();

  const loading = useSelector(state => state.account.loading);
  const accountInfo = useSelector(state => state.account.account);

  const {
    account,
    transactions
  } = accountInfo || {};

  useEffect(() => {
    if (token) dispatch(accountRequestAsync(id));
  }, [token]);

  return (
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
          paddingVerticalXS={15}
          paddingHorizontalXS={30}
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
          <Preloader /> :
          <>
            {
              transactions.length > 0 && <Dynamic transactions={transactions} />
            }

            <div className={style.history}>
              <h3 className={style['history-title']}>История переводов</h3>
              {
                transactions.length ?
                  <Table transactions={transactions} /> :
                  <p>Переводы отсутствуют</p>
              }
            </div>

            <div className={style.transaction}>
              <h3 className={style['transaction-title']}>Перевод</h3>
              <Transaction />
            </div>
          </>
      }
    </div>
  );
};

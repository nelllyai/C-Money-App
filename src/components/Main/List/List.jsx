import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import style from './List.module.css';
import { useEffect, useState } from 'react';
import { accountsCreateAsync, accountsRequestAsync } from '../../../store/accounts/accountsActions';
import selectSort from '../../../utils/sortAccounts';
import Button from '../../../UI/Button';

export const List = () => {
  const loading = useSelector(state => state.accounts.loading);
  const accounts = useSelector(state => state.accounts.accounts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(accountsRequestAsync());
  }, []);

  const [selectValue, setSelectValue] = useState('Номер счёта');
  const [selectId, setSelectId] = useState('account');
  const handleSelectChange = event => {
    setSelectId(event.target.selectedOptions[0].id);
    setSelectValue(event.target.value);
  };

  const handleCreateAccount = () => {
    dispatch(accountsCreateAsync());
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Здравствуйте, Александр!</h2>
      <Button
        type='button'
        paddingVertical={12}
        paddingHorizontal={30}
        marginBottom={50}
        marginBottomXS={10}
        onClick={handleCreateAccount}
      >
        Открыть новый счет
      </Button>

      <div className={style.currencies}>
        <h3 className={style['currencies-title']}>Мои счета</h3>

        <div className={style.sort}>
          <span className={style['sort-title']}>Сортировка:</span>
          <select
            className={style.select}
            value={selectValue}
            onChange={handleSelectChange}
          >
            <option id='account'>Номер счёта</option>
            <option id='balance'>Баланс</option>
            <option id='date'>Дата открытия</option>
            <option id='last'>Дата последней транзакции</option>
          </select>
        </div>

        <ul className={style.list}>
          {
            loading || !accounts ?
              <p>Загрузка...</p>
              :
              selectSort(accounts, selectId).map(account => (
                <Card key={account.account} accountInfo={account} />
              ))
          }
        </ul>
      </div>
    </div>
  );
};

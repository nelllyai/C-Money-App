import { Link } from 'react-router-dom';
import style from './Navigation.module.css';
import { deleteToken } from '../../../utils/tokenStorage';
import { useDispatch } from 'react-redux';
import { tokenSlice } from '../../../store/token/tokenSlice';

export const Navigation = () => {
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(tokenSlice.actions.tokenDelete());
    deleteToken();
  };

  return (
    <ul className={style.navigation}>
      <Link to='/'>Счета</Link>
      <Link to='/exchange'>Обмен</Link>
      <button className={style.exit} onClick={handleExit}>
        Выйти
        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={style.arrow}>
          <path d="M5.5675 9.6925L6.625 10.75L10.375 7L6.625 3.25L5.5675 4.3075L7.5025 6.25H0.25V7.75H7.5025L5.5675 9.6925ZM12.25 0.25H1.75C0.9175 0.25 0.25 0.925 0.25 1.75V4.75H1.75V1.75H12.25V12.25H1.75V9.25H0.25V12.25C0.25 13.075 0.9175 13.75 1.75 13.75H12.25C13.075 13.75 13.75 13.075 13.75 12.25V1.75C13.75 0.925 13.075 0.25 12.25 0.25Z" ></path>
        </svg>
      </button>
    </ul>
  );
};

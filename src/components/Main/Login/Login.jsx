import { useForm } from 'react-hook-form';
import style from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { tokenRequestAsync } from '../../../store/token/tokenActions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../UI/Button';

export const Login = () => {
  const token = useSelector(state => state.token.token);
  const authError = useSelector(state => state.token.error);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = data => {
    dispatch(tokenRequestAsync(data));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <legend className={style['form-title']}>Вход в аккаунт</legend>
          <div className={style['input-wrapper']}>
            <span className={style.error}>
              {errors.login && errors.login.message}
            </span>
            <label className={style.label}>Логин</label>
            <input
              {...register('login', {
                required: 'Заполните это поле',
                pattern: {
                  value: /[A-Za-z]{6,}/,
                  message: 'Некорректный логин'
                }
              })}
              className={style.input}
            />
          </div>

          <div className={style['input-wrapper']}>
            <span className={style.error}>
              {errors.password && errors.password.message}
            </span>
            <label className={style.label}>Пароль</label>
            <input
              {...register('password', {
                required: 'Заполните это поле',
                pattern: {
                  value: /[a-zA-Z0-9]{6,}/,
                  message: 'Некорректный пароль'
                }
              })}
              type="password"
              className={style.input}
            />
          </div>

          <Button type='submit' paddingVertical={22}>Войти</Button>
          {authError && <p className={style['submit-error']}>{authError}</p>}
        </form>
      </div>
    </div>
  );
};

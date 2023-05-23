import { useWebSocket } from 'react-use-websocket/dist/lib/use-websocket';
import { Item } from './Item/Item';
import style from './Rates.module.css';
import { WEBSOCKET_URL_API } from '../../../../api/const';
import { useState } from 'react';

export const Rates = () => {
  const [changes, setChanges] = useState([]);
  useWebSocket(`${WEBSOCKET_URL_API}/currency-feed`, {
    onMessage: messageEvent => {
      const message = JSON.parse(messageEvent.data);
      if (message.type !== 'EXCHANGE_RATE_CHANGE' || !message.change) return;
      setChanges(changes => [...changes, message]);
    },
    shouldReconnect: () => true,
  });

  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>Изменение курса в режиме реального времени</h3>
      <div>
        {changes.reverse().map(change => <Item change={change} />)}
      </div>
    </div>
  );
};

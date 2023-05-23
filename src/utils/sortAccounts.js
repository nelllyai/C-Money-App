// сортировка счетов одним из способов:
// 1. номер
// 2. баланс
// 3. дата открытия
// 4. последний перевод

const selectSort = (accounts, param) => {
  switch(param) {
    case 'account':
      return sortByNumber(accounts);
    case 'balance':
      return sortByBalance(accounts);
    case 'date':
      return sortByCreationDate(accounts);
    case 'last':
      return sortByLastTransaction(accounts);
    default:
      return accounts;
  }
};

const sortByNumber = accounts => [...accounts].sort((acc1, acc2) => +acc1.account - +acc2.account);

const sortByBalance = accounts => [...accounts].sort((acc1, acc2) => acc1.balance - acc2.balance);

const sortByCreationDate = accounts => [...accounts].sort((acc1, acc2) => {
  const time1 = new Date(acc1.date).getTime();
  const time2 = new Date(acc2.date).getTime();
  return time1 - time2;
});

const sortByLastTransaction = accounts => [...accounts].sort((acc1, acc2) => {
  const time1 = new Date(acc1.transactions[0].date).getTime();
  const time2 = new Date(acc2.transactions[0].date).getTime();
  return time1 - time2;
});

export default selectSort;

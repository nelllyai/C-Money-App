// форматирование даты

const formatDate = stringDate => {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  const date = new Date(stringDate);
  return date.toLocaleDateString('ru', options);
};

export default formatDate;

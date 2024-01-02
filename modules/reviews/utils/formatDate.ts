export const formatDate = (dateToFormat: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  const date = new Date(dateToFormat);

  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  return date.toLocaleString('en-GB', options).replace(/\//g, '-');
};

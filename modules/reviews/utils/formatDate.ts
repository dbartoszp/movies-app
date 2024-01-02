export const formatDate = (dateToFormat: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };
  return new Date(dateToFormat)
    .toLocaleString('en-GB', options)
    .replace(/\//g, '-');
};

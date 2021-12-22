const daysIntoYear = (date) => {
  return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
        - Date.UTC(date.getFullYear(), 0, 1)) / 24 / 60 / 60 / 1000;
};

export default daysIntoYear;

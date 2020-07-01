const generateUniqueId = (arrayToCheck) => {
  const newId = Math.floor(Math.random() * Math.floor(1000));

  if (arrayToCheck.find(({ id }) => newId === id)) {
    return generateUniqueId(arrayToCheck);
  }

  return newId;
};

export default generateUniqueId();

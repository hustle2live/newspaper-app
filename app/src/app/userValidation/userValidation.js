export const validateUser = (database, object) =>
  database.find(
    ({ username, password }) =>
      username === object.name && password === object.password
  );

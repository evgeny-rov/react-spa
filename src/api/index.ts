interface userCredentials {
  username: string;
  password: string;
}

const validMockedCredentials: userCredentials = {
  username: 'user',
  password: 'user',
};

export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

export const checkCredentials = ({ username, password }: userCredentials) => {
  const { username: validName, password: validPassword } = validMockedCredentials;
  return username === validName && password === validPassword;
};


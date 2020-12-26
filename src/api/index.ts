interface GithubUser {
  name: string;
  login: string;
  avatar_url: string;
}

export const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

export const fetchRepos = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await response.json();
  return data;
}

export const getUser = async (username: string) => {
  const getAsAdmin = username[0] === '*';
  const userByUsername = getAsAdmin ? username.slice(1) : username;
  try {
    const response = await fetch(
      `https://api.github.com/users/${userByUsername}`
    );
    if (response.ok) {
      const userData: GithubUser = await response.json();
      return {
        username: userData.login,
        avatar_url: userData.avatar_url,
        isAdmin: getAsAdmin,
      };
    }
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
};

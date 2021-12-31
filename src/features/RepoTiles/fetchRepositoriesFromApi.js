export const fetchRepositoriesFromApi = async () => {
  const response = await fetch(
    "https://api.github.com/users/Przemek-Przybylak/repos"
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

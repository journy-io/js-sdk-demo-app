import users from "../../../users.json";

export default function handler({ query: { id } }, response) {
  const user = users.find((user) => {
    return user.id === id;
  });

  if (!user) {
    return response.status(404).send();
  }

  return response.json(user);
}

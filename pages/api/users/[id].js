import users from "../../../users.json";
export default function handler({ query: { id } }, res) {
  const user = users.find((user) => {
    return user.id === id;
  });
  if (!user) {
    return res.status(404).send();
  }
  return res.json(user);
}

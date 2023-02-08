export const getter = async (url, session) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${session.user.access_token}`,
    },
  }).then((res) => res.json());

  return res;
};

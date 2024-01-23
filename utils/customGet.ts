import { MySession } from "../types/types";

export const customGet = async (url: string, session: MySession | null) => {
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${session?.user?.accessToken || 'missingToken'}`,
    },
  }).then((res) => res.json());

  return res;
};

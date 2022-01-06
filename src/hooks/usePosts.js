import useSWR, { useSWRConfig } from "swr";

export const usePosts = (key) => {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR(key);

  const requestPost = async (url) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 100,
      }),
    };
    const data = await fetch(url, requestOptions)
      .then((res) => res.json()).catch((e) => {
        return { status: "error", error: e.message };
      });
      
    console.log("DATA", data);
    return data;
  };

  return { data, error, mutate, requestPost };
};

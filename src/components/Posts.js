import { usePosts } from "../hooks/usePosts";

function Posts() {
  const { data, error, mutate, requestPost } = usePosts(
    "https://jsonplaceholder.typicode.com/posts/5"
  );

  return (
    <div>
      {!data ? (
        <span>Loading...</span>
      ) : error ? (
        <span>failed to load</span>
      ) : (
        <ul>
          <li> {data.title}</li>
        </ul>
      )}
      <button
        type="button"
        onClick={async (e) => {
          e.preventDefault();
          mutate(
            "https://jsonplaceholder.typicode.com/posts/5",
            { ...data, title: "foo", body: "bar", userId: 100 },
            false
          );

          const response = await requestPost(
            "https://jsonplaceholder.typicode.com/posts"
          );

          if (response.error)
            return mutate("https://jsonplaceholder.typicode.com/posts/5");
        }}
      >
        Refresh
      </button>
    </div>
  );
}

export default Posts;

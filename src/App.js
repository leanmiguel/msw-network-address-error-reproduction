import { useQuery } from "react-query";

function App() {
  const { data } = useQuery("user", async () => {
    const users = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}users/random_user`
    );

    return await users.json();
  });

  console.log("the data returned from react-query is", data);

  return <div>{data && <p>Text</p>}</div>;
}

export default App;

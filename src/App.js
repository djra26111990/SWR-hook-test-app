import Posts from "./components/Posts";
import { SWRConfig } from "swr";
import { localStorageProvider } from './helpers/localStorageProvider'

const fetcher = (...args) => fetch(...args).then(res => res.json())

function App() {
  return (
    <>
      <SWRConfig value={{ provider: localStorageProvider, fetcher }}>
        <Posts />
      </SWRConfig>
    </>
  );
}

export default App;

import Auth from "./Context Component/Auth";
import Header from "./Context Component/Header";
import {UserContextProvider} from "../src/usecontext/Context";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Header />
        <Auth />
      </UserContextProvider>
    </div>
  );
}

export default App;

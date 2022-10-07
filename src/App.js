import Auth from "./Context Component/Auth";
import Header from "./Context Component/Header";
import {UserContextProvider} from "../src/usecontext/Context";
import InputFocus from "./useRef/InputFocus";

function App() {
  return (
    <div>
      <UserContextProvider>
      <InputFocus />
      </UserContextProvider>
    </div>
  );
}

export default App;

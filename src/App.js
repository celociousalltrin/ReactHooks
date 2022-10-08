import Auth from "./Context Component/Auth";
import Header from "./Context Component/Header";
import {UserContextProvider} from "../src/usecontext/Context";
import InputFocus from "./useRef/InputFocus";
import EffectIndex from "./UseEffect/EffectIndex";

function App() {
  return (
    <div>
      <UserContextProvider>
        <EffectIndex />
      </UserContextProvider>
    </div>
  );
}

export default App;

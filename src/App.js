import { Provider } from "react-redux";
import { store } from "./redux/store";
import AppRoutes from "./routes/AppRoutes";
import "./css/index.css";

function App() {
  return (
    <Provider store={store}>
      <div className="body">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;

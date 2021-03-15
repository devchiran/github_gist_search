import { StoreProvider } from "./store/storeContext";
import HeaderNav from "./components/HeaderNav";
import ListSection from "./components/ListSection";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <HeaderNav />
        <ListSection />
      </div>
    </StoreProvider>
  );
}

export default App;

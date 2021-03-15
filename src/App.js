import HeaderNav from "./components/HeaderNav";
import ListSection from "./components/ListSection";
// import { useStore } from "./store/storeContext";
// import { useObserver } from "mobx-react";
import { StoreProvider } from "./store/storeContext";

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

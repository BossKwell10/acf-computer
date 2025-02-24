import { Footer, Header } from "./components";
import { AllRoutes } from "./Routes/AllRoutes";
function App() {
  return (
    <div className="App dark:bg-dark">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

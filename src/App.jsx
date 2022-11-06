import { useState } from "react";
import { Header, Footer, Features, Gallery, Testimonials } from "./layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Features />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;

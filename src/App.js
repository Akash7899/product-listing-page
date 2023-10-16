import React, { Suspense } from "react";
import Header from "./layouts/header";
import Loader from "./components/loader";
import Footer from "./layouts/footer";
const Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(import("./components/Home")), 1000);
  });
});

function App() {
  return (
    <>
      <Suspense fallback={<Loader></Loader>}>
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </Suspense>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Items from "./pages/Items";

function Layout() {
  return (
    <div className="h-dvh w-dvw">
      <header>
        <Navbar />
      </header>
      <main className="h-full w-full">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="items" element={<Items />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

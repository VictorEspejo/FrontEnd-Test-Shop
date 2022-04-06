import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<ProductListPage />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;

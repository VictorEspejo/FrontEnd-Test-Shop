import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar position="sticky" color="primary">
          <Toolbar>
            <Typography variant="h6">Navigation</Typography>
          </Toolbar>
        </AppBar>
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

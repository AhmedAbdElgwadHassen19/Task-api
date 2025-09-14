import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import UserPage from "./Pages/UserPage";
import Layout from "./Layout/Layout";
import CardPage from "./Pages/CardPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={< Login />} />
      
      <Route
        path="/users"
        element={
          <Layout>
            <UserPage />
          </Layout>
        }
      />
      <Route
        path="/cardPage"
        element={
          <Layout>
            <CardPage />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;

import "./App.css";
//Cấu hình route cho các component
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register/Register";
import HomeTemplate from "./templates/HomeTemplate";
import UserPage from "./user-management-redux";
import FormValidation from "./pages/FormValidation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>

          <Route index element={<UserPage />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="form-validation" element={<FormValidation />}></Route>
          <Route path="*" element={<Navigate to="" />}></Route>

        </Route>        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

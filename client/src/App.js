import { BrowserRouter, Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import NavBar from "./components/NavBar";
import { Container } from "@mui/material";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/tasks/new" element={<TaskForm />} />
          {/* Edit route */}
        </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;

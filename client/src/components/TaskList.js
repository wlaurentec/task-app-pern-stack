import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const loadTasks = async () => {
    const res = await fetch("http://localhost:4000/tasks");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>Task List</h1>
      {tasks.map((task) => (
        <Card
          key={task.id}
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e2727",
          }}
        >
          <CardContent
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div style={{ color: "#eee" }}> 
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => console.log("Edit")}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => console.log("Delete")}
                style={{ marginLeft: ".5rem" }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default TaskList;

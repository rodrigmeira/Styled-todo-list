import { useState } from "react";
import logoDnc from "./assets/dnc-logo.jpg";
import "./app.scss";
import Column from "./components/Column";

function App() {
  const [columns, setColumns] = useState([
    { id: 1, title: "Planning" },
    { id: 2, title: "To Do" },
    { id: 3, title: "Doing" },
    { id: 4, title: "Completed" },
  ]);

  return (
    <section>
      <header>
        <img src={logoDnc} alt="dnc-logo" />
        <h1>Task List</h1>
      </header>
      <main>
        {columns.map((column) => (
          <Column title={column.title} key={column.id} />
        ))}
      </main>
    </section>
  );
}

export default App;

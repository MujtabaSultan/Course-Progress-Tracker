// src/App.jsx
import './App.css';

const App = () => {
  const courses = [
    { name: 'itcs222', completed: true },
    { name: 'itcs214', completed: false },
    { name: 'maths102', completed: true },
  ];

  return (
    <>
      <h1>courses List</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index} className={course.completed ? 'completed' : 'not-completed'}>
            {`${course.name} : ${course.completed?"completed":"uncompleted"}`}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
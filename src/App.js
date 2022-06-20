import { Component, useState } from "react";
import "./App.css";
import AddCourse from "./components/AddCourse";
import CourseList from "./components/CourseList";

function App() {
  // states
  const [inputCourse, setInputCourse] = useState([]);
  const [courses, setCourses] = useState(["HTML", "CSS", "JS"]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="header-title">Add Courses</h1>
        <AddCourse
          inputCourse={inputCourse}
          courses={courses}
          setCourses={setCourses}
          setInputCourse={setInputCourse}
        />
        <CourseList courses={courses} setCourses={setCourses} />
      </div>
    </div>
  );
}

export default App;

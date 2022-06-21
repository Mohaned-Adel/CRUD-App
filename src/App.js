import { Component } from "react";
import "./index";
import AddCourse from "./components/AddCourse";
import CourseList from "./components/CourseList";

class App extends Component {
  // states
  state = {
    courses: [{ name: "HTML" }, { name: "CSS" }, { name: "Js" }],
    current: "",
  };

  //Update Course
  updateCourse = (e) => {
    this.setState({
      current: e.target.value,
    });
  };

  // addCourse
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({
      courses,
      current: "",
    });
  };

  //delete Course
  deleteCourse = (courseIndex) => {
    let courses = this.state.courses;
    courses.splice(courseIndex, 1);
    this.setState({
      courses,
    });
  };

  //edit Course
  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses,
    });
  };
  render() {
    const { courses } = this.state;
    const courseList = courses.map((course, index) => {
      return (
        <CourseList
          courseName={course.name}
          courseIndex={index}
          key={index}
          deleteCourse={this.deleteCourse}
          editCourse={this.editCourse}
        />
      );
    });
    return (
      <div className="App">
          <h1 className="header-title">Add Courses</h1>
          <AddCourse
            updateCourse={this.updateCourse}
            addCourse={this.addCourse}
            current={this.state.current}
          />
          <ul>{courseList}</ul>
      </div>
    );
  }
}

export default App;

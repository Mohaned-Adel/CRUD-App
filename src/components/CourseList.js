import { Component, Fragment } from "react";

class CourseList extends Component {
  state = {
    isEdit: false,
  };
  renderCourse = () => {
    return (
      <li>
        <span>{this.props.courseName}</span>
        <button onClick={() => this.toggleState()}>Edit Course</button>
        <button
          onClick={() => {
            this.props.deleteCourse(
              this.props.courseName,
              this.props.courseIndex
            );
          }}
        >
          Delete Course
        </button>
      </li>
    );
  };

  //toggleState
  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  updateCourseItem = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.courseIndex, this.input.value);
    this.toggleState();
  };

  //render Update Form
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourseItem}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.courseName}
        />
        <button onClick={this.updateCourseItem}>Update Course</button>
      </form>
    );
  };
  render() {
    //render function
    return (
      <Fragment>
        {this.state.isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </Fragment>
    );
  }
}

export default CourseList;

const AddCourse = ({ setInputCourse, setCourses, courses, inputCourse }) => {
  const changeCourseHandler = (e) => {
    setInputCourse(e.target.value);
  };

  const submitCourseHandler = (e) => {
    e.preventDefault();
    setCourses([...courses, inputCourse]);
    setInputCourse("")
  };

  return (
    <div>
      <form onSubmit={submitCourseHandler}>
        <input
          onChange={changeCourseHandler}
          type="text"
          placeholder="Enter your Course"
          value={inputCourse}
        />
        <input onClick={submitCourseHandler} type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddCourse;

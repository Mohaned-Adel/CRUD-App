const Form = ({ courses, setCourses }) => {
  const deleteItem = (index) => {
    setCourses(courses.filter((course) => courses.indexOf(course) !== index));
  };
  return (
    <div>
      {!courses.length ? (
        <h2>No courses found</h2>
      ) : (
        courses.map((course, index) => {
          return (
            <div className="course-container" key={index}>
              <span className="course-title">{course}</span>
              <button className="edit-btn">Edit</button>
              <button onClick={() => deleteItem(index)} className="delete-btn">
                Delete
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Form;

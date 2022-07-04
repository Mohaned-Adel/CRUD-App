const AddCourse = ({ updateCourse,addCourse,current }) => {
  
  return (
    <div>
      <form onSubmit={addCourse}>
        <input
          onChange={updateCourse}
          type="text"
          placeholder="Enter your Course"
          value={current}
        />
        <button onClick={addCourse} > Add</button>
      </form>
    </div>
  );
};

export default AddCourse;

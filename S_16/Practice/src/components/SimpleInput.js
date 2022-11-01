const SimpleInput = props => {
  return (
    <form>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input id="name" type="text" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

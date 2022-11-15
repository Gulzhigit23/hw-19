import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();

  const [nameIsValid, setNameIsValid] = useState(true);

  const [name, setName] = useState("");

  const [isTouched, setIsTouched] = useState(true);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // const enteredName = nameInputRef.current.value;

    // setNameIsValid(true);

    // if (enteredName.trim().length < 5) {
    //   setNameIsValid(false);
    //   console.log("DELAI");
    //   return;
    // }

    // console.log(enteredName);

    // nameInputRef.current.value = "  ";
  };

  const onBlurHandler = () => {
    const enteredName = nameInputRef.current.value;
    console.log("Losing focus");
    setNameIsValid(true);
    setIsTouched(true);

    if (enteredName.trim().length < 5) {
      setNameIsValid(false);
      setIsTouched(false);
      return;
    }
  };

  const onChangeHandler = (e) => {
    setName(e.target.value);
    setNameIsValid(true);
    setIsTouched(true);
    const enteredName = nameInputRef.current.value;
    if (enteredName.trim().length < 5) {
      setNameIsValid(false);
      setIsTouched(false);
      return;
    }
  };

  const nameInputClasses = nameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />
        {!nameIsValid && (
          <p className="error-text">Name should be more 5 character</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
      
    </form>
  );
};

export default SimpleInput;

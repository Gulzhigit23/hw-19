import { useRef, useState } from "react";

const BasicForm = (props) => {
  const inputRef = useRef();
  const emailRef = useRef();
  const surnameRef = useRef();
  const [isValid, setIsValid] = useState(true);
  const [isTouched, setIsTouched] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSurnameValid, setIsSurnameValid] = useState(true);
  const [isFill, setIsFill] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };
  const onBlurHandler = () => {
    setIsTouched(true);
    setIsValid(true);
    setIsFill(true);
    setIsEmailValid(true);
    setIsSurnameValid(true);
    const iValue = inputRef.current.value;
    if (iValue.trim().length < 5) {
      setIsTouched(false);
      setIsValid(false);
      setIsFill(false);
      setIsSurnameValid(false);
return;
} 
const eSurname = surnameRef.current.value;
if (eSurname.trim().length < 3) {
  setIsSurnameValid(false);
  setIsTouched(false);
  setIsFill(false);
  return;
}
const eValue = emailRef.current.value;
    if (eValue.trim().length < 3) {
      setIsEmailValid(false);
      setIsTouched(false);
      setIsFill(false);
      setIsEmailValid(false);
      return;
    }
  };


  const nameInputClasses = isValid ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        {isFill && <p className="correct">Correct!</p>}
        <label htmlFor="name">Your name</label>
        <input onBlur={onBlurHandler} ref={inputRef} id="name" type="text" />
        {!isValid && (
          <p className="error-text">Name have to more then 5 character</p>
        )}
        <label htmlFor="surname">Your surname</label>
        <input
          onBlur={onBlurHandler}
          ref={surnameRef}
          id="surname"
          type="text"
        />
        {!isSurnameValid && (
          <p className="error-text">Surname have to more then 5 character</p>
        )}
        <label htmlFor="email">Your email</label>
        <input
          onBlur={onBlurHandler}
          ref={emailRef}
          id="email"
          type="email"
        />
        {!isEmailValid && (
          <p className="error-text">email have to more then 5 character</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isTouched}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

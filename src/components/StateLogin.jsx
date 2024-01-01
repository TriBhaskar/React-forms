import { useState } from "react";
import Input from "./Input";

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });
  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInValid = didEdit.email && !enteredValues.email.includes("@");
  const passwordIsInValid =
    didEdit.password && enteredValues.password.trim().length < 6;

  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prev) => {
      return {
        ...prev,
        [identifier]: value,
      };
    });
    setDidEdit((prev) => {
      return {
        ...prev,
        [identifier]: false,
      };
    });
  }

  function handleInputBlur(identifier) {
    setDidEdit((prev) => {
      return {
        ...prev,
        [identifier]: true,
      };
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur("email")}
          onChange={(event) => handleInputChange("email", event.target.value)}
          value={enteredValues.email}
          error={emailIsInValid && "Please enter a valid email."}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          onBlur={() => handleInputBlur("password")}
          value={enteredValues.password}
          error={passwordIsInValid && "Please enter a valid password."}
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    term: false,
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    term: false,
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "email") {
      setErrors({ ...errors, email: !validateEmail(value) });
    }

    if (name === "password") {
      setErrors({ ...errors, password: !validatePassword(value) });
    }

    if (name === "term") {
      setErrors({ ...errors, term: !checked });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/success");
  };

  useEffect(() => {
    setIsValid(
      validateEmail(formData.email) &&
        validatePassword(formData.password) &&
        formData.term === true
    );
  }, [formData]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="term"
            onChange={handleChange}
          />
          Şartları kabul ediniz
        </label>
      </div>

      <button disabled={!isValid} type="submit">
        Gönder
      </button>
    </form>
  );
}
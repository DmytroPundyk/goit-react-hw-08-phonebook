import { useState } from 'react';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import {
  useValidateName,
  useValidateEmail,
  useValidatePassword,
} from '../utils/validateHooks/ValidateHooks';

const initState = { name: '', email: '', password: '' };

const SignupForm = () => {
  const [formValues, setFormValues] = useState(() => initState);
  const [isNameError, nameErrorText] = useValidateName(formValues);
  const [isEmailError, emailErrorText] = useValidateEmail(formValues);
  const [isPassError, passErrorText] = useValidatePassword(formValues);
  const [isFormError, setIsFormError] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleNameChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value.trim(),
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    let { name, email, password } = formValues;

    if (isNameError || isEmailError || isPassError) {
      setIsFormError(true);
      return;
    }
    setIsFormError(false);
    dispatch(authOperations.signUpOperation({ name, email, password }));
    setFormValues(initState);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        Registration
        <TextField
          id="standard-basic"
          label="User name"
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleNameChange}
          variant="standard"
          error={isFormError && isNameError}
          helperText={isFormError && nameErrorText}
          sx={{ mb: 2 }}
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          variant="standard"
          error={isFormError && isEmailError}
          helperText={isFormError && emailErrorText}
          sx={{ mb: 2 }}
          fullWidth
          required
        />
        <TextField
          id="standard-password-input"
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          autoComplete="current-password"
          variant="standard"
          error={isFormError && isPassError}
          helperText={isFormError && passErrorText}
          sx={{ mb: 2 }}
          fullWidth
          required
        />
        <LoadingButton
          type="submit"
          loadingIndicator="Adding..."
          variant="outlined"
        >
          Register
        </LoadingButton>
      </form>
      <p>
        Already have an account?
        <Link to="/login" state={{ from: location }}>
          Login
        </Link>
      </p>
    </>
  );
};

export default SignupForm;

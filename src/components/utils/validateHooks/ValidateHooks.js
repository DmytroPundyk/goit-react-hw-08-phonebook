export const useValidateName = ({ name }) => {
  const isNameEmpty = name !== '';
  const regName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

  if (isNameEmpty && !regName.test(name)) {
    return [true, 'Name may contain only letters, apostrophe, dash and spaces'];
  } else {
    return [false, ''];
  }
};

export const useValidateEmail = ({ email }) => {
  const isEmailEmpty = email !== '';
  const regEmail = /^([^ ]+@[^ ]+\.[a-z]{2,6}|)$/;

  if (isEmailEmpty && !regEmail.test(email)) {
    return [true, 'Invalid email'];
  } else {
    return [false, ''];
  }
};

export const useValidatePassword = ({ password }) => {
  const isPasswordEmpty = password !== '';
  const isPasswordLength = password.length < 7;

  if (isPasswordEmpty && isPasswordLength) {
    return [true, 'Password must contain at least 7 characters'];
  } else {
    return [false, ''];
  }
};

export const useValidatePhone = ({ number }) => {
  const isNumberLength = number.length < 18;

  if (isNumberLength) {
    return [true, 'Invalid phone number'];
  } else {
    return [false, ''];
  }
};

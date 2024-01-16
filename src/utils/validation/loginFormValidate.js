// С использованием indicative
const loginFormValidate = {
  rules: {
    email: 'required|email',
    password: 'required|min:6|max:12',
  },
  messages: {
    required: field => `${field} обязателеное поле`,
    'email.email': 'Пожалуйста введите корректный емейл',
    'password.min': 'Пароль должен быть минимум 6 символов',
  },
  validate: {
    email: email => {
      const regex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
      );
      return regex.test(email);
    },
    password: password => {
      const regex = new RegExp(/^[a-zA-Z0-9]{6,12}$/);

      return regex.test(password);
    },
  },
};

export const { rules, messages, validate } = loginFormValidate;

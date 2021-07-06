// С использованием indicative
const rules = {
  email: 'required|email',
  password: 'required|min:6|max:12',
}

const messages = {
  required: (field) => `${field} is required`,
  'email.email': 'Please enter a valid email address',
  'password.min': 'Password is too short',
}

export default {rules, messages}
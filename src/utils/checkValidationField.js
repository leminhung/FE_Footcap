exports.checkEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

exports.checkPhoneValid = (email) => {
  const phoneRegex = /^\+?\d{1,3}[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/;
  return phoneRegex.test(email);
};

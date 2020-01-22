const isOperator = item => {
  return /\+|-|\*|\//.test(item);
};

export default isOperator;

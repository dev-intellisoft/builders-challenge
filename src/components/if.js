const If = ({children, exp}) => {
  if (Array.isArray(children)) {
    return children[exp ? 0 : 1];
  }
  return exp ? children : null;
};

export default If;

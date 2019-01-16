const Home = 'Home';
const Form = 'Form';
const Async = 'Async';
const Redux = 'Redux';
const Context = 'Context';

export const objKeys = {
  [Home]: 'Home',
  [Form]: 'Form',
  [Async]: 'Async',
  [Redux]: 'Redux',
  [Context]: 'Context',
};

export const getLink = ({ objKey }) => {
  const obj = {
    [Home]: '/',
    [Form]: '/form',
    [Async]: '/async',
    [Redux]: '/redux',
    [Context]: '/context',
  };

  return obj[objKey];
};

export const getText = ({ objKey }) => {
  const obj = {
    [Home]: Home,
    [Form]: Form,
    [Async]: Async,
    [Redux]: Redux,
    [Context]: Context,
  };

  return obj[objKey];
};

import PropTypes from 'prop-types';

export default function Button({ variant, children, ...rest }) {

  return <button>{children}</button>;
}

Button.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
};

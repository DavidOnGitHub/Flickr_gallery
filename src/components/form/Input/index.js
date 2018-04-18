import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Input.css';

const cx = classnames.bind(styles);

const Input = (props) => {
  const { input, placeholder, className } = props;

  return (
    <div className={cx('container', className)}>
      <input
        placeholder={placeholder}
        {...input}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  input: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string
};
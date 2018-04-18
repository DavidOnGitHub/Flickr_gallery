import React from 'react';
import classnames from 'classnames/bind';
import styles from './Loader.css';
import Spinner from 'react-icons/lib/fa/refresh';

const cx = classnames.bind(styles);

const Loader = () => (
  <div className={cx('container')}>
    <Spinner className={cx('spinner')}/>
  </div>
);

export default Loader;

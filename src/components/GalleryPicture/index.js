import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './GalleryPicture.css';
import moment from 'moment';

const cx = classnames.bind(styles);

const GalleryPicture = (props) => {
  const { picture } = props;
  const publishedTime = moment(picture.moment);
  const authorName = picture.author.match(/\("([^"]*)"\)/)[1];

  return (
    <div className={cx('container')}>
      <div className={cx('image')}>
        <img src={picture.media.m} alt={picture.title} title={picture.title}/>
        <div className={cx('description')}>
          <p className={cx('title')}>{picture.title}</p>
          <p>published by <strong>{authorName}</strong> at <strong>{publishedTime.format('HH:mm on DD/MM/YYYY')}</strong></p>
        </div>
      </div>
    </div>
  );
};

export default GalleryPicture;

GalleryPicture.propTypes = {
  picture: PropTypes.object.isRequired
};
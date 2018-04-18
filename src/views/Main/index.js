import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './Main.css';
import SearchBar from '../../components/SearchBar';
import GalleryPicture from '../../components/GalleryPicture';
import Loader from '../../components/Loader';

const cx = classnames.bind(styles);

const Main = (props) => {
  const { pictureData, isLoadingPictures } = props;
  const pictures = pictureData.items || [];
  
  return (
    <div className={cx('container')}>
      <header>Flickr Gallery</header>
      <div className={cx('content')}>
        <div className={cx('search-bar')}>
          <SearchBar />
        </div>
        <div className={cx('picture-section')}>
          {isLoadingPictures && <Loader />}
          {!!pictureData && <h3 className={cx('title')}>{pictureData.title}</h3>}
          <div className={cx('gallery')}>
            {pictures.map(picture => (
              <div className={cx('picture')} key={picture.link}>
                <GalleryPicture picture={picture} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isLoadingPictures: state.picture.isLoading,
  pictureData: state.picture.pictureData
});

export default connect(mapStateToProps)(Main);

Main.propTypes = {
  pictureData: PropTypes.object,
  isLoadingPictures: PropTypes.bool
};

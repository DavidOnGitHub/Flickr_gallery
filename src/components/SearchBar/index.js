import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './SearchBar.css';

import { Field, reduxForm } from 'redux-form';
import Input from '../form/Input';
import SearchIcon from 'react-icons/lib/fa/search';
import { searchTags } from '../../utils/http';
import { setPictureData, setLoadingPictures } from '../../actions/search';

const cx = classnames.bind(styles);

class SearchBar extends React.Component {
  doSearch = async (form) => {
    try {
      this.props.dispatch(setLoadingPictures(true));
      const pictureData = await searchTags(form.tags);
      this.props.dispatch(setPictureData(pictureData));
      this.props.dispatch(setLoadingPictures(false));
    } catch(error) {
      this.props.dispatch(setLoadingPictures(false));
      console.log('error', error);
    }
  }

  componentDidMount() {
    this.doSearch({});
  }
  
  render() {
    return (
      <div className={cx('container')}>
        <form onSubmit={this.props.handleSubmit(this.doSearch)}>
          <Field
            name="tags"
            component={Input}
            placeholder="comma separated tags, e.g. tree, flower"
            className={cx('tags-input')}
          />
          <button className={cx('search-button')}>
            <SearchIcon /><span className={cx('search-text')}>Search</span>
          </button>
        </form>
      </div>
    );
  }
}

const SearchBarForm = reduxForm({
  form: 'SearchForm'
})(SearchBar);

export default connect()(SearchBarForm);

SearchBar.propTypes = {
  handleSubmit: PropTypes.func,
  dispatch: PropTypes.func
};
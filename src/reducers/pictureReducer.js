import * as Type from '../actions/Type';
import initialState from '../initialState';

export default (state = initialState.picture, action) => {
  switch (action.type) {
    case Type.SET_PICTUREDATA:
      return Object.assign({}, state, { pictureData: action.pictureData });
    case Type.SET_LOADING_PICTURES:
      return Object.assign({}, state, { isLoading: action.isLoading });
    default:
      return state;
  }
};

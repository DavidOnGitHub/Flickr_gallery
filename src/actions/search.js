import * as Type from './Type';

export const setPictureData = (pictureData) => ({
	type: Type.SET_PICTUREDATA,
	pictureData
});

export const setLoadingPictures = (isLoading) => ({
	type: Type.SET_LOADING_PICTURES,
	isLoading
});

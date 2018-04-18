import jsonp from 'jsonp';

const endpoint = 'https://api.flickr.com/services/feeds/photos_public.gne';

export const searchTags = (tags) => {
  const tagsQuery = tags ? `&tags=${tags}` : '';

  // The following technique is used to get around the cors issue of Flickr API.
  return new Promise((resolve, reject) => {
    window.jsonFlickrFeed = resolve;
    jsonp(`${endpoint}?format=json${tagsQuery}`, null, reject);
  });
};
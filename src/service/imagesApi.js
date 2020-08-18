import axios from 'axios';

const fetchImagesWithQuery = searchQuery => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=1&key=17611748-6d67051009b1653d75232e8c8&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchImagesWithQuery,
};

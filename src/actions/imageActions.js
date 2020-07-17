import { FETCH_PHOTOS, PAGINATE_PHOTOS, GET_PAGE_PHOTOS } from "./types";

export const fetchPhotos = () => (dispatch) => {
  const key = "DEMO_KEY";

  fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=${key}`
  )
    .then((res) => res.json())
    .then((photos) =>
      dispatch({
        type: FETCH_PHOTOS,
        payload: photos,
      })
    );
};

export const paginatePhotos = (data, offset, perPage) => (dispatch) => {
  let slice = data.slice(offset, offset + perPage);
  let pageCount =
    Math.ceil(data.length / perPage) < 1 ? 1 : Math.ceil(data.length / perPage);
  dispatch({
    type: PAGINATE_PHOTOS,
    payload: { slice, pageCount },
  });
};

export const getPaginatedPhotos = (selectedPage, perPage) => (dispatch) => {
  let currentPage = selectedPage;
  let offset = selectedPage * perPage;
  dispatch({
    type: GET_PAGE_PHOTOS,
    payload: {
      offset,
      currentPage,
    },
  });
};

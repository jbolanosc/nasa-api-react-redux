import {
  FETCH_PHOTOS,
  GET_PAGE_PHOTOS,
  PAGINATE_PHOTOS,
} from "../actions/types";

const initialState = {
  items: [],
  offset: 0,
  perPage: 4,
  currentPage: 0,
  pageCount: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS:
      return {
        ...state,
        items: action.payload.photos,
      };
    case PAGINATE_PHOTOS:
      return {
        ...state,
        pageCount: action.payload.pageCount,
        items: action.payload.slice,
      };
    case GET_PAGE_PHOTOS:
      return {
        ...state,
        currentPage: action.payload.currentPage,
        offset: action.payload.offset,
      };
    default:
      return state;
  }
}

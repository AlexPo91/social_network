import { usersApi } from "./../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOW = "TOGGLE_IS_FOLLOW";

const initialState = {
  users: [],
  totalCount: 0,
  currentPage: 1,
  pageSize: 100,
  isFetching: false,
  followInPropgress: [],
};

const usersPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.totalCount,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOW:
      return {
        ...state,
        followInPropgress: action.followInPropgress
          ? [...state.followInPropgress, action.userId]
          : state.followInPropgress.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export const followSucces = (userId) => {
  return {
    type: FOLLOW,
    id: userId,
  };
};
export const unFollowSucces = (userId) => {
  return {
    type: UNFOLLOW,
    id: userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};
export const setTotalCount = (count) => {
  return {
    type: SET_TOTAL_COUNT,
    totalCount: count,
  };
};
export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: page,
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};
export const toggleIsFollow = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOW,
    followInPropgress: isFetching,
    userId,
  };
};

export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage))
    usersApi.getUsers(currentPage, pageSize).then((parseData) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(parseData.items));
      dispatch(setTotalCount(parseData.totalCount));
    });
  };
};

export const follow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollow(true, id));
    usersApi.followUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSucces(id));
      }
      dispatch(toggleIsFollow(false, id));
    });
  };
};

export const unFollow = (id) => {
  return (dispatch) => {
    dispatch(toggleIsFollow(true, id));
    usersApi.unFollowUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unFollowSucces(id));
      }
      dispatch(toggleIsFollow(false, id));
    });
  };
};

export default usersPageReducer;

import { updateObjectinArray } from "../utils/object-helpers";
import { usersApi } from "./../api/api";

const FOLLOW = "social-network/usersPageReducer/FOLLOW";
const UNFOLLOW = "social-network/usersPageReducer/UNFOLLOW";
const SET_USERS = "social-network/usersPageReducer/SET_USERS";
const SET_TOTAL_COUNT = "social-network/usersPageReducer/SET_TOTAL_COUNT";
const SET_CURRENT_PAGE = "social-network/usersPageReducer/SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "social-network/usersPageReducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOW = "social-network/usersPageReducer/TOGGLE_IS_FOLLOW";

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
        users: updateObjectinArray(state.users, action.id, 'id', {followed: true})
        // users: state.users.map((user) => {
        //   if (user.id === action.id) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectinArray(state.users, action.id, 'id', {followed: false})
        // users: state.users.map((user) => {
        //   if (user.id === action.id) {
        //     return { ...user, followed: false };
        //   }
        //   return user;
        // }),
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

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(currentPage));
  const response = await usersApi.getUsers(currentPage, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setTotalCount(response.totalCount));
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
  dispatch(toggleIsFollow(true, id));
  let response = await apiMethod(id);
  if (response.resultCode === 0) {
    dispatch(actionCreator(id));
  }
  dispatch(toggleIsFollow(false, id));
};

export const follow = (id) => async (dispatch) => {
  // dispatch(toggleIsFollow(true, id));
  // const response = await usersApi.followUser(id)
  //   if (response.resultCode === 0) {
  //     dispatch(followSucces(id));
  //   }
  //   dispatch(toggleIsFollow(false, id));
  let apiMethod = usersApi.followUser.bind(id);
  let actionCreator = followSucces;
  followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
};

export const unFollow = (id) => async (dispatch) => {
  // dispatch(toggleIsFollow(true, id));
  // const response = await usersApi.unFollowUser(id)
  //   if (response.resultCode === 0) {
  //     dispatch(unFollowSucces(id));
  //   }
  //   dispatch(toggleIsFollow(false, id));
  let apiMethod = usersApi.unFollowUser.bind(id);
  let actionCreator = unFollowSucces;
  followUnfollowFlow(dispatch, id, apiMethod, actionCreator);
};

export default usersPageReducer;

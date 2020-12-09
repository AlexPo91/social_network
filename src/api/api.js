const url = "https://social-network.samuraijs.com/api/1.0/";
const params = {
  credentials: "include",
  headers: {
    "API-Key": "3ca3c32f-3cf4-4af0-8468-8675dc4867d3",
  },
};

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return fetch(
      `${url}users?page=${currentPage}&count=${pageSize}`,
      params
    ).then((data) => {
      return data.json();
    });
  },
  getProfile(userId) {
    console.warn("Use new Method");
    return profileApi.getProfile(userId);
  },
  unFollowUser(id) {
    return fetch(`${url}follow/${id}`, {
      ...params,
      method: "DELETE",
    }).then((response) => {
      return response.json();
    });
  },
  followUser(id) {
    return fetch(`${url}follow/${id}`, {
      ...params,
      method: "POST",
    }).then((response) => {
      return response.json();
    });
  },
};
export const profileApi = {
  getProfile(userId) {
    return fetch(`${url}profile/${userId}`).then((data) => {
      return data.json();
    });
  },
  getStatus(userId) {
    return fetch(`${url}profile/status/${userId}`).then((data) => {
      return data.json();
    });
  },
  updateStatus(status) {
    return fetch(`${url}/profile/status`, {
      credentials: "include",
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        "API-Key": "3ca3c32f-3cf4-4af0-8468-8675dc4867d3",
      },
      body: JSON.stringify({status: status})
    }).then((data) => {
      return data.json();
    });
  }
};

export const authApi = {
  me() {
    return fetch(`${url}auth/me`, params).then((data) => {
      return data.json();
    });
  },
};

const url = 'https://social-network.samuraijs.com/api/1.0/'
const params = {
    credentials: 'include',
    headers: {
        "API-Key": "3ca3c32f-3cf4-4af0-8468-8675dc4867d3",
      }
}


export const usersApi = {
    getUsers(currentPage=1, pageSize=10){
        return fetch(`${url}users?page=${currentPage}&count=${pageSize}`, params)
        .then((data) => {
            return data.json()
        })
    },
    getAuthMe(){
        return fetch(`${url}auth/me`, params)
    .then((data) => {
        return data.json()
    })
    },
    getProfile(userId){
       return fetch(`${url}profile/${userId}`)
        .then((data) => {
            return data.json()
        })
    },
    unFollowUser(user){
        return fetch(
                `${url}follow/${user.id}`,
                {
                 ...params, method: "DELETE"
                }
              )
                .then((response) => {
                    return response.json()
                })
    },
    followUser(user){
        return fetch(
            `${url}follow/${user.id}`,
            {
             ...params, method: "POST"
            }
          )
            .then((response) => {
                return response.json()
            })
    }
}


import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '8fce870e-62f9-4a69-b409-faa45fee6c14'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then( response => {
            return response.data
        } )
    },
    follow(userId) {
        return instance.post(`follow/${userId}`).then( response => response.data)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`).then( response => response.data)
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then( response => response.data )
    },
    getAuth() {
        return instance.get(`auth/me`).then( response => response.data )
    }
    
}

export const userStatusAPI = {
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`).then( response => response.data )
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, { status: status }).then( response => response.data )
    }
}
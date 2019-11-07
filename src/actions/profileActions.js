import Axios from "axios"

export function getProfile(){
    return dispatch => {
        Axios.get("https://api.github.com/users/kadenn2019").then(resp => {
            console.log(resp.data)
            dispatch({
                type: 'GET_PROFILE',
                payload: resp.data
            })
        })
    }
}

export function getRepos(){
    return dispatch => {
        Axios.get("https://api.github.com/users/kadenn2019/repos").then(resp => {
            console.log(resp.data)
            dispatch({
                type: 'GET_REPOS',
                payload: resp.data
            })
        })
    }
}
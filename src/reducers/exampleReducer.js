const initialState = {
  profile: {},
  repos:[]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'GET_PROFILE':
      return {...state, profile: action.payload}
    case 'GET_REPOS':
      return {...state, repos: action.payload}
    default:
      return state
  }
}

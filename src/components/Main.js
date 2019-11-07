import React, {useEffect} from "react"
import {  useSelector, useDispatch } from "react-redux"
import { getProfile } from "../actions/profileActions"


function Main(props) {
  const profile = useSelector(appState => appState.exampleReducer.profile)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProfile())
  },[])
  return (
    <div className="main">
        <div>
            <img src={profile.avatar_url}/>
        </div>
        <div>
            {profile.login}
        </div>
        <button>
            Edit profile
        </button>
     </div>

  )
}

export default Main

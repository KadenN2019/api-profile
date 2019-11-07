import React, {useEffect} from "react"
import {  useSelector, useDispatch } from "react-redux"
import { getProfile, getRepos } from "../actions/profileActions"
import Icon from "../lib/Icon"


function Repo(props) {
  const profile = useSelector(appState => appState.exampleReducer.profile)
  const repos = useSelector(appState => appState.exampleReducer.repos)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProfile())
    dispatch(getRepos())
  },[])

  return (
    <div className="repos">
        <div className="firstrow">
            <div className="firstrowobj">
                Overview
            </div>
            <div className="firstrowobj">
                Repositories 
            </div>
            <div className="firstrowobjnum">
                {profile.public_repos}
            </div>
            <div className="firstrowobj">
                Projects
            </div>
            <div className="firstrowobjnum">
                {profile.public_gists}
            </div>
            <div className="firstrowobj">
                Packages
            </div>
            <div className="firstrowobjnum">
                0
            </div>
            <div className="firstrowobj">
                Stars
            </div>
            <div className="firstrowobjnum">
                0
            </div>
            <div className="firstrowobj">
                Followers
            </div>
            <div className="firstrowobjnum">
                {profile.followers}
            </div>
            <div className="firstrowobj">
                Following
            </div>
            <div className="firstrowobjnum">
                {profile.following}
            </div>
        </div>
        <div className="secondrow">
            <div>
                <input className="text" type="text" placeholder="Find a repository..."></input>
            </div>
            <button className="dropbutton">
                <strong className="dropdown">
                    <div>Type: All</div> <div>&darr;</div>
                </strong>
            </button>
            <button className="dropbutton">
                <strong className="dropdown">
                    <div>Language: All</div> <div>&darr;</div>
                </strong>
            </button>
            <button className="dropbutton">
                <strong>
                    [] New
                </strong>
            </button>
        </div>
        <div className="thirdrow">
            {repos.map((repo, i) => (
                <div className="eachrow" key={'repo' + i}>
                    <div>
                        <a href={repo.html_url}><p>{repo.name}</p></a>
                        <h4>{repo.language}</h4>
                    </div>
                    <button className="star">
                        <Icon icon='star'/> Star
                    </button>
                </div>
            ))}
        </div>
     </div>

  )
}

export default Repo

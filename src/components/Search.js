import React , {useState} from 'react'
import "./Search.css";
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";


function Search({ hideButtons = false }) {

    const [{},dispatch] = useStateValue();
    const [ input , setInput] = useState("");
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();
        dispatch ({
            type : actionTypes.SET_SEARCH_TERM,
            term: input,
        })
        history.push("/search");
    }

    return (
        <form className="search">
            <div className="search__input">
                <input value={input} onChange = { e => setInput( e.target.value )} type="text" placeholder="Search for Schools, Colleges and More..." />
                <SearchIcon className="search__inputIcon" role="button"
          onClick={() => search({ preventDefault: () => {} })}
        ></SearchIcon>
            </div>
            {!hideButtons ? (
                    <div className="search__buttons">
                      <Button type="submit" onClick={search}  variant="outlined">Schools</Button>
                      <Button type="submit" onClick={search}  variant="outlined">Colleges</Button>
                      <Button type="submit" onClick={search}  variant="outlined">University</Button>
                      <Button type="submit" onClick={search}  variant="outlined">Courses</Button>
                  </div>
            ) : (
                <div className="search__buttons">
                <Button type="submit" onClick={search} className="btnTxt" variant="outlined">Search</Button>
            </div>
            )}
        </form>
    )
}

export default Search

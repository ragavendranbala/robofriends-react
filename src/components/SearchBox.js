import React from "react";


const SearchBox = ({OnValueChangedCallback}) => {
    return (
        <div className='pa2'>
            <input className='pa3 ba b--green bg-light-blue' type="search" placeholder="Search Robots here!" onChange={OnValueChangedCallback}></input>
        </div>
    );
}

export default SearchBox;
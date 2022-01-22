import React, { Component } from "react";

export class SearchBar extends Component {
    render() {
        return (
            <>
                <form className="d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </form>
            </>
        );
    }
}

export default SearchBar;

import React, { useState } from 'react'


const Search = ({ search, error, setError, clearError }) => {

    const [breed, setBreed] = useState("");
    function handleSearch(e) {
        e.preventDefault();
        if (breed.length === 0) {
            setError("Please type a breed");
        } else {

            search(breed);
            clearError();
        }
    }

    function handleChange(e) {
        setBreed(e.target.value)
    }

    return (
        <section className="search">
            <h1 className="search__header">Search dogs by breed</h1>
            <form className="search-form" onSubmit={handleSearch}>
                <input className="search-form__input" onChange={handleChange} type="text" name="breed" placeholder="breed" value={breed} />
                <button className="search-form__button" type="submit">
                    Search
                </button>
            </form>
            {error && <p className="search__error">{error}</p>}
        </section>
    )
}

export default Search

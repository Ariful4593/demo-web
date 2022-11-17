import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [searchValue, setSearchValue] = React.useState('');
    const navigate = useNavigate()
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/category/search-item/${searchValue}`)
    }
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#151414' }}>
            <div className="container-fluid">
                <Link className="navbar-brand text-white " to="/">Brand</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/todos">Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchValue} onChange={({target}) => setSearchValue(target.value)} />
                        <button className="btn btn-outline-success" onClick={(e) => handleSearch(e)} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

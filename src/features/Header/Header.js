import { Link, useNavigate, createSearchParams, } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTerm, clearTerm } from './searchSlice';
import Reddit_Lockup from '../../assets/Reddit_Lockup.svg';
import search from '../../assets/search.png';
import './Header.css'

export function Header() {
  let term = useSelector(state => state.search.term);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let handleTermChange = e => dispatch(setTerm(e.target.value));
  let goToResults = (e) => {
    e.preventDefault();
    navigate({
      pathname: 'search',
      search: `?${createSearchParams({
        q: term
      })}`
    });
  }
  // useEffect(() => {
  //     if (location.pathname !== '/search') {
  //         dispatch(clearTerm());
  //     }
  // }, [location, dispatch]);
  return (
    <header>
      <div className='header-bar'>
        <Link to='/'>
          <img className='logo' src={Reddit_Lockup} alt='reddit logo' />
        </Link>
        <form className='search-bar' onSubmit={goToResults}>
          <input id='search-input' value={term} type='search' placeholder='Search Reddit' onChange={handleTermChange} />
          <img src={search} alt='search icon' className='search-label'/>
        </form>
      </div>
    </header>
  );
}
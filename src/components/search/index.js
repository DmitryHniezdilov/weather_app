import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as weather from '../../redux/actions/weather';
import SearchList from '../searchList';
import SearchInput from '../searchInput';
import PropTypes from 'prop-types';
import './index.scss';

const Search = () => {
    const { searchList } = useSelector((state) => state.weather);
    const isSearchResult = searchList.length >= 1;
    const dispatch = useDispatch();

    const setSelectedWeather = (id) => {
        const getSelectedItem = searchList.find((item) => item.id === id);

        dispatch(weather.setItemToWeather(getSelectedItem));
    };

    setSelectedWeather.prototype = {
        id: PropTypes.number,
    };

    return (

        <>
            <SearchInput />
            {isSearchResult
                &&  (
                    <SearchList
                        data = { searchList }
                        setSelectedItem = { (id) => setSelectedWeather(id) }
                    />
                )
            }
        </>
    );
};

export default Search;

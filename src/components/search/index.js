import React, { useState, useEffect } from 'react';
// import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as weather from '../../redux/actions/weather';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import SearchList from '../searchList';
// import { Link } from 'react-router-dom';
import './index.scss';

// сделать выпадающий список городов searchResult
const Search = () => {
    const [ searchValue, setSearchValue ] = useState('');
    // const {weather, errFindCity, inputCity} = useSelector((state) => state.weather);
    const {errSearchList, searchList} = useSelector((state) => state.weather);
    let isSearchResult = searchList.length >= 1;
    const dispatch = useDispatch();

    const setSearchList = (v) => {
        const cityName = v.target.querySelector('input').value;
        const isSubmitable = cityName.length >= 3;
        isSubmitable && dispatch(weather.fetchCitiesListByName(cityName));
    };

    const setSelectedWeather = (id) => {
        function getCharacter(id) {
            return (character) => character.id === id;
        }
        const getSelectedItem = searchList.find(getCharacter(id));
        console.log(getSelectedItem);
        dispatch(weather.setItemToWeather(getSelectedItem));
    };

    useEffect(() => {
        errSearchList && searchValue.length === 1 && dispatch(weather.setErrSearchListToFalse()); //отмена стилей ошибки
    }, [ searchValue, errSearchList ]);

    return (

        <>
            <Paper
                className = 'search__paper'
                component = 'form'
                onSubmit = {
                    (v) => {
                        v.preventDefault();
                        setSearchList(v);
                        setSearchValue('');
                    }
                }>
                <Input
                    className = { `search__input ${errSearchList ? 'search__input--error' : ''}` }
                    error = { errSearchList }
                    inputProps = {{ 'aria-label': 'Enter City Name' }}
                    label = 'Enter City Name'
                    placeholder = { errSearchList ? 'No such city found' : 'Enter City Name' }
                    value = { searchValue }
                    onChange = { (inputData) => setSearchValue(inputData.target.value)
                    }
                />
                <IconButton
                    aria-label = 'search'
                    className = 'search__iconbtn'
                    type = 'submit'>
                    <SearchIcon />
                </IconButton>
            </Paper>
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

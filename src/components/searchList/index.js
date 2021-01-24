import React from 'react';
// import {useSelector} from 'react-redux';
import List from '@material-ui/core/List';
import SearchItem from '../searchItem';

import './index.css';

const SearchList = ({data, setSelectedItem}) => {
    return (
        <List
            aria-label = 'main mailbox folders'
            className = 'search__list'
            component = 'nav'>
            {data.map(({id, name, sys }) => (
                <SearchItem
                    country = { sys.country }
                    key = { id }
                    name = { name }
                    setSelectedItem = { () => setSelectedItem(id) }
                />
            ))}
        </List>
    );
};

export default SearchList;

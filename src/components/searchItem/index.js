import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PropTypes from 'prop-types';
import {Link as RouterLink} from 'react-router-dom';

import './index.css';

const SearchItem = ({id, name, country, setSelectedItem}) => {
    function ListItemLink(props) {
        const { icon, primary, to } = props;

        const renderLink = React.useMemo(
            () => React.forwardRef((itemProps, ref) => (
                <RouterLink
                    ref = { ref }
                    to = { to }
                    { ...itemProps }
                    onClick = { setSelectedItem }
                />
            )),
            [ to ],
        );

        return (
            <li key = { id }>
                <ListItem
                    button
                    component = { renderLink }>
                    {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
                    <ListItemText primary = { primary } />
                </ListItem>
            </li>
        );
    }

    return (
        <ListItemLink
            icon = { <ChevronRightIcon /> }
            primary = { `View the weather in ${name}, ${country}` }
            to = '/forecast'
        />
    );
};

SearchItem.prototype = {
    setSelectedItem: PropTypes.func,
    id:              PropTypes.number,
    name:            PropTypes.string,
    country:         PropTypes.string,
};

export default SearchItem;

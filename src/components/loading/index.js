import React from 'react';
import {useSelector} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import './index.css';
const Loading = () => {
    const {isLoading} = useSelector((state) => state.general);
    const activeClassName = isLoading ? 'active' : '';

    return (
        <div className = { `loading ${activeClassName}` }>
            <CircularProgress/>
        </div>
    );
};

export default Loading;

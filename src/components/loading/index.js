import React from 'react';
// import {useSelector} from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import './index.css';

const Loading = () => {
    return (
        <div className = 'loading'>
            <CircularProgress/>
        </div>
    );
};

export default Loading;

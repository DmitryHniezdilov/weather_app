import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LocationPage from './pages/locationPage';
import ForecastPage from './pages/forecastPage';
import SearchPage from './pages/searchPage';
import Loading from './components/loading';
import './app.css';

const App = () => {
    return (
        <Router>
            <Grid
                container
                alignItems = 'center'
                className = 'app'
                justify = 'center'>
                <Grid
                    item
                    className = ''
                    component = 'main'
                    xs = { 6 }>
                    <Loading />
                    <Card
                        className = 'app__card'
                        variant = 'outlined'>
                        <CardContent >
                            <Switch>
                                <Route
                                    exact
                                    key = '/'
                                    path = '/'>
                                    <LocationPage />
                                </Route>
                                <Route
                                    exact
                                    key = 'forecast'
                                    path = '/forecast'>
                                    <ForecastPage />
                                </Route>
                                <Route
                                    exact
                                    key = 'search'
                                    path = '/search'>
                                    <SearchPage />
                                </Route>
                            </Switch>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Router>
    );
};
export default App;

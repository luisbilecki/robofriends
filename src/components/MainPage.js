import React, { Component } from 'react';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from './ErrorBoundary';
import './MainPage.css'

class MainPage extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    filterRobots = robots => {
        return robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
        });
    }

    render() {   
        const { onSearchChange, robots, isPending } = this.props;

        const filteredRobots = this.filterRobots(robots);

        return isPending ?
            (
                <div className='tc'>
                    <h1>Loading</h1>
                </div>
            ) :        
            (
                <div className='tc'>
                    <Header />
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                </div>
            );        
    }
};

export default MainPage;
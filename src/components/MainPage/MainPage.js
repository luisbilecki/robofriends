import React, { Component } from 'react';
import Header from '../Header';
import CardList from '../CardList';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import ErrorBoundary from '../ErrorBoundary';
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
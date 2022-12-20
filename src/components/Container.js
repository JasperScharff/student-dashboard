import React, { Component } from 'react';
// import ChartShowCase from './ChartShowCase';
import ChartShowCaseTrial from './ChartShowCaseTrial';
import StudentShowCase from './StudentShowCase';


class Container extends Component {
    render() {
        return (
            <div>
                {/* <ChartShowCase /> */}
                <ChartShowCaseTrial />
                <StudentShowCase />
                <h1>Container is Home Level 1</h1>
                <h2>ChartShowCase hier Level 2</h2>
                <h2>StudentShowCase hier Level 2</h2>
            </div>
        );
    }
}

export default Container;
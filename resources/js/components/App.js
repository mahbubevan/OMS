import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DataTable from './DataTable/DataTable';

export default class App extends Component {
    constructor(){
        super();

        this.state={
            
        }

    }
  
    render() {
        return (
            <div className="mt-2">
                <div className="container-fluid pt-2 pl-5 pr-5">
                    <div className="row justify-content-center">
                        <DataTable />
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('react-app')) {
    ReactDOM.render(<App />, document.getElementById('react-app'));
}

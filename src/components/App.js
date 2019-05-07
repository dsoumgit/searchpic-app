/***
 * Some dependencies are required for this app:
 *  - Semantic UI
 *  - Axios 
 *  - Unsplash API to fetch data 
 * 
 * 
 */

import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {


    state = {
        images: [],
    }

    /***
     * IMPORTANT: this.setState({}) will throw an error because of 'this' is undefined. To 
     *  fix this issue, we need to use arrow function. 
     * Note: we can use 'async' and 'await' syntax to get response from the network
     *      request. Another way is to use .then((response) => {}) after .get()
     */
    // We're getting the search term from child component by passing props to the 
    //  SearchBar component.
    onSearchSubmit = async (term) => {
        // request call for Unsplash API 
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term,
                per_page: 50
            }
        });

        // update the state
        this.setState({
            images: response.data.results
        })
    }

    render() {

        return (
            <div className="ui container" style={{ marginTop: '20px' }}>
                <SearchBar onSubmitInput={this.onSearchSubmit} />

                Found Images: {this.state.images.length}

                <ImageList images={this.state.images} />

            </div>
        )
    }
}

export default App;
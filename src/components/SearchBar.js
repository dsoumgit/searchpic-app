import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        term: ''
    }

    // prevent the refresh page
   // onFormSubmit(event) {
    //    event.preventDefault();
        
        /**
         * 
         * console.log(this.state.term); 
         * 
         * Note: The output above throws an error because 'this' is undefined. 
         *  The reason it is undefined because when onFormSubmit function get invoked,
         *      there is no class (SearchBar) on form submit, and no value inside of 
         *      'this'. 
         * One way to solve this issue is to bind 'this' inside the constructor method:
         *      constructor() {        // this creates a new function and override the existing one on the left side
         *          this.nameOfObj = this.nameOfObj.bind(this);
         *      }
         * 
         * Second way is to use arrow function. When we use 'function', it breaks 
         *  the value of 'this'. One of the special feature for arrow function in ES15
         *  is that it is automatically bind the value of 'this'. 
         * 
         * Third way is to write arrow function directly after the onSubmit.
         * 
         */    
  //  }


  onFormSubmit = (event) => {
      event.preventDefault();

    //  console.log(this.state.term); 

        this.props.onSubmitInput(this.state.term);
  }        


  onSearch = (event) => {
    this.setState({
        term: event.target.value
    })

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
        this.props.onSubmitInput(this.state.term);
    }, 500);
  }


    // event object is being passed automatically 
    // we can also use an arrow function inside the onChange event since we only have one line of code.
    //  onChange={(event) => event.target.value}
   // onInputChange(event) {
   //     console.log(event.target.value)
   // }

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text" 
                            placeholder="Enter a name and press Enter"
                            onChange={this.onSearch}
                        ></input>    
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar; 
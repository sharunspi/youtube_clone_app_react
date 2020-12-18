import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {searchTerm:''}
    onInputChange = e =>{
        this.setState({
            searchTerm:e.target.value
        })
    }
    onFormSubmit = e =>{
        e.preventDefault()
       this.props.onFormSubmited(this.state.searchTerm)
    }
    render() {
        return (
            <div className="search-bar ui segment">
               <form className="ui form" onSubmit={this.onFormSubmit}>
                <div className="field">
                <label>Search Youtube video</label>
                <input type="text" value={this.state.searchTerm} onChange={this.onInputChange}/>
                </div>
               </form>
            </div>
        )
    }
}

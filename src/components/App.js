import React, { Component } from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtubeApi'

const KEY ="AIzaSyAfzk8WDc9Riy5JmmHspZ09WVCeiYXxL1Q"

export default class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            videoList:[]
        }
    }
    onTermSubmit = term =>{
        youtube.get("/search",{
            params:{
                q: term,
                part:"snippet",
                type:'video',
                maxResults:5,
                key:KEY
            }
        }).then(res=>{
            this.setState({
                videoList:res.data.items
            })
        })
        .catch(err=>{console.log(err)})
    }
    render() {

        return (
            <div className="ui container">
                <SearchBar onFormSubmited={this.onTermSubmit}/>
            </div>
        )
    }
}

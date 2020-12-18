import React, { Component } from 'react';
import VideoElement from './VideoElement';
export default class ResultsPage extends Component {
    render() {
        const loadingScreen = () => {
            return (
                <div class="ui segment">
                    <div class="ui active dimmer">
                        <div class="ui text loader">Loading</div>
                    </div>
                    <p></p>
                </div>
            )
        }
        
        return (
            <div>
                <div class="ui three column grid">
  <div class="column">
    
  {
                    this.props.videos.map(({snippet},index)=>{
                        console.log(snippet)
                        return <VideoElement key={snippet.title} title={snippet.title} thumbnail={snippet.thumbnails.high.url}/>
                    })
                }
  </div>
</div>
            </div>
        )
    }
}

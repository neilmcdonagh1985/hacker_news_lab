import React, { Component } from 'react';

class StoriesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedStory: null,
            stories: []
        }
    }

    componentDidMount(){
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => response.json())
        .then(arrayOfIds => arrayOfIds.forEach((id) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response => response.json())
            .then(object => this.state.stories.push(object))))
    }

    



    render() {
        return (
            <h1>Hello</h1>

        )
        
    }
}

export default StoriesContainer;
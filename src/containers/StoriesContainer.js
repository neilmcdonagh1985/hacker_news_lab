import React, { Component } from 'react';
import StoriesSelect from '../components/StoriesSelect';
import StoryDetail from '../components/StoryDetail';

class StoriesContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedStory: null,
            stories: []
        }

        this.chooseSelectedStory = this.chooseSelectedStory.bind(this);
    }

    componentDidMount(){
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => response.json())
            .then(array => array.slice(0, 40))
            .then(arrayOfIds => {
                const promises = arrayOfIds.map((id) => {
                    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
                                .then(response => response.json())
                    })
                Promise.all(promises).then(values => this.setState({stories: values}))
            })
    }
    

    chooseSelectedStory(index) {
        const chosenStory = this.state.stories[index];
        this.setState({selectedStory: chosenStory});
    }





    render() {
        return (
            <div>
                <StoriesSelect stories={this.state.stories} chosenStory={this.chooseSelectedStory} />
                <StoryDetail selectedStory={this.state.selectedStory}></StoryDetail>
            </div>
        )
        
    }
}

export default StoriesContainer;
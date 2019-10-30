import React from 'react';

const StoryDetail = ({selectedStory}) => {
    if (selectedStory) {
        return (
            <div>
                <h3>{selectedStory.title}</h3>
                <p>Published By: {selectedStory.by}</p>
                <p>Type: {selectedStory.type}</p>
                <a href={selectedStory.url} target="_blank">Read more >> </a>
            </div>
        ) 
    } else {
        return null
    }

}

export default StoryDetail;
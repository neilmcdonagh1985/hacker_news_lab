import React from  'react'

const StoriesSelect = (props) => {
    
    const storiesOptions = props.stories.map((story, index) =>{
        return(
            <option key={story.id} value={index} > {story.title} </option>
        )
    })

    function handleChange(event) {
        props.chosenStory(event.target.value)        

    }
    
    return(
        <div>
            <h3> Select Story: </h3>
            <select defaultValue="default" onChange={handleChange}>
                <option disabled value='default'>Choose a Title</option>
                {storiesOptions}
            </select>
        </div>
    )
}

export default StoriesSelect;
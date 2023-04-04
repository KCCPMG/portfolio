import { useState } from 'react';


function Cover() {
  
  const [selectedStory, setSelectedStory] = useState(null)

  const availableStories = [
    {
      title: '',
      icon: '',
      picture: '',
      deployLink: '',
      githubLink: '',
      description: ''
    },
  ]

  return (
    <div id="cover">
      <h1>Connor Wales</h1>
    </div>
  )
}

export default Cover;
import { useState } from 'react';
import { Card, Image, Button, ButtonGroup, ButtonToolbar, Container, Col, Row } from 'react-bootstrap';
import AnchormanImage from '../assets/Anchorman_timer_large.jpeg';
import D20Image from '../assets/d20_attack_comparison_large.jpeg'
import DragonsImage from '../assets/Dragons_Hoard_large.jpeg'
import KeyfinderImage from '../assets/keyfinder_large.jpeg'
import XKCDImage from '../assets/xkcd_view_large.jpeg'

const cardStyle = { 
	position: 'absolute',
	top: '20%',
	// height: '60%',
	left: '15%',
	width: '70%',
	// left: '35px',
	maxWidth: '80%',
	margin: 'auto', 
	color: 'rgba(255,255,255,1)',
	backgroundColor: 'rgba(34, 149, 206, 0.3', 
	fontSize: '125%'
}

const thumbnailButtonStyle = {
	padding: '0',
	border: '2px solid black',
	margin: '4px',
	backgroundColor: 'rgba(255,255,255,1)',
	width: '100%'
	// borderRadius: '30px'
}


const cardColStyle = {
	maxWidth: '40%',
}

const cardImageStyle = {
	maxHeight: '100%',
	maxWidth: '100%',
	height: 'auto'
}


const buttonImgStyle = {
	width: 'auto',
	maxWidth: '100%',
	// height: 'auto'
}


function Cover() {
  
  const [selectedStory, setSelectedStory] = useState(null)



  const availableStories = [
    {
      title: 'Keyfinder',
			key: 'keyfinder',
      icon: '',
      picture: KeyfinderImage,
			technologies: ['React', 'Bootstrap'],
      deployLink: 'https://kccpmg.github.io/keyfinder/',
      githubLink: 'https://github.com/KCCPMG/keyfinder',
      description: 'A one-page React app to help musicians keep track of compatibility between different notes, chords, and keys.'
    },
    {
			title: 'D20 Attack Comparison',
			key: 'd20',
			icon: '',
			picture: D20Image,
			technologies: ['React', 'Bootstrap', 'ChartJS'],
			deployLink: 'https://kccpmg.github.io/dnd-attack-comparison/',
			githubLink: 'https://github.com/KCCPMG/dnd-attack-comparison',
			description: 'A one-page React app taking Dungeons and Dragons attacks input by users and then graphing probabilities of hits and damage.'
		},
		{
      title: 'Anchorman Timer!',
			key: 'anchorman',
      icon: '',
      picture: AnchormanImage,
			technologies: ['React'],
      deployLink: 'https://kccpmg.github.io/sex-panther-timer/',
      githubLink: 'https://github.com/KCCPMG/sex-panther-timer',
      description: 'A 60 second countdown timer for use with "Anchorman: The Board Game", featuring sound clips from the film.'
    },
		{
      title: 'XKCD View',
			key: 'xkcd',
      icon: '',
      picture: XKCDImage,
			technologies: ['PostgreSQL', 'NodeJS', 'Express', 'ReactJS', 'Bootstrap'],
      deployLink: 'https://xkcd-view.surge.sh/',
      githubLink: 'https://github.com/KCCPMG/capstone-1-dnd-repository',
      description: 'A viewer for xkcd comics which allows users to upvote comics they like, see which comics are popular, and to save their own personal favorites. Note: Please give the backend a moment to load when visiting'
    },
		{
      title: 'Dragon\'s Hoard',
			key: 'dragon',
      icon: '',
      picture: DragonsImage,
			technologies: ['PostgreSQL', 'Python', 'Flask'],
      deployLink: 'https://dnd-repo.herokuapp.com/',
      githubLink: 'https://github.com/KCCPMG/capstone-2-xkcd-viewer',
      description: 'A Content Creator and Repository for Dungeons and Dragons (5E), using Python, Flask, and PostgreSQL.'
    },
  ]

	const setStory = (key) => {
		let story = availableStories.find(as => as.key === key);
		setSelectedStory(story)
	}

  return (
    <Card style={cardStyle}>
			<Card.Body>
				<Card.Title><h2>Connor Wales</h2></Card.Title>
				<Card.Text>
					<ButtonGroup>
						{availableStories.map(story => 
							<ButtonToolbar style={{width: '100%'}}>
								<Button
									rounded
									key={story.key} 
									onClick={() => setStory(story.key)}
									style={thumbnailButtonStyle}
									>
									<Image 
										thumbnail 
										src={story.picture} 
										title={story.title}
										// style={buttonImgStyle} 
									/>
								</Button>
							</ButtonToolbar>
						)}
					</ButtonGroup>
				</Card.Text>
				<Card.Text>
					{selectedStory && 
						<>
						<h3>{selectedStory.title}</h3>
						<Row >
							<Col className="mh-100">
								<Image 
									src={selectedStory.picture} 
									style={cardImageStyle}	
									title={selectedStory.title}
								/>
							</Col>
							<Col>
								<p>{selectedStory.description}</p>
								<ButtonGroup>
									{selectedStory.map()}
								</ButtonGroup>
							</Col>
						</Row>
						

						</>
					}
				</Card.Text>
			</Card.Body>
    </Card>
  )
}

export default Cover;
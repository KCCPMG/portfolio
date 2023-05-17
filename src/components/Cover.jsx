import { useState } from 'react';
import { Card, Image, Button, ButtonGroup, ButtonToolbar, Container, Col, Row } from 'react-bootstrap';
import AnchormanImage from '../assets/Anchorman_timer_large.jpeg';
import D20Image from '../assets/d20_attack_comparison_large.jpeg';
import DragonsImage from '../assets/Dragons_Hoard_large.jpeg';
import KeyfinderImage from '../assets/keyfinder_large.jpeg';
import XKCDImage from '../assets/xkcd_view_large.jpeg';

import ConnorImage from '../assets/portrait.jpeg';

import ReactImage from '../assets/react.png';
import BootstrapImage from '../assets/bootstrap-icon-png-2.png';
import ChartJSImage from '../assets/chartJS.svg';
import PostgreSQLImage from '../assets/PostgreSQL.png';
import ExpressImage from '../assets/express-js-icon-20.png';
import NodeJSImage from '../assets/nodeJS.png';
import PythonImage from '../assets/python.webp';
import FlaskImage from '../assets/flask.webp';
import GithubImage from '../assets/Github.png';


const REACT = 'react';
const BOOTSTRAP = 'bootstrap';
const CHARTJS = 'chartjs';
const POSTGRESQL = 'postgresql';
const EXPRESS = 'express';
const NODEJS = 'nodejs';
const PYTHON = 'python';
const FLASK = 'flask';
const GITHUB = 'github';


const TECHNOLOGY_IMAGES = {
	react: ReactImage,
	bootstrap: BootstrapImage,
	chartjs: ChartJSImage,
	postgresql: PostgreSQLImage,
	express: ExpressImage,
	nodejs: NodeJSImage,
	python: PythonImage,
	flask: FlaskImage,
	github: GithubImage
} 


const cardStyle = { 
	// position: 'absolute',
	// top: '20%',
	maxHeight: '90vh',
	// left: '15%',
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
	maxWidth: '30%',
	maxHeight: '100%',
	content: 'contain'
}

const cardImageStyle = {
	maxHeight: '100%',
	maxWidth: '100%',
	// height: 'auto'
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
      title: 'Connor Wales',
			key: 'connor',
      icon: '',
      picture: ConnorImage,
			technologies: [REACT, BOOTSTRAP, CHARTJS, POSTGRESQL, EXPRESS, NODEJS, PYTHON, FLASK, GITHUB],
      deployLink: 'https://linkedin.com/in/connor-wales',
      githubLink: 'https://github.com/KCCPMG',
      description: 'Full Stack Developer. Always learning, always building.'
    },
    {
      title: 'Keyfinder',
			key: 'keyfinder',
      icon: '',
      picture: KeyfinderImage,
			technologies: [REACT, BOOTSTRAP],
      deployLink: 'https://kccpmg.github.io/keyfinder/',
      githubLink: 'https://github.com/KCCPMG/keyfinder',
      description: 'A one-page React app to help musicians keep track of compatibility between different notes, chords, and keys.'
    },
    {
			title: 'D20 Attack Comparison',
			key: 'd20',
			icon: '',
			picture: D20Image,
			technologies: [REACT, BOOTSTRAP, CHARTJS],
			deployLink: 'https://kccpmg.github.io/dnd-attack-comparison/',
			githubLink: 'https://github.com/KCCPMG/dnd-attack-comparison',
			description: 'A one-page React app taking Dungeons and Dragons attacks input by users and then graphing probabilities of hits and damage.'
		},
		{
      title: 'Anchorman Timer!',
			key: 'anchorman',
      icon: '',
      picture: AnchormanImage,
			technologies: [REACT],
      deployLink: 'https://kccpmg.github.io/sex-panther-timer/',
      githubLink: 'https://github.com/KCCPMG/sex-panther-timer',
      description: 'A 60 second countdown timer for use with "Anchorman: The Board Game", featuring sound clips from the film.'
    },
		{
      title: 'XKCD View',
			key: 'xkcd',
      icon: '',
      picture: XKCDImage,
			technologies: [POSTGRESQL, REACT, NODEJS, EXPRESS, BOOTSTRAP],
      deployLink: 'https://xkcd-view.surge.sh/',
      githubLink: 'https://github.com/KCCPMG/capstone-1-dnd-repository',
      description: 'A viewer for xkcd comics which allows users to upvote comics they like, see which comics are popular, and to save their own personal favorites. Note: Please give the backend a moment to load when visiting'
    },
		{
      title: 'Dragon\'s Hoard',
			key: 'dragon',
      icon: '',
      picture: DragonsImage,
			technologies: [POSTGRESQL, PYTHON, FLASK],
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
			<Card.Body 
				className="d-flex flex-container flex-wrap" 
				style={{overflow: 'auto', maxHeight: '85vh'}}
			>
				<Row className="justify-content-md-center">
					<Col xs={12}>Test</Col>
				</Row>

				<Row className="d-flex w-100">
					<Card.Title><h2>Connor Wales</h2></Card.Title>	
				</Row>

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
								/>
							</Button>
						</ButtonToolbar>
					)}
				</ButtonGroup>
				<hr/>

				{selectedStory &&
					<Container 
						// className="d-flex flex-grow-1"
						style={{overflowY: 'auto'}}
					>
						<h3>{selectedStory.title}</h3>
						<Row className="flex-grow-1" >
							<Col style={cardColStyle}>
								<Image 
									fluid
									src={selectedStory.picture} 
									style={cardImageStyle}	
									title={selectedStory.title}
								/>
							</Col>
							<Col>
								<p>{selectedStory.description}</p>
								<ButtonGroup>
									{selectedStory.technologies.map(t => 
										<ButtonToolbar>
											<Button
												rounded
												key={t}
												style={thumbnailButtonStyle}
											>
												<Image 
													thumbnail
													src={TECHNOLOGY_IMAGES[t]} 
												/>
											</Button>	
										</ButtonToolbar>
									)}
								</ButtonGroup>
							</Col>
						</Row>
					</Container>
				}

			</Card.Body>
    </Card>
  )
}

export default Cover;
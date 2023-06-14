

import './DetailSection.css';


export default function DetailSection({about}) {
  return (
    <div className="detail-section">
      <div className="image-container">
        <img src={about.image} />
      </div>
      <div className="text-container">
        <div>
          <h2>{about.title}</h2>
        </div>
        <div>
          <p className="linebreak">{about.text}</p>
        </div>
        <div>
        <div>
          {about.techs.map(tech => <></>)}
        </div>
        </div>
        {about.links && (
        <div>
          {about.links.map(link => <></>)}
        </div>
        )}
      </div>
      
    </div>
  )
}
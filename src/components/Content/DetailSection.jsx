

import './DetailSection.css';


export default function DetailSection({about}) {
  return (
    <div className="detail-section">
      
      <div className="text-container">
        <div className="image-container">
          <img src={about.image} />
        </div>
        <div>
          <h2>{about.title}</h2>
        </div>
        <div>
          <p className="linebreak">{about.text}</p>
        </div>
      </div>

      <div className="tech-and-links">
        <div className="technologies">
          <h5>Technologies</h5>
          <div className="technologies-row">
            {about.techs.map(tech => 
              <div className="technologies-row-image-container">
                <img className="technologies-row-image" 
                  title={tech.name}
                  src={tech.image}
                />
              </div>
            )}
          </div>
        </div>

        {about.links && (
        <div className="links">
          <h5>Links</h5>
          <div className="links-row">
            {about.links.map(link => 
              <a href={link.link}>
                <div className="links-row-image-container">
                  <img className="links-row-image" 
                    title={link.name}
                    src={link.image}
                  />
                </div>
              </a>
            )}
          </div>
        </div>
        )}
      </div>
      
    </div>
  )
}
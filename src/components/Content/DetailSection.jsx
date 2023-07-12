import ME from  '../../assets/portrait.jpeg';
import ANCHORMAN from  '../../assets/Anchorman_timer_large.jpeg';
import XKCD from  '../../assets/xkcd_view_large.jpeg';
import D20_CALC from  '../../assets/d20_attack_comparison_large.jpeg';
import DRAGONS_HOARD from '../../assets/Dragons_Hoard_large.jpeg';

import GITHUB from '../../assets/Github.png';
import LINKED_IN from '../../assets/LinkedIn.png';
import REACT from '../../assets/React.png';
import EXPRESS from '../../assets/express-js-icon-20.png';
import NODEJS from '../../assets/NodeJS.png';
import POSTGRESQL from '../../assets/PostgreSQL.png';
import BOOTSTRAP from '../../assets/bootstrap-icon-png-2.png';
import CHARTJS from '../../assets/ChartJS.svg';
import PYTHON from '../../assets/Python.webp';
import FLASK from '../../assets/Flask.png';
import SQLALCHEMY from '../../assets/SQLAicon.png';

import './DetailSection.css';


const imageDict = {
  "Connor Wales": ME,
  "Anchorman Timer!": ANCHORMAN,
  "XKCD Viewer": XKCD,
  "D20 Attack Calculator": D20_CALC,
  "Dragon's Hoard": DRAGONS_HOARD,

  "Github": GITHUB,
  "LinkedIn": LINKED_IN,
  
  "React": REACT,
  "Express.js" : EXPRESS,
  "Node.js" : NODEJS,
  "PostgreSQL" : POSTGRESQL,
  "Bootstrap" : BOOTSTRAP,
  "ChartJS" : CHARTJS,
  "Python" : PYTHON,
  "Flask" : FLASK,
  "SQLAlchemy" : SQLALCHEMY,

  "Sex Panther Timer - Deployed on GitHub Pages": ANCHORMAN,
  "XKCD Viewer - Deployed at Surge.sh with Heroku": XKCD,
  "DND Attack Comparison - Deployed on GitHub Pages": D20_CALC,
  "Dragon's Hoard - Deployed on Heroku": DRAGONS_HOARD

}


export default function DetailSection({about}) {
  return (
    <div className="detail-section">
      
      <div className="text-container">
        <div className="image-container">
          <img src={imageDict[about.title]} />
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
              <div className="technologies-row-image-container" 
                key={tech.name} 
              >
                <img className="technologies-row-image" 
                  title={tech.name}
                  src={imageDict[tech.name]}
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
              <a 
                href={link.link} 
                key={link.name}
              >
                <div className="links-row-image-container">
                  <img className="links-row-image" 
                    title={link.name}
                    src={imageDict[link.name]}
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
import Portrait from '../../assets/portrait.jpeg';

import './PortraitIcon.css';

function PortraitIcon({show}) {
  return (
    <div id="portrait-icon" onClick={show}>
      <img src={Portrait} />
    </div>
  )
}

export default PortraitIcon;
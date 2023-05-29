import Portrait from '../../assets/portrait.jpeg';

import './PortraitIcon.css';

function PortraitIcon({show, id}) {
  return (
    <div id={id} onClick={show}>
      <img src={Portrait} />
    </div>
  )
}

export default PortraitIcon;
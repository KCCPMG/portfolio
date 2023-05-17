import Portrait from '../assets/portrait.jpeg';


function PortraitIcon({show}) {
  return (
    <div id="portrait-icon" onClick={show}>
      <img src={Portrait} />
    </div>
  )
}

export default PortraitIcon;
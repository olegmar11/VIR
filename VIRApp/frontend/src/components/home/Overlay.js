import classes from './HomePage.module.css'

function Overlay(props) {
  return (
    <div className={classes.modal} onClick={props.onClose}>
      <img src={props.src} alt=''/>
    </div>
  );
}

export default Overlay;
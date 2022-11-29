import classes from './HomePage.module.css'

function Overlay(props) {
  console.log(props);
  return (
    <div id="modal" className={classes.modal} onClick={props.onClose}>
      <img className={classes.modalContent} id="img-modal" src={props.src} />
      <div id="caption-modal">{props.caption}</div>
    </div>
  );
}

export default Overlay;
import classes from "./Admin.module.css";
import {useNavigate} from "react-router-dom";

function AdminArticle(props) {
  const nav = useNavigate();

  const moveToArticle = () => {
    nav(`/article/${props.pk}`);
  }

  const approveArticle = () => {
    /* Changing approved to true on db */
  }

  const deleteArticle = () => {
    /* Deleting article from db */
  }

  return (
    <div className={classes.article}>
      <span className={classes.span}>
        <img src={props.img} alt='' onClick={moveToArticle}/>
      </span>
      <div className={classes.info} onClick={moveToArticle}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
      <div className={classes.btns}>
        {props.approved === false ? <button className={`${classes.button} ${classes.buttonConfirm}`} onClick={approveArticle}>Схвалити</button> : <></>}
        <button className={`${classes.button} ${classes.buttonDecline}`} onClick={deleteArticle}>Видалити</button>
      </div>
    </div>
  );
}

export default AdminArticle;
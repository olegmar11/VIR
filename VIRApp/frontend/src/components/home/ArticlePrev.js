import classes from "./HomePage.module.css";
import image from "../img/prev.jpg"
import ArticlesService from "../../service/ArticlesService";

function ArticlePrev() {
  return (
    <article className={classes.article}>
      <img src={image} alt="Article"/>
      <div className={classes.description}>
        <h2>Lorum</h2>
        <p>Lorum ipsen is nice</p>
      </div>
    </article>
  );
}

export default ArticlePrev;
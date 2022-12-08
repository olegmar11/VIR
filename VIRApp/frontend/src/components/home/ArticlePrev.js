import classes from "./HomePage.module.css";

function ArticlePrev(props) {
  return (
    <article className={classes.article}>
      <img src={props.img} alt="Article"/>
      <div className={classes.description}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </article>
  );
}

export default ArticlePrev;
import SideMenu from "../side/SideMenu";
import classes from "./NewArticle.module.css";
import Footer from "../Footer";

function NewArticle() {
  return (
    <>
      <main className={classes.main}>
        <SideMenu/>
        <div className={classes.info}>
          <h1>Створення нової статті</h1>
          <p>Якась додаткова інформація</p>
          <form className={classes.form}>
            <span className={classes.span}>
              <label htmlFor='title'>Назва статті:</label>
              <input className={classes.input} required id='title' type='text'/>
            </span>
            <span className={classes.span}>
              <label htmlFor='content'>Текст статті:</label>
              <textarea className={classes.textarea} required id='content'/>
            </span>
            <span className={classes.span}>
              <label htmlFor='author'>Джерела на фотографії (необов'язково):</label>
              <input className={classes.input} id='author' type='text'/>
            </span>
            <span className={classes.span}>
              <label htmlFor='author'>Автор:</label>
              <input className={classes.input} required id='author' type='text'/>
            </span>
            <span className={classes.span}>
              <input className={classes.input} type="submit" value="Надіслати"/>
            </span>
          </form>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default NewArticle;
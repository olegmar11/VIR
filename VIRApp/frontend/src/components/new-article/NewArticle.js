import SideMenu from "../side/SideMenu";
import classes from "./NewArticle.module.css";
import Footer from "../Footer";
import {useEffect} from "react";

function NewArticle() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <main className={classes.main}>
        <SideMenu/>
        <div className={classes.info}>
          <h1>Створення нової статті</h1>
          <p>Поля, позначені <p className={classes.obelisk}>*</p> є обов'язковими для заповнення</p>
          <form className={classes.form}>
            <span className={classes.span}>
              <label htmlFor='title'>Назва статті:<p className={classes.obelisk}>*</p></label>
              <input className={classes.input} required id='title' type='text'/>
            </span>
            <span className={classes.span}>
              <label htmlFor='content'>Текст статті:<p className={classes.obelisk}>*</p></label>
              <textarea className={classes.textarea} required id='content'/>
            </span>
            <span className={classes.span}>
              <label htmlFor='author'>URL-посилання на фотографії:</label>
              <input className={classes.input} required id='author' type='text'/>
            </span>
            <span className={classes.span}>
              <label htmlFor='author'>URL-посилання на відео матеріали:</label>
              <input className={classes.input} required id='author' type='text'/>
            </span>
            <span className={classes.span}>
              <label htmlFor='author'>Автор:<p className={classes.obelisk}>*</p></label>
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
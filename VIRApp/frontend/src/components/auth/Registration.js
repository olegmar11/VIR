import SideMenu from "../side/SideMenu";
import Footer from "../Footer";
import classes from "./Auth.module.css";
import {Link} from "react-router-dom";

function Registration() {
  return(
    <>
      <main className={classes.main}>
        <SideMenu/>
        <div className={classes.info}>
          <h1>Реєстрація акаунту</h1>
          <form className={classes.form}>
            <span className={classes.span}>
              <label htmlFor='email'>Email:</label>
              <input className={classes.input} required id='email' type='text'/>
            </span>
            <span className={classes.span}>
              <label htmlFor='pass'>Пароль:</label>
               <input className={classes.input} required id='pass' type='password'/>
            </span>
            <span className={classes.span}>
              <label htmlFor='passConfirm'>Підтвердити пароль:</label>
              <input className={classes.input} required id='passConfirm' type='password'/>
            </span>
            <span className={`${classes.span} ${classes.check}`}>
              <label htmlFor='terms'>Я приймаю умови користування</label>
              <input className={classes.input} required id='terms' type='checkbox'/>
            </span>
            <span className={classes.span}>
              <input className={classes.input} type="submit" value="Створити акаунт"/>
            </span>
            <p>Уже зареєстровані? <Link to={'/login'} className={classes.link}>Увійти</Link></p>
          </form>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Registration;
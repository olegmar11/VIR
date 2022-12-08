import classes from "./Auth.module.css";
import SideMenu from "../side/SideMenu";
import Footer from "../Footer";
import {Link} from "react-router-dom";

function Login() {
  return(
    <>
      <main className={classes.main}>
        <SideMenu/>
        <div className={classes.info}>
          <h1>Увійти до акаунту</h1>
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
              <input className={classes.input} type="submit" value="Увійти"/>
            </span>
            <p>Ще не зареєстровані? <Link to={'/register'} className={classes.link}>Зареєструватись</Link></p>
          </form>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Login;
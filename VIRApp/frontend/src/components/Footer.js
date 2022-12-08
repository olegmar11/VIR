import classes from './Footer.module.css'

function Footer() {
  return (
    <div className={classes.container}>
      <footer className={classes.footer}>
        <pre>Зв'яжіться з нами: znajvoroga@ukr.net
&copy; Затверджено Міністерством науки і освіти.
2022</pre>
      </footer>
    </div>
  );
}

export default Footer;
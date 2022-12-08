import classes from './NotFound.module.css'

function NotFound() {
  return (
    <div className={classes.error}>
      <h1>404</h1>
      <h2>Упс!</h2>
      <h2>Ми не змогли знайти шукану сторінку</h2>
      <h2>:(</h2>
    </div>
  );
}

export default NotFound
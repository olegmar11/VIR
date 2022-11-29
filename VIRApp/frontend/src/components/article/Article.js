import SideMenu from "../side/SideMenu";
import Footer from "../Footer";
import classes from './Article.module.css'
import poroh from '../img/poroh.png'

function Article() {
  return (
    <>
      <main className={classes.main}>
        <SideMenu/>
        <section className={classes.section}>
          <article className={classes.article}>
            <h1>Lorem Ipsum</h1>
            <h2>Description</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae nunc et dui convallis sagittis in at
              turpis.
              Aliquam nunc mauris, vulputate ac scelerisque sed, tincidunt vitae justo. Curabitur egestas lacus magna,
              eu
              imperdiet enim bibendum vitae. Pellentesque euismod tortor tortor, non tristique nunc pulvinar vel. Sed
              est
              ligula,
              facilisis nec magna id, bibendum mollis augue. Suspendisse aliquet erat tortor, a efficitur sem vehicula
              vitae.
              Aliquam id tortor id lectus pulvinar viverra non et mauris.</p>
          </article>
          <hr/>
          <div className={classes.photos}>
            <img onClick="openImage(this)" src={poroh} alt="Prev1"/>
            <img onClick="openImage(this)" src={poroh} alt="Prev2"/>
            <img onClick="openImage(this)" src={poroh} alt="Prev3"/>
          </div>
          <hr/>
          <div className={classes.vid}>
            <iframe width="961" height="721" src="https://www.youtube.com/embed/djV11Xbc914"
                    title="a-ha - Take On Me (Official Video) [Remastered in 4K]" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen className={classes.iframe}></iframe>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Article;
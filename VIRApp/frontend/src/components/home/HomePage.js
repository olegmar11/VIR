import classes from "./HomePage.module.css"
import logo from '../img/logo.png'
import prev from '../img/prev.jpg'
import Footer from "../Footer";
import {useState} from "react";
import Overlay from "./Overlay";
import ArticleList from "./ArticleList";

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  let  overlay_s, overlay_a;
  function openImage(e){
    setModalOpen(true);
    overlay_s = prev;
    overlay_a = e.alt;
  }

  function closeImage(){
    setModalOpen(false);
  }

  return (
    <div className={classes.body}>
      <header className={classes.header}>
        <img src={logo} alt="Logo"/>
        <h1>Знай ворога</h1>
        <h2>Description</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae nunc et dui convallis sagittis in at
          turpis.
          Aliquam nunc mauris, vulputate ac scelerisque sed, tincidunt vitae justo. Curabitur egestas lacus magna, eu
          imperdiet enim bibendum vitae. Pellentesque euismod tortor tortor, non tristique nunc pulvinar vel. Sed est
          ligula,
          facilisis nec magna id, bibendum mollis augue. Suspendisse aliquet erat tortor, a efficitur sem vehicula
          vitae.
          Aliquam id tortor id lectus pulvinar viverra non et mauris.</p>
      </header>
      <main className={classes.main}>
        <span>
          <h2>Свіжі світлини</h2>
          <div className={classes.photos}>
            <img onClick={openImage} src={prev} alt="Prev1"/>
            <img onClick={openImage} src={prev} alt="Prev2"/>
            <img onClick={openImage} src={prev} alt="Prev3"/>
          </div>
        </span>
        <hr className={classes.hr}/>
        <div>
          <h2>Статті</h2>
          <section className={classes.section}>
            <ArticleList/>
          </section>
        </div>
      </main>
      <Footer/>
      {/* modalOpen && <Overlay caption={"Prev1"} src={prev} onClose={closeImage} /> TODO FIX */}
    </div>
  );
}

export default HomePage;
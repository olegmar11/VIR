import SideMenu from "../side/SideMenu";
import Footer from "../Footer";
import classes from './Article.module.css'
import poroh from '../img/poroh.png'
import {useEffect, useState} from "react";
import Overlay from "../home/Overlay";

function Article() {
  const article = {
    pk: 1,
    title: 'Мирного рішення не буде',
    content: 'Мирного рішення точно не буде',
    author: 'Петро Поршенко',
    images: [poroh, poroh, poroh],
    videos: ['https://www.youtube.com/embed/djV11Xbc914'],
    approved: true,
    date: '2022-11-30T21:17:32'
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [overlaySrc, setOverlaySrc] = useState('');

  function openImage(e) {
    setOverlaySrc(e.target.src);
    setModalOpen(true);
  }

  function closeImage() {
    setModalOpen(false);
  }


  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <main className={classes.main}>
        <SideMenu/>
        <section className={classes.section}>
          <article className={classes.article}>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </article>
          <hr/>
          <div className={classes.photos}>
            {article.images.map((item) => {
              return <img onClick={openImage} src={item} alt={poroh}/>;
            })}
          </div>
          <hr/>
          <div className={classes.vid}>
            {article.videos.map((item) => {
              return <iframe width="961" height="721" src={item}
                             title="a-ha - Take On Me (Official Video) [Remastered in 4K]" frameBorder="0"
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                             allowFullScreen className={classes.iframe}></iframe>;
            })}
          </div>
        </section>
      </main>
      <Footer/>
      { modalOpen && <Overlay src={overlaySrc} onClose={closeImage} />}
    </>
  );
}

export default Article;
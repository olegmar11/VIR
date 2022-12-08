import SideMenu from "../side/SideMenu";
import Footer from "../Footer";
import poroh from "../img/poroh.png";
import AdminArticle from "./AdminArticle";
import classes from "./Admin.module.css";

function AdminPage() {
  let articles = [{
    pk: 1,
    title: 'Мирного рішення не буде',
    content: 'Мирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не буде' +
      'Мирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не буде' +
      'Мирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не буде' +
      'Мирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не буде',
    author: 'Петро Поршенко',
    images: [poroh, poroh, poroh],
    videos: ['https://www.youtube.com/embed/djV11Xbc914'],
    approved: true,
    date: '2022-11-30T21:17:32'
  }, {
    pk: 2,
    title: 'Мирного рішення не буде',
    content: 'Мирного рішення точно не буде',
    author: 'Петро Поршенко',
    images: [poroh, poroh, poroh],
    videos: ['https://www.youtube.com/embed/djV11Xbc914'],
    approved: true,
    date: '2022-11-30T21:17:32'
  }, {
    pk: 3,
    title: 'Мирного рішення не буде',
    content: 'Мирного рішення точно не буде',
    author: 'Петро Поршенко',
    images: [poroh, poroh, poroh],
    videos: ['https://www.youtube.com/embed/djV11Xbc914'],
    approved: false,
    date: '2022-11-30T21:17:32'
  }, {
    pk: 4,
    title: 'Мирного рішення не буде',
    content: 'Мирного рішення точно не буде',
    author: 'Петро Поршенко',
    images: [poroh, poroh, poroh],
    videos: ['https://www.youtube.com/embed/djV11Xbc914'],
    approved: true,
    date: '2022-11-30T21:17:32'
  }];

  return (
    <>
      <main className={classes.main}>
        <SideMenu/>
        <div className="content">
          {articles.map((item) => {
            return <AdminArticle title={item.title} content={item.content} img={item.images[0]} pk={item.pk} approved={item.approved}/>
          })}
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default AdminPage;
import ArticlePrev from "./ArticlePrev";
import ArticlesService from "../../service/ArticlesService";
import poroh from "../img/poroh.png";
import {Link} from "react-router-dom";

function ArticleList() {
  let articles = [{
    pk: 1,
    title: 'Мирного рішення не буде',
    content: 'Мирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не будеМирного рішення точно не буде',
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
    approved: true,
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
      {articles.map((item) => {
        return (
          <Link key={item.pk} to={`/article/${item.pk}`}>
            <ArticlePrev title={item.title} img={item.images[0]} desc={item.content}/>
          </Link>
        );
      })}
    </>
  );
}

export default ArticleList;

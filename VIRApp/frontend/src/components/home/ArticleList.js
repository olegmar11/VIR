import ArticlePrev from "./ArticlePrev";
import ArticlesService from "../../service/ArticlesService";

function ArticleList() {
  /* new ArticlesService().createArticle(
    {
      "name": "Lorem Ipsum",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae nunc et dui convallis sagittis in at\n" +
        "        turpis.\n" +
        "        Aliquam nunc mauris, vulputate ac scelerisque sed, tincidunt vitae justo. Curabitur egestas lacus magna, eu\n" +
        "        imperdiet enim bibendum vitae. Pellentesque euismod tortor tortor, non tristique nunc pulvinar vel. Sed est\n" +
        "        ligula,\n" +
        "        facilisis nec magna id, bibendum mollis augue. Suspendisse aliquet erat tortor, a efficitur sem vehicula vitae.\n" +
        "        Aliquam id tortor id lectus pulvinar viverra non et mauris.",
      "author": "Admin",
    }).then((result) => {
    alert("Article created!");
  }).catch(() => {
    alert('Error! Something unexpected happened');
  });
  let articles = [];
  new ArticlesService().getArticles()
    .then(res => {
      articles = res.data
    });
  console.log(articles); TODO CREATION */

  return (
    <ArticlePrev/>
  );
}

export default ArticleList;

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Loader from './../Layouts/Loader/Loader';





const FeaturedArticles = () => {
  
  const {blogs,loading} = useSelector(state=>state.blogs)

  const featuredBlogs = blogs?.filter((item)=>item.featured ===true);

  if(loading) return <Loader/>;

  return (
    <section className="featuredArticles">
      <h2>Featured Articles</h2>
      <div className="featured_articles_container">
        {featuredBlogs?.map((item) => (
          <FeaturedArticleCard
            key={item._id}
            poster={item.poster.url}
            publishedDate={item.date}
            title={item.title}
            category={item.category}
            articleId={item._id}
          />
        ))}
      </div>
    </section>
  );
};
export default FeaturedArticles;


const FeaturedArticleCard = ({ poster, publishedDate, title, category, articleId }) => {

  return (
    <div className="featuredArticleCard">
      <img src={poster} alt="" />
      <div>
        <span>{category}</span>
        <span>{publishedDate}</span>
        <h2>
          <Link to={`/article/${articleId}`}>{title}</Link>
        </h2>
      </div>
    </div>
  );
};

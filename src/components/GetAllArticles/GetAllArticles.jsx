import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../redux/actions/blogActions";
import Loader from './../Layouts/Loader/Loader';


const GetAllArticles = () => {
  const categories = ["Adventure", "Travel", "Fashion", "Technology"];
  const [category, setCategory] = useState("");

  const { blogs,loading } = useSelector((state) => state.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlogs(category));
  }, [dispatch, category]);

  if(loading) return <Loader/>

  return (
    <section className="GetArticlesSection" id="articles">
      <h1>Popular topics</h1>
      <div className="categories">
        <button onClick={() => dispatch(getAllBlogs())}>All</button>
        {categories?.map((item, index) => (
          <button onClick={() => setCategory(item)} key={index}>
            {item}
          </button>
        ))}
      </div>
      <div className="articles">
        {blogs?.map((item) => (
          <ArticleCard
            key={item?._id}
            poster={item?.poster?.url}
            title={item?.title}
            ArticleId={item?._id}
            AuthorimgSrc={item?.author?.avtarUrl}
            AuthorName={item?.author?.name}
            publishedDate={item?.createdAt.split('T')[0]}
            category={item?.category}
          />
        ))}
      </div>
    </section>
  );
};

const ArticleCard = ({
  poster,
  title,
  ArticleId,
  AuthorimgSrc,
  AuthorName,
  publishedDate,
  category,
}) => {
  return (
    <div className="articleCard">
      <img src={poster} alt="" />
      <span>{category}</span>
      <div>
        <span>{publishedDate}</span>
        <h2>
          <Link to={`/article/${ArticleId}`}>{title}</Link>
        </h2>
        <aside>
          <img src={AuthorimgSrc} alt="" />
          <p>Author - {AuthorName}</p>
        </aside>
      </div>
    </div>
  );
};
export default GetAllArticles;

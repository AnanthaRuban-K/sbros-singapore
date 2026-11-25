import { Link } from "react-router-dom";
import { posts } from "./blogData";


const Blog6 = () => {
    return (
        <div className="blog blog-page sp">
            <div className="container">
                <div className="row g-4">
                    {posts.map((post) => (
                        <div className="col-lg-6" key={post.slug}>
                            <article className="bc-card">
                                <Link to={`/blog/${post.slug}`} className="bc-card__image">
                                    <img src={post.image} alt={post.title} loading="lazy" />
                                </Link>

                                <div className="bc-card__body">
                                    <div className="bc-card__meta">
                                        <span className="bc-card__category">{post.category}</span>
                                        <span className="bc-card__date">
                                            <i className="bi bi-calendar3"></i> {post.date}
                                        </span>
                                    </div>

                                    <h3 className="bc-card__title">
                                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h3>
                                    <p className="bc-card__excerpt">{post.excerpt}</p>

                                    <Link to={`/blog/${post.slug}`} className="bc-card__more">
                                        Read More <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog6;
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { posts, company, toneOf, readMinutes } from "../Blog/blogData";


const BlogDetailsCenter1 = () => {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);
    // the other articles, starting with the one that follows this one ("Up next")
    const index = posts.findIndex((p) => p.slug === slug);
    const others = posts
        .map((_, i) => posts[(index + 1 + i) % posts.length])
        .filter((p) => p.slug !== slug);

    // start at the top whenever a different article opens
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="service-details-area-all sp">
                <div className="container text-center">
                    <h2>Article not found</h2>
                    <div className="space20"></div>
                    <Link to="/blog" className="bd-back">
                        <i className="bi bi-arrow-left"></i> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="service-details-area-all sp">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 m-auto">
                        <article className="bd-post">
                            {/* hero image + category badge */}
                            <div className="bd-hero">
                                <img src={post.image} alt={post.title} />
                                <span className="bd-hero__badge">
                                    <i className="bi bi-folder2-open"></i> {post.category}
                                </span>
                            </div>

                            <div className="bd-content">
                                <h1 className="bd-title">{post.title}</h1>

                                {post.intro.map((text, i) => (
                                    <p key={i}>{text}</p>
                                ))}

                                {post.sections.map((section, i) => (
                                    <section key={i}>
                                        <h2>{section.title}</h2>
                                        {section.paragraphs.map((text, j) => (
                                            <p key={j}>{text}</p>
                                        ))}
                                    </section>
                                ))}

                                {/* call to action */}
                                <div className="bd-cta">
                                    <p>{post.cta}</p>
                                    <Link to="/contact-us" className="theme-btn1">
                                        Contact Us <span><i className="bi bi-arrow-right"></i></span>
                                    </Link>
                                </div>

                                <div className="bd-about">
                                    <h3>About {company.name}</h3>
                                    <p>
                                        <strong>Company:</strong> {company.name}<br />
                                        <strong>Address:</strong> {company.address}
                                    </p>
                                </div>
                            </div>
                        </article>

                        {/* more articles */}
                        <div className="bd-more">
                            <div className="bd-more__head">
                                <div>
                                    <span className="bd-more__eyebrow">
                                        <i className="bi bi-journal-richtext"></i> Keep Reading
                                    </span>
                                    <h3>More Articles You May Like</h3>
                                </div>
                                <Link to="/blog" className="bd-more__all">
                                    View all articles <i className="bi bi-arrow-right"></i>
                                </Link>
                            </div>

                            <div className="row g-4">
                                {others.map((item, i) => (
                                    <div className="col-md-4" key={item.slug}>
                                        <Link
                                            to={`/blog/${item.slug}`}
                                            className="bd-mcard"
                                            style={{ "--tone": toneOf(item.category) }}
                                        >
                                            <div className="bd-mcard__media">
                                                <img src={item.image} alt={item.title} loading="lazy" />
                                                {i === 0 && <span className="bd-mcard__next">Up next</span>}
                                                <span className="bd-mcard__cat">
                                                    <i className="bd-mcard__dot"></i> {item.category}
                                                </span>
                                            </div>
                                            <div className="bd-mcard__body">
                                                <span className="bd-mcard__meta">
                                                    <i className="bi bi-clock"></i> {readMinutes(item)} min read
                                                </span>
                                                <h4>{item.title}</h4>
                                                <span className="bd-mcard__go">
                                                    Read article
                                                    <span className="bd-mcard__arrow">
                                                        <i className="bi bi-arrow-right"></i>
                                                    </span>
                                                </span>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailsCenter1;
import "./post.css";
import { Link } from "react-router-dom"

export default function Post({post}) {
    // declaring a public folder location to display images from
    const PF = "http://localhost:5000/images/";
    return (
        <div className="post">
            {
            // cheeky conditional usage: using post object passed in by Posts.jsx, create a
            // postImg div only if post.photo exists
            post.photo && (
                <img
                    className="postImg"
                    src = {PF + post.photo}
                    alt=""
                />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c)=> (
                        <span className="postCat">{c.name}</span>
                    ))}
                </div>
                {/* using react-router-dom's Link and the id imported in the post variable, change
                    the page to a SinglePost.jsx with the url set to a specific post's id.
                    Remember, the link knows to go to SinglePage.jsx because of the /post/ route
                    defined in App.js */}
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                </Link>
                <hr/>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>
    )
}

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions";
import { Link } from "react-router-dom";
import { Card} from "react-bootstrap";



function Home() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Social Media App</h1>
      {posts.map((post) => (
        <Card key={post.id} className="my-4">
          <Card.Img
            variant="top"
            src={`https://picsum.photos/200?random=${post.id}`}
          />
          <Card.Body>
            <h6>User Id : {post.id}</h6>
            <h6>Title : {post.title.slice(0, 30)}...</h6>
            <h6>Body : {post.body.slice(0, 100)}...</h6>
            <Link to={`/item/${post.id}`} className="btn">
              Read More
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Home;

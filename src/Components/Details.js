import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../actions";
import { useParams } from "react-router-dom";

function Details() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post) ?? {};
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPosts(id));
  }, [dispatch, id]);


  return (
    <div className="post-details-container">
    
      <h2 className="h2">Details Page For Post With ID {id}</h2>
      <div className="underline"> </div>
      {post && (
        <div className="card1">
          <img
            src={`https://picsum.photos/200?random=${post.id}`}
            alt={post.title}
            className="img"
          />
          <div className="post-details-card-body">
            <p className="id">User Id : {id}</p>
            <p className="title">Title : {post.title}</p>
            <p className="body">Body : {post.body}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;


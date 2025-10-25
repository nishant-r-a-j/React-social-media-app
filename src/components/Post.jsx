import { MdDelete } from "react-icons/md"
import { Postlist as Postlistdata } from '../store/post-liststore'
import { useContext } from "react"
function Post({post}){
   
   const {deletepost}= useContext(Postlistdata)

    return <div className="card post-card" style={{width: '30rem'}}>
  <div className="card-body">
    <h5 className="card-title">{post.title}
         <span onClick={()=>deletepost(post.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> <MdDelete/>
    <span className="visually-hidden">unread messages</span>
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    {post.tags.map((val)=>
        ( <span key={val} className="badge text-bg-primary">{val}</span>)
    )}
  
  </div>
  <div className="alert alert-info" role="alert">
  This post has been reacted by {post.reactions.likes} peoples.
</div>
</div>
}
export default Post
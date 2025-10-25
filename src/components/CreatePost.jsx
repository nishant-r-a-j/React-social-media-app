import { useContext, useRef } from "react"
import { Postlist as Postlistdata } from '../store/post-liststore'

function CreatePost(){

   const {addpost}= useContext(Postlistdata)

       const userIdElement= useRef()
       const postTitleElement= useRef()
       const postBodyElement= useRef()
       const reactoinsElement= useRef()
       const tagsElement= useRef()

       const handlesubmit=(event)=>{
        event.preventDefault();
        const userId=userIdElement.current.value;
        const postTitle=postTitleElement.current.value;
        const postBody=postBodyElement.current.value;
        const reactions=reactoinsElement.current.value;
        const tags=tagsElement.current.value.split(' ');


        userIdElement.current.value="";
        postTitleElement.current.value="";
        postBodyElement.current.value="";
        reactoinsElement.current.value="";
        tagsElement.current.value="";


        fetch('https://dummyjson.com/posts/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
                title:postTitle,
                 body:postBody,
                 userId:userId,
                tags:tags
          })
        })
        .then(res => res.json())
        .then(console.log);

        
        addpost(userId,postTitle,postBody,reactions,tags)
       }

    return  <form className="create-post" onSubmit={handlesubmit}>
         <div className="mb-3">
    <label htmlFor="userid"  className="form-label">Enter you userID</label>
    <input type="number" ref={userIdElement} className="form-control" id="userid" placeholder="How are you feeling today..." />
      </div>

  <div className="mb-3">
    <label htmlFor="title"  className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today..." />
      </div>

      <div className="mb-3">
    <label htmlFor="body"  className="form-label">Post content</label>
    <textarea type="text" ref={postBodyElement} className="form-control" id="body" placeholder="Tell us more about it..." />
      </div>

       <div className="mb-3">
    <label htmlFor="reactions"  className="form-label">No of reactions</label>
    <input type="text" ref={reactoinsElement} className="form-control" id="reactions" placeholder="How many people reacted to this post..." />
      </div>

       <div className="mb-3">
    <label htmlFor="tags"  className="form-label">Enter you hashtags here.</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please enter tags using space." />
      </div>
 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
}
export default CreatePost
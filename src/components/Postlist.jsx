import { useContext } from 'react'
import Post from './Post'
import { Postlist as Postlistdata } from '../store/post-liststore'
import Welcome from './Welcomemsg'
import Loadingspinner from './Loadingspinner'
  
function Postlist(){
    const {postList,fetching}= useContext(Postlistdata)

    
   return <div>  
    {fetching && <Loadingspinner/>}
  {!fetching && postList.length ===0 && <Welcome />}
    {!fetching && postList.map((post) => (
  <Post key={post.id} post={post}></Post>
))}
   </div>
}
export default Postlist
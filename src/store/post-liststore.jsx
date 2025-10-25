import { act, createContext, useEffect, useReducer, useState } from "react";

export const Postlist =createContext({
    postList: [],
    fetching:false,
    addpost:()=>{},
    deletepost:()=>{}
});

const postlistreducer=(currentpostlist,action)=>{
    let newPostlist=currentpostlist;
    if(action.type==='DELETE_POST'){
        newPostlist=currentpostlist.filter((post)=>post.id!==action.payload.postid)
    }else if(action.type==='ADD_POST'){
        newPostlist=[action.payload, ...currentpostlist]
    }else if(action.type==='ADD_INIT_POST'){
        newPostlist=action.payload.posts
    }
    return newPostlist
}
const Postlistprovider=({children})=>{
    const [postList,dispatchPostlist]=useReducer(postlistreducer,[]);
      const [fetching,setfetching]= useState(false);

    const addpost=(userId,postTitle,postBody,reactions,tags)=>{
        dispatchPostlist({
            type:"ADD_POST",
            payload:{
                 id: Date.now(),
                title:postTitle,
                 body:postBody,
                 reactions:reactions,
                 userId:reactions,
                tags:tags
            }
        })
    }

     const addinitpost=(posts)=>{
        dispatchPostlist({
            type:"ADD_INIT_POST",
            payload:{
                posts:posts
            }
        })
    }
    const deletepost=(postid)=>{
        dispatchPostlist({
            type:"DELETE_POST",
            payload:{
                postid,
            }
        })
    }


     useEffect(()=>{
    setfetching(true)
    const controller = new AbortController();
    const signal=controller.signal
      fetch('https://dummyjson.com/posts',{signal})
  .then(res => res.json())
  .then((data) => {
    addinitpost(data.posts);
    setfetching(false)
  });
    return ()=>{
      controller.abort()
    }
  },[])



    return <Postlist.Provider value={
      { 
         postList:postList,
        addpost:addpost,
        deletepost:deletepost,
        fetching
    }
    }>
        {children}
    </Postlist.Provider>

}

export default Postlistprovider
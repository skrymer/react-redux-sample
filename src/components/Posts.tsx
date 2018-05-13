import * as React from 'react';
import { Post } from '../models/Post';
import { PostForm } from './PostForm';

export interface PostsState {  
    posts: Post[];
}

export const Posts = (props: PostsState) => {    
    return  ( 
        <div>
            <PostForm />            
            <h2> Posts </h2>
            {props.posts.map((post: Post) => {
                return (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
                })
            }
        </div>
    );
};

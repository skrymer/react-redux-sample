import { Post } from '../models/Post';

export interface PostsLoadedAction {
    payload: Post[];
    type: 'GET_POSTS';
}

// Action creator
export const postsLoaded = (posts: Post[]): Action => {
    return {
        payload: posts,
        type: "GET_POSTS"        
    }
}

export interface AddPostAction {
    type: 'ADD_POST'
}

export type Action = PostsLoadedAction | AddPostAction




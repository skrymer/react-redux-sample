import { Post } from "../models/Post";
import { Action, PostsLoadedAction } from "../actions/actions";

export const posts = (state: Post[], action: Action) => {
    switch(action.type){
        case "GET_POSTS" : return handleGetPosts(state, action);
        default : return {};
    }    
}

const handleGetPosts = (state: Post[], action: PostsLoadedAction) => {
    return {
        ...state,
        posts: action.payload
    }
}
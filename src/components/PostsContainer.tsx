import * as React from 'react';
import { Posts, PostsState } from './Posts';
import { AppState } from '../store';
import { Dispatch, connect } from 'react-redux';
import { Action, postsLoaded } from '../actions/actions';
import { Post } from '../models/Post';

export interface PostsDispatchProps {
    postsLoaded: (posts: Post[]) => void;
}

class PostsContainer extends React.Component<PostsState & PostsDispatchProps, {}> {
    public render() {
        return (this.props.posts)
        ? (
            <Posts {...this.props}/>
        )
        : (
            <div>
                <h2> Loading... </h2>
            </div>
        );
    }

    public componentDidMount() {
        fetchPosts()
        .then((results) => {
            this.props.postsLoaded(results);
        })      
    }
};

const fetchPosts = (): Promise<Post[]>  =>  {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((json) => {                    
        const loadedPosts: Post[] = json.map((post: Post) => {
            return {
                body: post.body,    
                id: post.id,
                title: post.title,
                userId: post.userId,
            }
        })

        return Promise.resolve(loadedPosts);
    })        
}

const mapStateToProps = (state: AppState): PostsState => {
    return {
        posts: state.posts
    }
}

const dispatchToProps = (dispatch: Dispatch<Action>): PostsDispatchProps => {
    return {
        postsLoaded: (results: Post[]) => {
            dispatch(postsLoaded(results))
        }
    }
}

export default connect(mapStateToProps, dispatchToProps)(PostsContainer)
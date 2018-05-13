import * as React from 'react';

export const PostForm = () => {
    return (
        <div>
            <form>                
                <fieldset>
                    <div>
                        <label htmlFor="post-title">Title</label> 
                        <input name="post.title" id="post-title" type="text" />
                    </div>
                    <div>
                        <label htmlFor="post-body">Body</label> 
                        <textarea name="post.body" id="post-body"/>               
                    </div>
                    <button type="submit">
                        add post
                    </button>
                </fieldset>
            </form>
        </div>    
    );
};
import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';

const PostPage = () => {
    useProtectedPage()

    return(
        <div>Post Page</div>
    )
}

export default PostPage
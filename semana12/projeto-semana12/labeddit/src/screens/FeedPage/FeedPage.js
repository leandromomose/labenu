import React from 'react';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { BASE_URL } from '../../constants/url';
import { useRequestData } from '../../hooks/useRequestData';
import PostCard from '../../components/PostCard/PostCard';

const FeedPage = () => {
    useProtectedPage()

    const posts = useRequestData(`${BASE_URL}/posts`, [])

    console.log(posts)

    return(
        <PostCard />
    )
}

export default FeedPage
"use client"

import React, {useEffect, useState} from 'react';
import {IPosts} from "../../../../../page/posts/types/posts.interfaces";
import CreatePostLayout from "../../../../../page/posts/createPost/createPostLayout";
import {fetchData} from "../../../../../page/utils/fetchData";
import {PostPaths} from "../../../../../page/utils/constPaths";
import PostTables from "../../../../../page/posts/postTable/postTables";
import PostsStats from "../../../../../page/posts/postsStats/postsStats";


const CreatePost = async () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [posts, setPosts] = useState<IPosts | undefined>()
    const getPosts = async () => {
        setIsLoading(true)
        const data = await fetchData<IPosts>(PostPaths.POST)
        setPosts(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getPosts()
    }, []);

    return (
        <>
            <PostsStats posts={posts} isLoading={isLoading} />
            <div style={{margin: "0 0 20px 0"}}>
                <CreatePostLayout getPosts={getPosts}/>
            </div>
            <PostTables getPosts={getPosts} posts={posts}/>
        </>
    );
};

export default CreatePost;
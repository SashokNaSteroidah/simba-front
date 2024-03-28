"use client"

import React, {useEffect, useState} from 'react';
import {IPosts} from "../../../../../page/posts/types/posts.interfaces";
import CreatePostLayout from "../../../../../page/posts/createPost/createPostLayout";
import {fetchData} from "../../../../../page/utils/fetchData";
import {PostPaths, UsersPaths} from "../../../../../page/utils/constPaths";
import PostTables from "../../../../../page/posts/postTable/postTables";
import PostsStats from "../../../../../page/posts/postsStats/postsStats";
import {IUsers} from "../../../../../page/users/types/users.interfaces";
import UserStats from "../../../../../page/users/usersStats/userStats";
import UsersTable from "../../../../../page/users/usersTable/usersTable";


const CreatePost = async () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [users, setUsers] = useState<IUsers | undefined>()
    const getUsers = async () => {
        setIsLoading(true)
        const data = await fetchData<IUsers>(UsersPaths.USERS)
        setUsers(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <>
            <UserStats users={users} isLoading={isLoading} />
            <UsersTable getUsers={getUsers} users={users}/>
        </>
    );
};

export default CreatePost;
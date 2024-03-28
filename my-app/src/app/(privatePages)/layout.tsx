"use client"

import React, {useEffect} from 'react';
import {Spin} from 'antd';
import {CheckJWTWithRedirect} from "../../../page/hooks/checkJWT";

interface PrivatePagesLayout {
    children: React.ReactNode
}

const PrivatePagesLayout = ({children}: PrivatePagesLayout) => {
    const {isAdmin, isLoading} = CheckJWTWithRedirect()
    if (!isAdmin && isLoading) {
        return <Spin/>
    }
    return children

};

export default PrivatePagesLayout;
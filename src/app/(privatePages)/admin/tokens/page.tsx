"use client"

import React, {useEffect, useState} from 'react';
import {fetchData} from "../../../../../page/utils/fetchData";
import {AuthPaths} from "../../../../../page/utils/constPaths";
import {ITokens} from "../../../../../page/tokens/types/tokens.interfaces";
import TokensStats from "../../../../../page/tokens/tokensStats/tokensStats";
import TokensTable from "../../../../../page/tokens/tokensTable/tokensTable";


const TokensPage = async () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [tokens, setTokens] = useState<ITokens | undefined>()
    const getTokens = async () => {
        setIsLoading(true)
        const data = await fetchData<ITokens>(AuthPaths.TOKENS)
        setTokens(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getTokens()
    }, []);

    return (
        <>
            <TokensStats tokens={tokens} isLoading={isLoading} />
            <TokensTable tokens={tokens} getTokens={getTokens} />
        </>
    );
};

export default TokensPage;
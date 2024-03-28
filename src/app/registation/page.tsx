"use client"

import React, {useState} from 'react';
import {Button, Card, Input, message} from "antd";
import {AuthPaths} from "../../../page/utils/constPaths";
import {postData} from "../../../page/utils/postData";
import {initStateRegistration} from "../../../page/registration/types/reg.interfaces";
import {INIT_STATE_NAMES_REGISTRATION, INIT_STATE_REGISTRATION} from "../../../page/registration/consts/reg.consts";

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [userData, setUserData] = useState<initStateRegistration>(INIT_STATE_REGISTRATION)
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = event.target
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    const handleSubmit = async (): Promise<void> => {
        if (Object.values(userData).every(key => key.length < 5)) {
            messageApi.error({
                type: 'error',
                content: 'Данные не соответвуют требованиям',
            })
            return
        }
        setIsLoading(true)
        await postData({name: userData.login, password: userData.password, email: userData.email}, AuthPaths.REG)
        setIsLoading(false)
    }
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", margin: "30vh 0 0 0"}}>
            <Card>
                <h1 style={{textAlign: "center", margin: "0 auto"}}>Регистрация</h1>
                <div style={{width: "25vw", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                    <div style={{margin: "20px 0 0 0"}}>
                        <Input value={userData.login} name={INIT_STATE_NAMES_REGISTRATION.login} placeholder="login"
                               onChange={(event) => handleChange(event)}/>
                    </div>
                    <div style={{margin: "20px 0 0 0"}}>
                        <Input value={userData.email} name={INIT_STATE_NAMES_REGISTRATION.email} placeholder="email"
                               onChange={(event) => handleChange(event)}/>
                    </div>
                    <div style={{margin: "20px 0 20px 0"}}>
                        <Input.Password style={{width: "100%"}} value={userData.password}
                                        name={INIT_STATE_NAMES_REGISTRATION.password} placeholder="password"
                                        onChange={(event) => handleChange(event)}
                                        visibilityToggle={{
                                            visible: passwordVisible,
                                            onVisibleChange: setPasswordVisible
                                        }}
                        />
                    </div>
                    <Button loading={isLoading} onClick={() => handleSubmit()}>
                        Зарегистироваться
                    </Button>
                    {contextHolder}
                </div>
            </Card>
        </div>
    );
};

export default LoginPage;
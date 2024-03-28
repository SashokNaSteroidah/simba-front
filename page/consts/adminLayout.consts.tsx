import React from "react";
import {CopyOutlined, UserOutlined} from "@ant-design/icons";

export const PAGE_ITEMS = [
    {
        key: 1,
        label: "Главная",
        link: "/admin",
        icons: <UserOutlined />
    },
    {
        key: 2,
        label: "Посты",
        link: "/admin/posts",
        icons: <CopyOutlined />
    },
    {
        key: 3,
        label: "Пользователи",
        link: "/admin/users",
        icons: <UserOutlined />
    },
    {
        key: 4,
        label: "Токены",
        link: "/admin/tokens",
        icons: <UserOutlined />
    },
]
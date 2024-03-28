import {IPosts, IPost} from "../../page/posts/types/posts.interfaces";
import React from "react";
import {Card, Col, Row} from "antd";
import dayjs from "dayjs";
import "dayjs/locale/ru"
dayjs.locale('ru');
export default async function Home(){

    const fetchData = async <T,>(): Promise<T | undefined> => {
        try {
            const data = await fetch("http://localhost:3001/api/post", {
                method: "GET",
                next: {
                    revalidate: 10
                }
            })
            return await data.json()
        } catch (e) {
            console.log(e)
        }
    }
    const posts: IPosts | undefined = await fetchData<IPosts>();

    return (
            <Row>
                {posts?.map((post: IPost) => (
                    <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} style={{margin: "20px 0"}} key={post.id}>
                        <Card title={post.title} style={{width: "20vw"}}>
                            <h1 style={{textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden"}}>{post.content}</h1>
                            <h1>{dayjs(post.createdAt).locale("ru").toString()}</h1>
                            <h1>{dayjs(post.updatedAt).locale("ru").toString()}</h1>
                        </Card>

                    </Col>
                ))}
            </Row>
    );
}

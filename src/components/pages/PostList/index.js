import React, {
    useEffect
} from "react";

import { connect } from 'react-redux';

import {
    Row,
    Col,
    Card,
    Button
} from "react-bootstrap";

import {
    addPost,
    deletePost,
    getPosts,
} from '../../../redux/posts/actions';

import BaseContainer from "../../containers/BaseContainer";

const testPost = {
    "userId": 1,
    "id": 1,
    "title": "Наша тестовая запись",
    "body": "lLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, omnis!"
};

const PostList = ({
    posts,
    addPost,
    deletePost,
    getPosts,
}) => {

    useEffect(() => {
        getPosts();
    }, [getPosts])

    return (
        <BaseContainer>
            <h2>Наши посты</h2>
            <Row>
                {posts && posts.map(item => (
                    <Col key={item.id}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{ item.title }</Card.Title>
                                <Card.Text>
                                    { item.body }
                                </Card.Text>
                                <Button onClick={() => deletePost(item.id)}>
                                    Удалить
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Button onClick={() => addPost(testPost)}>
                Добавить запись
            </Button>
        </BaseContainer>
    )
}

const mapStateToProps = (state) => ({
    posts: state.posts
})

const mapDispatchToProps = (dispatch) => ({
    addPost: post => dispatch(addPost(post)),
    deletePost: id => dispatch(deletePost(id)),
    getPosts: () => dispatch(getPosts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

import React, { useState } from 'react';
import './../App.css';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Lists = ({ lists, loading, compareData }) => {
  const [compareList, setCompareList] = useState([]);
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const click = ({ id, list }) => {
    let newArr = [];
    if (checkIds(id)) {
      newArr = compareList.filter(i => i !== id);
    } else {
      newArr = [...compareList, id];
    }
    setCompareList(newArr);
    compareData(list);
  };

  const checkIds = id => (compareList.includes(id) ? true : false);

  return (
    <Row className="todo-list">
      {lists.map((list, index) => (
        <Col key={index} sm={4} md={4} lg={4}>
          <Card className="card-item">
            <img src={list.thumbnailUrl} alt="img_pic" />
            <Card.Body>
              <Card.Title>{list.title}</Card.Title>
              <Card.Text>Photo ID : {list.id}</Card.Text>
              <p className="url-id">{list.url}</p>
              <Button
                variant="primary"
                onClick={() => click({ id: list.id, list })}
              >
                {checkIds(list.id) ? 'Remove' : 'Compare'}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Lists;

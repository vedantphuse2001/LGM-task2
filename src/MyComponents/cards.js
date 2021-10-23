import React from 'react'
import "./cards.css";
import { Button } from 'react-bootstrap';
import Card from "react-bootstrap/Card";


export default function cards(props) {
    return (
        <div className="cards">
            {props.cardData.map((person, index) => {
                return (
                    <Card className="box">
                        <Card.Img  id="img" variant="top" src={person.avatar} />
                        <Card.Body id="body">
                            <Card.Text id="text">
                                <ui>
                                    <li>{person.first_name} {person.last_name}</li>
                                    <li>{person.email}</li>
                                    <Button variant="primary" id="btn">view</Button>
                                </ui>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
            }
        </div>
    )
}


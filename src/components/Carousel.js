import React from 'react';

import Card from '../components/Card';

import github from '../assets/images/github.png';
import profilepic from '../assets/images/profilepic.JPG';
import movieSearch from '../assets/images/movie-search.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Github',
                    subTitle: 'Checkout my Github',
                    imgSrc: github,
                    link: 'https://github.com/cjwerk',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Chris',
                    subTitle: 'Linkedin',
                    imgSrc: profilepic,
                    link: 'https://www.linkedin.com/in/chris-werkheiser-3375891bb/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'movieSearch',
                    subTitle: 'A social network for developers',
                    imgSrc: movieSearch,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
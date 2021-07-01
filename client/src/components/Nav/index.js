import React, { useEffect } from 'react';
import '../../index.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { idbPromise } from '../../utils/helpers';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { QUERY_CATEGORIES } from "../../utils/queries";
import { useStoreContext } from "../../utils/GlobalState";
import Category from '../Category';

function Navi(category) {
    const {
        _id,
        name
    } = category;
    const [state, dispatch] = useStoreContext();
    const { categories } = state;
    const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

    useEffect(() => {
        if (categoryData) {
            dispatch({
                type: UPDATE_CATEGORIES,
                categories: categoryData.categories
            });
            categoryData.categories.forEach(category => {
                idbPromise('categories', 'put', category);
            });
        } else if (!loading) {
            idbPromise('categories', 'get').then(categories => {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: categories
                });
            });
        }
    }, [categoryData, loading, dispatch]);

    const handleClick = id => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id
        });
    };

    return (
        <div className="navi">
            <Container>
                <Row className="d-flex justify-content-center">
                    <Navbar>
                        <Nav className="mr-auto">
                            <Nav.Link><Link className="navlink" to='/'>Home</Link></Nav.Link>
                            <NavDropdown title="Availability" id="navbarScrollingDropdown">
                                <NavDropdown.Item onClick={(selectedCategory) => { handleClick(selectedCategory._id); }}>
                                    <Link className="navlink" to={`/category/${category.name}`}>Snakes</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={(selectedCategory) => { handleClick(selectedCategory._id); }}>
                                    <Link className="navlink" to="/category">Frogs</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={(selectedCategory) => { handleClick(selectedCategory._id); }}>
                                    <Link className="navlink" to="/category">Geckos</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={(selectedCategory) => { handleClick(selectedCategory._id); }}>
                                    <Link className="navlink" to="/category">Lizards</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={(selectedCategory) => { handleClick(selectedCategory._id); }}>
                                    <Link className="navlink" to="/category">Plants</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link><Link className="navlink" to="/supplies">Supplies</Link></Nav.Link>
                            <Nav.Link><Link className="navlink" to="/feeders">Feeders</Link></Nav.Link>
                            <Nav.Link><Link className="navlink" to="/community">Community</Link></Nav.Link>
                            <Nav.Link><Link className="navlink" to="/contact">Contact</Link></Nav.Link>

                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Nav>
                    </Navbar>
                </Row>
            </Container>
        </div>
    )
}

export default Navi;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Chase Sheaff',
            headerLinks: [
                { title: 'Home', path: '/' },
                { title: 'About', path: '/about' },
                { title: 'Projects', path: '/projects' },
                { title: 'Resume', path: '/resume' },
                { title: 'Contact', path: '/contact ' }
            ],
            home: {
                title: 'Soft and Hard Skills To Bring Success',
                subTitle: 'A teacher with tenacity to get projects done',
                text: 'Lorme ipsum lorme san sinsu isaca'
            },
            about: {
                title: 'About me',
                subTitle: 'Software Engineer with an education and tech startup background. I’ve learned to be an expert working cross-functionally on many projects with successful outcomes in education and tech.  My goal is to make intuitive applications and develop along with an inclusive company.'
            },
            projects: {
                title: 'Resume',
            },
            resume: {
                title: 'Resume',
            },
            contact: {
                title: 'Let\'s chat!',
            }
        }
    }

    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar className="border-bottom">
                        <Navbar.Brand>Chase Sheaff</Navbar.Brand>
                        <Navbar.Toggle classname="border-bottom" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/projects">Projects</Link>
                                <Link className="nav-link" to="/resume">Resume</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Router>
      );
    }
}

export default App;
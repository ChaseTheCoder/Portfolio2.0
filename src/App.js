import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

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
            ],
            home: {
                title: 'Soft and Hard Skills To Bring Success',
                subTitle: 'A teacher with tenacity to get projects done',
                text: 'Lorme ipsum lorme san sinsu isaca'
            },
            about: {
                title: 'About me',
                subTitle: 'Software Engineer with an education and tech startup background. I’ve learned to be an expert working cross-functionally on many projects with successful outcomes in education and tech.  My goal is to make intuitive applications with a company that appreiates my growth mindset I\'ve devloped as a teacher.',
                subTitle2: 'I\'m focusing on developing HTML5, CSS3, JavaScript, Python, React, and React Native. I\'m honing my skills deep in this area with guidance from senior software engineers. They\'ve been telling me to become an expert in a small amount as new software engineers are not thought of as generalist.'
            },
            projects: {
                title: 'Projects',
            },
            resume: {
                title: 'Resume',
            },
        }
    }

    render() {
        return (
            <Router>
                <Container className="p-0" fluid={true}>
                    <Navbar>
                        <Navbar.Brand as={Link} to="/" >Chase Sheaff</Navbar.Brand>
                        <Navbar.Toggle classname="border-bottom" aria-controls="navbar-toggle" />
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/projects">Projects</Link>
                                <Link className="nav-link" to="/resume">Resume</Link>
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-link">
                                        <ExternalLink href="https://github.com/ChaseTheCoder"><FaGithub size="1.25em" /></ExternalLink>
                                    </li>
                                    <li class="nav-link">
                                        <ExternalLink href="https://www.linkedin.com/in/chasesheaff/"><FaLinkedin size="1.25em" /></ExternalLink>
                                    </li>
                                </ul>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    
                    <Route path="/" exact render={() => <Home title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                    <Route path="/about" exact render={() => <About title={this.state.about.title} subTitle={this.state.about.subTitle} subTitle2={this.state.about.subTitle2} />} />
                    <Route path="/projects" exact render={() => <Projects title={this.state.projects.title} />} />
                    <Route path="/resume" exact render={() => <Resume title={this.state.resume.title} />} />
                </Container>
            </Router>
      );
    }
}

export default App;
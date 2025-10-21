import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import StudentLeadership from './components/StudentLeadership';
import Projects from './components/Projects';
import Skills from './components/Skills';

// Layout styled components
const SiteWrapper = styled.div`
    width: 100vw;
    margin: 0 auto;
    font-family: 'Times New Roman', Times, serif;
    background-color: #bbdefb;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 20%; /* space for fixed footer */
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 5%;

    @media screen and (max-width: 750px) {
        flex-direction: column;
        padding-top: 15%;
    }
`;

const Main = styled.main`
    padding-top: 3%;
    background-color: #bbdefb;
    width: 70%;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }

    @media screen and (max-width: 750px) {
        width: 100%;
    }
`;

// Root component
function Root() {
    return (
        <SiteWrapper>
                <Header />
                <Container>
                    <Navigation />
                    <Main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/student-leadership" element={<StudentLeadership />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/skills" element={<Skills />} />
                        </Routes>
                    </Main>
                </Container>
                <Footer />
            </SiteWrapper>
    );
}

// Router for the app
const router = createBrowserRouter([
    { path: "*", Component: Root }
]);

// App component which returns the router provider
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
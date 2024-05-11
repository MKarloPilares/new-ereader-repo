import { Container } from 'react-bootstrap';
import {ThemeProvider} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {Stack} from 'react-bootstrap';
import shortIvid from '../../Videos/Short I.mp4'

const Short_i = ({setCurrentPage}) => {
    const test = ['1', '2'];
    return (
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint="xxs">
            <Container fluid="sm" style={{padding: '20px'}}>
                <Row>
                    <Col>
                        <h1>Short 'i'</h1>
                        Word Awareness, Syllable Blending, Syllable Counting, Rhyme.
                    </Col>
                </Row>
                <Row>
                    <Col md="auto">
                        <Stack gap={35}>
                            <div className="d-grid gap-2">
                                <Button variant="secondary" onClick={() => setCurrentPage("Short_a_SIOS")} size="lg">Sound it Out Slowly</Button>
                                <Button variant="secondary" onClick={() => setCurrentPage("Short_a_SIOQ")} size="lg" disabled>Sound it Out Quickly</Button>
                                <Button variant="secondary" onClick={() => setCurrentPage("Short_a_LMSIO")} size="lg">Let Me Sound it Out</Button>
                                <Button variant="secondary" onClick={() => setCurrentPage("Short_a_AF")} size="lg" disabled>Audio Flashcards</Button>
                                <Button variant="secondary" onClick={() => setCurrentPage("Short_a_SF")} size="lg" disabled>Silent Flashcards</Button> 
                                <Button variant="secondary" size="lg" disabled>Take the Quiz</Button>
                            </div>
                        </Stack>
                    </Col>
                    <Col md="auto">
                        <Container style={{width: '650px',height: '300px', border: '1px solid black'}}>
                            <video width="650" height="300" controls>
                                <source src={shortIvid} type="video/mp4" />
                            </video>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Button variant="secondary" style={{}} onClick={() => setCurrentPage("Lesson1")} size="lg"> Go Back </Button>
                    </Col>
                </Row>
            </Container>
        </ThemeProvider>
    );
};

export default Short_i;
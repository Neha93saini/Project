import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dasboard from './Components/Dasboard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topbar from './common/Topbar';
import Sidebar from './common/Sidebar';
import FormikForm from './Components/FormikForm/FormikForm';
import TableData from './Components/TableData';


function App() {
  return (
    <Container fluid="xl" className='container-size'>
      <Router>
        <Row>
          <Col sm={12}>
            <Topbar />
          </Col>
        </Row>
        <Row>
          <Col sm={2} >
            <Sidebar />
          </Col>
          <Col sm={10} className='dashboard-color'>
            <Routes>
              <Route path='/' element={<Dasboard />}></Route>
              <Route path='/form' element={<FormikForm />}></Route>
              <Route path='/table' element={<TableData />}></Route>
            </Routes>
          </Col>
        </Row>
      </Router>
    </Container>
  );
}

export default App;

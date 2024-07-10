import Helmet from 'react-helmet';   

import { Col, Row, Form, FloatingLabel } from 'react-bootstrap';

import Logo from '../resources/ust-logo.png'

const Login = () => {
  return (
    <>
        <Helmet> 
            <title>Login Portal</title> 
        </Helmet> 
        
        <main className="tw-font-sans container-fluid tw-h-screen tw-overflow-auto tw-bg-gradient-to-br tw-from-yellow-400 tw-via-yellow-200 tw-to-yellow-400">
          <Row className="tw-h-full px-2 align-items-center justify-content-center">
            <Col xs={11} sm={10} md={7} lg={5} xl={4} className="px-4 py-5 my-4 tw-border-2 tw-border-zinc-900 tw-rounded-xl tw-bg-zinc-100">
              <div className="tw-h-full d-flex flex-column align-items-center">
                
                <div className="d-flex flex-column align-items-center tw-mb-8 user-select-none">
                  <img src={Logo} alt="School Logo" className="tw-w-20 tw-h-tw-w-20 mb-3 tw-object-cover tw-object-center" />
                  <h2 className="m-0 tw-text-3xl fw-bolder">Student Portal</h2>
                </div>

                <form className="tw-w-5/6 tw-flex-1 d-flex flex-column tw-justify-between" action="/Dashboard" method="GET">
                  <div>
                    <FloatingLabel
                      controlId="Email"
                      label="Student Email"
                      className="mb-3"
                    >
                      <Form.Control 
                      type="email" 
                      placeholder="juan.delacruz@ust.com.ph" 
                      name="email" 
                      pattern="[a-zA-Z0-9._%+-]+@ust\.edu\.ph"
                      required/>
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="Password"
                      label="Password"
                      className="mb-4"
                    >
                      <Form.Control 
                      type="password" 
                      placeholder="Type your password" 
                      name="password"
                      required/>
                    </FloatingLabel>

                    <Form.Check 
                      type="checkbox"
                      id="remember-me"
                      label="Remember Me" 
                      name="remember-me"
                      className='mb-5'
                    />

                  </div>
                  
                  <button 
                  className="tw-w-full tw-py-3 tw-self-center tw-border tw-rounded-md tw-border-zinc-900 tw-bg-neutral-800 hover:tw-bg-neutral-700 tw-text-zinc-50 fw-semibold tw-transition-colors tw-ease-linear"
                  type="submit" 
                  >
                    Login
                  </button>
                </form>

              </div>

            </Col>
          </Row>
        </main>
    </>
  )
}

export default Login;
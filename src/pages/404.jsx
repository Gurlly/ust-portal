import Helmet from 'react-helmet';  
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <>
        <Helmet> 
            <title>Error: 404</title> 
        </Helmet> 
        
        <main className="tw-font-sans container-fluid tw-h-screen tw-overflow-auto tw-bg-gradient-to-br tw-from-yellow-400 tw-via-yellow-200 tw-to-yellow-400">
          <Row className="tw-h-full px-2 align-items-center justify-content-center">
            <Col xs={11} sm={10} md={7} lg={5} xl={4} className="px-4 py-5 my-4 tw-h-2/5 tw-min-h-96 tw-border-2 tw-border-zinc-900 tw-rounded-xl tw-bg-zinc-100">
              <div className="tw-h-full d-flex flex-column align-items-center justify-content-between">
                
                <div className="d-flex flex-column align-items-center tw-mb-8 user-select-none">
                  <h2 className="m-0 text-center display-4 fw-bolder">
                    Error 404:
                  </h2>
                  <h4 className='fs-4text-center'>Incorrect Context Path</h4>
                </div>
                <Link 
                to="/"
                className="tw-w-full text-center tw-no-underline tw-py-3 tw-self-center tw-border tw-rounded-md tw-border-zinc-900 tw-bg-neutral-800 hover:tw-bg-neutral-700 tw-text-zinc-50 fw-semibold tw-transition-colors tw-ease-linear"
                >
                  Logout
                </Link>
              </div>
            </Col>
          </Row>
        </main>
    </>
  )
}

export default Error;
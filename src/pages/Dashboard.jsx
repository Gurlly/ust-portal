import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';  
import { useState, useEffect } from 'react';

import { FaArrowRightFromBracket } from "react-icons/fa6";
import Links from '../json/links.json';
import Subjects from '../json/subjects.json';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DropdownLinks from '../components/DropdownLinks';

const Dashboard = () => {

  const [year, setYear] = useState({name: "2023-2024, 2nd Term", year: "2024"});
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const yearSubjects = Subjects.filter(subject => (
      subject.year === year.year
    ))
    setSubjects(yearSubjects);
  }, [year]);

  const sum = subjects.reduce((accumulator, subject) => {
    return accumulator + subject.finals;
  }, 0);

  return (
    <>
      <Helmet> 
          <title>Student Portal</title> 
      </Helmet> 
      
      <section className="container-fluid p-0 py-3 tw-bg-amber-400">
        <header className="container-lg">
          <Navbar/>
        </header>
      </section>
      
      <nav className="container-fluid py-2 py-xl-3 tw-bg-neutral-800">
        <div className='container-lg px-1 px-lg-4 mb-0 d-xl-none'>
          <div className='btn-group dropend'>
            <button 
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            className='p-1 fs-5 tw-text-zinc-50'>
              <FaArrowRightFromBracket />
            </button>
            <ul className="dropdown-menu p-3 tw-w-44 tw-border-2 tw-border-neutral-600 tw-bg-amber-400">
              <li className="mb-2 fw-medium tw-text-justify">
                <a href='#term-2-2' className='tw-text-neutral-800 hover:tw-text-zinc-50 tw-no-underline' onClick={() => {setYear({name: "2023-2024, 2nd Term", year: "2024"})}}>2023-24, 2nd Term</a>
              </li>
              <li className="mb-2 fw-medium tw-text-justify">
                <a href='#term-1-2' className='tw-text-neutral-800 hover:tw-text-zinc-50 tw-no-underline' onClick={() => {setYear({name: "2023-2024, 1st Term", year: "2023-b"})}}>2023-24, 1st Term</a>
              </li>
              <li className="mb-2 fw-medium tw-text-justify">
                <a href='#term-2-1' className='tw-text-neutral-800 hover:tw-text-zinc-50 tw-no-underline' onClick={() => {setYear({name: "2022-2023, 2nd Term", year: "2023-a"})}}>2022-23, 2nd Term</a>
              </li>
              <li className="fw-medium tw-text-justify">
                <a href='#term-1-1' className='tw-text-neutral-800 hover:tw-text-zinc-50 tw-no-underline' onClick={() => {setYear({name: "2022-2023, 1st Term", year: "2022"})}}>2022-23, 1st Term</a>
              </li>
            </ul>
          </div>
        </div>
        <ul className='container-lg mx-auto mb-0 px-4 d-none d-xl-flex flex-wrap align-items-center justify-content-between'>
          {
            Links.map(link => (
              link.dropdown === false 
              ? <li key={link.id}>
                  <Link to={link.id === "logout" ? "/" : `#${link.id}`} className={`tw-block fw-medium tw-no-underline ${link.id === "logout" ? "tw-text-amber-400" : "tw-text-zinc-50 hover:tw-text-zinc-300"}`}>{link.name}</Link>
                </li>
              : <DropdownLinks key={link.id} dropdownLink={link}/>
            ))
          }
        </ul>
      </nav>  

      {/** Grades Viewing Section Only */}
      <main className="container-fluid p-0 py-4 tw-bg-zinc-50">
          <div className="container-lg">
            <div className='row gx-5'>
              <aside className='d-none d-xl-block col-0 col-xl-3'>
                <div className="accordion accordion-flush tw-shadow-lg" data-bs-theme="dark" id="accordionFlushExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button 
                      className="accordion-button collapsed" 
                      type="button" 
                      data-bs-toggle="collapse" 
                      data-bs-target="#schoolTermAndYear" 
                      aria-expanded="false" 
                      aria-controls="schoolTermAndYear">
                        Academic Year and Term
                      </button>
                    </h2>
                    <div id="schoolTermAndYear" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body tw-bg-zinc-100">
                        <ol className='p-0 m-0'>
                          <li className="mb-2 fw-medium tw-text-justify">
                            <a href='#term-2-2' className='tw-text-neutral-800 hover:tw-text-amber-400 tw-no-underline' onClick={() => {setYear({name: "2023-2024, 2nd Term", year: "2024"})}}>2023-24, 2nd Term</a>
                          </li>
                          <li className="mb-2 fw-medium tw-text-justify">
                            <a href='#term-1-2' className='tw-text-neutral-800 hover:tw-text-amber-400 tw-no-underline' onClick={() => {setYear({name: "2023-2024, 1st Term", year: "2023-b"})}}>2023-24, 1st Term</a>
                          </li>
                          <li className="mb-2 fw-medium tw-text-justify">
                            <a href='#term-2-1' className='tw-text-neutral-800 hover:tw-text-amber-400 tw-no-underline' onClick={() => {setYear({name: "2022-2023, 2nd Term", year: "2023-a"})}}>2022-23, 2nd Term</a>
                          </li>
                          <li className="fw-medium tw-text-justify">
                            <a href='#term-1-1' className='tw-text-neutral-800 hover:tw-text-amber-400 tw-no-underline' onClick={() => {setYear({name: "2022-2023, 1st Term", year: "2022"})}}>2022-23, 1st Term</a>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
             
              <section className='col-12 col-xl-9'>
                <div className="row">
                  <div className="col-12 mb-4">
                    <div className="tw-min-w-max">
                      <h5 className='tw-text-orange-700'>Year and Term: <span className='tw-text-sm tw-text-neutral-800'>{year.name}</span></h5>
                      <h5 className='text-uppercase tw-text-orange-700'>College of Information and Computing Sciences</h5>
                    </div>
                  </div>

                  <div className="col-12 tw-overflow-auto user-select-none">
                    <div>
                      <table className="tw-w-full border-collapse table-auto border border-slate-400 tw-min-w-max">
                        <thead>
                          <tr>
                            <th className="text-center p-2 fw-medium tw-border tw-border-neutral-800 tw-bg-amber-400">Subject Code</th>
                            <th className="text-center p-2 fw-medium tw-border tw-border-neutral-800 tw-bg-amber-400">Subject Name</th>
                            <th className="text-center p-2 fw-medium tw-border tw-border-neutral-800 tw-bg-amber-400">Lec Units</th>
                            <th className="text-center p-2 fw-medium tw-border tw-border-neutral-800 tw-bg-amber-400">Lab Units</th>
                            <th className="text-center p-2 fw-medium tw-border tw-border-neutral-800 tw-bg-amber-400">Prelims</th>
                            <th className="text-center p-2 fw-medium tw-border tw-border-neutral-800 tw-bg-amber-400">Finals</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            subjects.map(subject => (
                              <tr key={subject.code}>
                                <td className="text-center p-2 tw-border tw-border-neutral-800 tw-bg-zinc-200">{subject.code}</td>
                                <td className="text-center p-2 tw-border tw-border-neutral-800 tw-bg-zinc-50">{subject.name}</td>
                                <td className="text-center p-2 tw-border tw-border-neutral-800 tw-bg-zinc-200">{subject.lec}</td>
                                <td className="text-center p-2 tw-border tw-border-neutral-800 tw-bg-zinc-50">{subject.lab}</td>
                                <td className="text-center p-2 tw-border tw-border-neutral-800 tw-bg-zinc-200">{subject.prelims}</td>
                                <td className="text-center p-2 tw-border tw-border-neutral-800 tw-bg-zinc-50">{subject.finals}</td>
                              </tr>
                            ))
                          }
                          <tr>
                            <td className="text-end fw-medium p-2 tw-border tw-border-neutral-800 tw-bg-amber-400" colSpan={6}>Semester Ave: {(sum / subjects.length).toFixed(3)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="col-12 tw-py-10 text-center">
                    <button className="btn btn-primary">
                      View and Print Copy of Grades
                    </button>
                  </div>

                  <div className="col-12 mb-5">
                    <div>
                      <div className="w-full px-3 py-2 tw-border tw-border-neutral-800 tw-bg-amber-400">
                        <h5 className='m-0'>Remarks:</h5>
                      </div>
                      <div className="w-full px-3 py-2 tw-bg-amber-100">
                        <h6>
                          The grade for a specific course, be it a monthly grade (first shift for College of Pharmacy) 
                          or prelim grade (second shift for College of Pharmacy), whichever is applicable, is computed based on the grading system of the college/faculty.
                        </h6>
                        <p>
                          All information pertaining to grades are managed by the Office of the Registrar. 
                          Clarifications/verifications should be coursed through the Office of the Dean.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
             
            </div>
          </div>
      </main>

      <footer className="container-fluid p-0 py-4 tw-text-zinc-50 tw-bg-neutral-800">
        <Footer/>
      </footer>

    </>
  )
}

export default Dashboard
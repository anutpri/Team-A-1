import Layout from './Layout';
import styles from './Landing.module.css';
import { useNavigate } from 'react-router-dom';

import a1 from './images/ac-1.jpg';
import a2 from './images/ac-2.jpg';
import a3 from './images/ac-3.jpg';
import a4 from './images/ac-4.jpg';
import a5 from './images/ac-5.jpg';

function Landing() {
  const navigate = useNavigate();

  const tryitBtnClick = () => {
    navigate('/Signup');
  };

  return (
    <Layout>
      {/* Add Heros from Bootstrap */}
      <div className='container my-5'>
        <div className='row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg'>
          <div className='col-lg-7 p-3 p-lg-5 pt-lg-3'>
            <h1 className='display-4 fw-bold lh-1'>What is Fitbook?</h1>
            <p className='lead'>
              Fitbook is an activity tracker web application designed for busy
              individuals who want to track their physical activity but don't
              have much time for it.
            </p>
            <div className='d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3'>
              <button
                type='button'
                onClick={tryitBtnClick}
                className={`btn btn-lg px-4 me-md-2 fw-bold ${styles.btnColor}`}
              >
                Try It!
              </button>
            </div>
          </div>
          <div className='col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg'>
            <img
              className='rounded-lg-3'
              src={
                'https://www.celebrityfitness.co.th/th/-/media/project/evolution-wellness/celebrity-fitness/south-east-asia/malaysia/blogs/killer-routine-for-sexy-sculpted-arms/tiles1.jpg'
              }
              alt='fitbook'
              style={{ width: '720px' }}
            />
          </div>
        </div>
      </div>

      {/* Add Activities form Bootstrap */}
      <div className='container px-4 py-5'>
        <h2 className='pb-2 border-bottom'>Activities</h2>
        <div
          id='carouselExampleAutoplaying'
          className={`carousel slide mt-5 ${styles.carouselLayout}`}
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active'>
              <img src={a1} className='d-inline-block w-50' alt='acitivity' />
              <div className='text w-50 ps-3 d-inline-block'>
                <span className='cat'>Bicycling</span>
                <h3>
                  A beginner-friendly workout that promotes weight loss and
                  reduces cholesterol
                </h3>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={a2} className='d-inline-block w-50' alt='acitivity' />
              <div className='text w-50 ps-3 d-inline-block'>
                <span className='cat'>Running</span>
                <h3>Running with friends: Never alone, always motivated</h3>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={a3} className='d-inline-block w-50' alt='acitivity' />
              <div className='text w-50 ps-3 d-inline-block'>
                <span className='cat'>Weight Training</span>
                <h3>Boost endurance, build strength, and improve fitness</h3>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={a4} className='d-inline-block w-50' alt='acitivity' />
              <div className='text w-50 ps-3 d-inline-block'>
                <span className='cat'>Walking</span>
                <h3>
                  Track, walk, succeed: Enjoyable strides towards your goals
                </h3>
              </div>
            </div>
            <div className='carousel-item'>
              <img src={a5} className='d-inline-block w-50' alt='acitivity' />
              <div className='text w-50 ps-3 d-inline-block'>
                <span className='cat'>Dancing</span>
                <h3>
                  Body movements with the music to express emotions and interact
                  with society
                </h3>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleAutoplaying'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleAutoplaying'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>

      {/* Add Features form Bootstrap */}
      <div className='container px-4 py-5' id='hanging-icons'>
        <h2 className='pb-2 border-bottom'>Features</h2>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
          <div className='col d-flex align-items-start'>
            <div className='icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='currentColor'
                className='bi bi-graph-up'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z'
                />
              </svg>
            </div>
            <div>
              <h3 className='fs-2'>Track & Analyze</h3>
              <p>
                Tracking and analyzing your workout activity monitoring physical
                exercise performance and progress over time.
              </p>
            </div>
          </div>
          <div className='col d-flex align-items-start'>
            <div className='icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='currentColor'
                className='bi bi-calendar-event'
                viewBox='0 0 16 16'
              >
                <path d='M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z' />
                <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
              </svg>
            </div>
            <div>
              <h3 className='fs-2'>Create & Join Events</h3>
              <p>
                Creating and joining workout events involves organizing and
                participating in planned physical exercise activities with a
                group of people.
              </p>
            </div>
          </div>
          <div className='col d-flex align-items-start'>
            <div className='icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='currentColor'
                className='bi bi-people'
                viewBox='0 0 16 16'
              >
                <path d='M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z' />
              </svg>
            </div>
            <div>
              <h3 className='fs-2'>Explore Community</h3>
              <p>
                Exploring the community of workout involves discovering and
                connecting with individuals who share an interest in physical
                exercise for motivation, support, and social interaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Footer from Bootstrap */}
      <div className='container'>
        <footer className='py-5'>
          <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
            <p>© 2023 Area 51, Inc. All rights reserved.</p>
            <ul className='list-unstyled d-flex'>
              <li className='ms-3'>
                <a className='link-dark' href='#'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                    className='bi bi-twitter'
                    viewBox='0 0 16 16'
                  >
                    <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                  </svg>
                </a>
              </li>
              <li className='ms-3'>
                <a className='link-dark' href='#'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                    className='bi bi-instagram'
                    viewBox='0 0 16 16'
                  >
                    <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
                  </svg>
                </a>
              </li>
              <li className='ms-3'>
                <a className='link-dark' href='#'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                    className='bi bi-facebook'
                    viewBox='0 0 16 16'
                  >
                    <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </Layout>
  );
}

export default Landing;

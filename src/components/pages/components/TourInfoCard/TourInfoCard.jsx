import React from "react";
import styles from './TourInfoCard.module.css'

function TourInfoCard({tourDetails}){

    if (!tourDetails) {
        return <div>Loading...</div>;
      }

    return(
        <div className= {`${styles.tourInfo} my-5 rounded`}>
                  <h4
                    className={`${styles.toursDetailsPartTitle} p-3 text-center rounded-top text-white`}
                  >
                    Tour Information
                  </h4>
                  <div className="container p-3">
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className= {`bi bi-people-fill ${styles.greenColor}`}
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
                        />
                      </svg>
                      <div className="d-flex flex-column ms-3">
                        <p className="mb-0 text-muted">Max Guests</p>
                        <h5 className="fw-bold">{tourDetails.maxGuests}</h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className= {`bi bi-people-fill ${styles.greenColor}`}
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
                        />
                      </svg>
                      <div className="d-flex flex-column ms-3">
                        <p className="mb-0 text-muted">Min Age</p>
                        <h5 className="fw-bold">{tourDetails.minAge}</h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className={`bi bi-airplane-fill ${styles.greenColor}`}
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849"
                        />
                      </svg>
                      <div className="d-flex flex-column ms-3">
                        <p className="mb-0 text-muted">Tour Location</p>
                        <h5 className="fw-bold">{tourDetails.location}</h5>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className={`bi bi-globe ${styles.greenColor}`}
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"
                        />
                      </svg>
                      <div className="d-flex flex-column ms-3">
                        <p className="mb-0 text-muted">Languages Support</p>
                        <h5 className="fw-bold">{tourDetails.language}</h5>
                      </div>
                    </div>
                  </div>
                </div>
    )
}

export default TourInfoCard
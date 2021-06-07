import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
const dashboard = () => {
  return (
    <div>
      <Header />
      <main id="main" data-aos="fade-in" style={{ marginTop: "6.25rem" }}>
        <div className="container">
          <div>
            {/* <h1 align="center">Create Subject</h1> */}
            <div className="card-body">
              <div className="row">
                <div className="col-sm-12" align="center">
                  <Link href="/tutor/addsubjects">
                    <a className="btn btn-block default-button">Add Subjects</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ======= Courses Section ======= */}
      </main>
      <section id="courses" className="courses" style={{ padding: "20px" }}>
        <h1 align="center">Subjects Handled</h1>
        <div className="container" data-aos="fade-up">
          <div className="row" data-aos="zoom-in" data-aos-delay={100}>
            <div className="col-lg-4 col-md-4 d-flex align-items-stretch">
              <div className="course-item">
                <img
                  style={{ height: "172.53px", width: 259 }}
                  src="../assets/img/course3.jpg"
                  className="img-fluid"
                  alt="..."
                />
                <div className="course-content">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h3>Class 9 - Mathematics</h3>
                  </div>
                  <a className="get-started-btn" href="#">
                    View Students
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default dashboard;
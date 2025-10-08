import React from 'react';
import './exp.css';

const Exp = () => {
    return (
        <>
        <div className="exp-container">
            <div className="exp-box">
                <h2 className="exp-h">My Experience</h2>
                <div className="exp-p">
                    <h3>MERN Stack Intern – IoStreak</h3>
                    <p className="exp-date">May 2025 – Present | Remote / Pune</p>
                    <ul className="exp-list">
                        <li>Worked on a full-stack learning platform with a 3-tier architecture (Student, Teacher, Superadmin).</li>
                        <li>Developed the Superadmin Panel from scratch – including organization management, user feedback system, and backend APIs.</li>
                        <li>Implemented JWT authentication, login system, and protected routes.</li>
                        <li>Enhanced Admin Panel: teacher course uploads, contest management, and coding problem modules.</li>
                        <li>Contributed to User Panel: progress tracking and company listing for placement applications.</li>
                        <li>Collaborated using GitHub version control and real project deployments.</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Exp;

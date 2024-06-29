
// GPACalculator.js 

import React, { useState } from 'react';
import './GPACalculator.css';
import CourseForm from './CourseForm.jsx';
import CourseList from './CourseList.jsx';

const gradePoints = {
    'A+': 10.0,
    'A': 9.0,
    'B+': 8.0,
    'B': 7.0,
    'C+': 6.0,
    'C': 5.0,
    'D': 4.0,
    'F': 0.0
};

const GPACalculator = () => {
    const [courses, setCourses] = useState([]);

    const handleAddCourse = (newCourse) => {
        setCourses([...courses, newCourse]);
    };

    const handleDeleteCourse = (index) => {
        const updatedCourses = courses.filter((course, i) => i !== index);
        setCourses(updatedCourses);
    };

    const calculateGPA = () => {
        let totalGradePoints = 0;
        let totalCreditHours = 0;

        courses.forEach((course) => {
            totalGradePoints += gradePoints[course.grade] * course.creditHours;
            totalCreditHours += course.creditHours;
        });

        return totalCreditHours === 0 ? 0 : (totalGradePoints / totalCreditHours);
    };

    return (
        <div className='container'>
            <h1>GPA Calculator</h1>
            <div className="section">
                <CourseForm onAddCourse={handleAddCourse} />
                <CourseList courses={courses} onDeleteCourse={handleDeleteCourse} calculateGPA={calculateGPA} />
            </div>
        </div>
    );
};

export default GPACalculator; 
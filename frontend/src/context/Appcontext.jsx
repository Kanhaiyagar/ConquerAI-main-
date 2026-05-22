import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [userData, setUserData] = useState(null);
  
  const [backendUrl] = useState(import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000');

  // Get authentication token
  const getToken = async () => {
    const token = localStorage.getItem('authToken');
    return token;
  };

  // Calculate course duration
  const calculateCourseDuration = (course) => {
    if (!course || !course.courseContent) return 0;
    
    let totalDuration = 0;
    course.courseContent.forEach((section) => {
      if (section.sectionContent) {
        section.sectionContent.forEach((lecture) => {
          totalDuration += lecture.lectureLength || 0;
        });
      }
    });
    return totalDuration;
  };

  // Calculate number of lectures
  const calculateNoOfLectures = (course) => {
    if (!course || !course.courseContent) return 0;
    
    let totalLectures = 0;
    course.courseContent.forEach((section) => {
      if (section.sectionContent) {
        totalLectures += section.sectionContent.length;
      }
    });
    return totalLectures;
  };

  const contextValue = {
    enrolledCourses,
    setEnrolledCourses,
    userData,
    setUserData,
    backendUrl,
    getToken,
    calculateCourseDuration,
    calculateNoOfLectures,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
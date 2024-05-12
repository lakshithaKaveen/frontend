import React from "react";
import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";

import UserNavbar from "./UserNavbar";
import Footer2 from "../Navbar_Files/Footer2";

import FullWidthCard from "../components/FullWidthCard";

function UserDashboard() {

    const userEmail = localStorage.getItem('userEmail');

    //To Store User Details
    const [userDetails, setUserDetails] = useState([])

    //To store Registered Course Details
    const [regCourseList, setRegCourses] = useState([])

    //Take the User Details from backend
    useEffect(() => {

        loadUserDetails();

    }, [])

    const loadUserDetails = async () => {
        try {
            const url = `http://localhost:9081/user/email/${userEmail}`;
            const user = await axios.get(url);

            setUserDetails(user.data);
            localStorage.setItem('userID', user.data.userId);
            loadRegCourses(user.data.userId);
        }
        catch (error) {
            console.error("Error fetching User Details:", error);
        }
    };

    const loadRegCourses = async (userId) => {
        try {

            const listOfRegCourses = await axios.get(`http://localhost:9081/user/regCourses/${userId}`);

            const mappedCourses = listOfRegCourses.data.map((course) => {

                return {
                    courseName: course.courseName,
                    category: course.courseCategory,
                    description: course.courseDescription,
                    price: course.price,
                    tutorName: course.tutor.tutorName
                };

            });

            //console.log(mappedCourses)
            setRegCourses(mappedCourses);
        }

        catch (error) {

            console.error("Error fetching Registered Courses:", error);

        }
    };

    return (
        <>
            <UserNavbar />
            <div className='pb-20 p-5 select-none'>
                {/* content goes inside this div */}

                <h1 className='text-5xl text-center'>Welcome {userDetails.firstName}👋</h1>
                <h1 className='text-2xl text-center mt-4'>Your Courses 📚</h1>

                <div>
                    {regCourseList.map((course, index) => (
                        <div className='p-2' key={index}>
                            <FullWidthCard
                                courseName={course.courseName}
                                courseCategory={course.category}
                                courseDescription={course.description}
                                price={course.price}
                                tutorName={course.tutorName}
                            />
                        </div>
                    ))}
                </div>

            </div>
            <Footer2 />
        </>
    )
}

export default UserDashboard
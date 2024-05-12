import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HomepageNavbar from "./HomepageNavbar";
import Footer from "../Navbar_Files/Footer";

import ImageSlider from "./ImageSilder";
import SlickSlider from "../components/SlickSlider";

function Homepage() {

    //Set the Courses List
    const [courseList, setCourses] = useState([])

    useEffect(() => {
        loadCourses();
    }, [])

    const loadCourses = () => {
        const courseData = [
            {
                courseID: 1,
                courseName: "Regression and Classification",
                category: "Machine Learning",
                price: 50,
                buttonText: "View"
            },
            {
                courseID: 2,
                courseName: "Programming with Python",
                category: "Programming",
                price: 10,
                buttonText: "View"
            },
            {
                courseID: 3,
                courseName: "History of Sri Lanka",
                category: "History",
                price: 18,
                buttonText: "View"
            },
            {
                courseID: 4,
                courseName: "Taxation",
                category: "Law",
                price: 12,
                buttonText: "View"
            },
            {
                courseID: 5,
                courseName: "React Fundamentals",
                category: "Web Development",
                price: 35,
                buttonText: "View"
            },
            {
                courseID: 6,
                courseName: "Biology 101",
                category: "Science",
                price: 20,
                buttonText: "View"
            },
            {
                courseID: 7,
                courseName: "English Literature",
                category: "Literature",
                price: 10,
                buttonText: "View"
            },
            {
                courseID: 8,
                courseName: "Future of AI",
                category: "Artificial Intelligence",
                price: 40,
                buttonText: "View"
            },
            {
                courseID: 9,
                courseName: "Financial Markets",
                category: "Finance",
                price: 30,
                buttonText: "View"
            },
        ];

        const mappedCourses = courseData.map((course) => {
            return {
                courseID: course.courseID,
                courseName: course.courseName,
                category: course.category,
                price: course.price,
                buttonText: course.buttonText
            };
        });

        setCourses(mappedCourses);
    };

    // Navigation of Sign Up button
    const registerPath = "/frontend/register"
    const navigate = useNavigate();

    const navigateSignup = (path) => {
        navigate(path);
    }

    // Navigation of Tutor Sign Up button
    const registerTutor = "/frontend/regtutor"

    const navigateSignupTutor = (path) => {
        navigate(path);
    }

    return (
        <>
            <HomepageNavbar />
            {/* Add p-5 to add padding */}
            <div className="pb-20 select-none">
                {/* Webpage content goes inside this div */}

                {/* Top Most section */}
                <div className="flex flex-wrap p-5 pb-0">
                    <div className="w-full md:w-1/3">
                        <h1 className="text-7xl">LEARN ANYTIME ANYWHERE</h1>
                        <p className="py-5">
                            Start, switch, or advance your career with more than 2000 courses, Professional
                            Certificates, and degrees from world-class universities.
                        </p>
                        <p className="pb-5">
                            Are you eager to embark on a journey of continuous learning and self-improvement?
                            Look no further! <b>Join LearnEdge</b>🌟
                        </p>
                        <button
                            className="animate-pulse focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            onClick={() => navigateSignup(registerPath)} >
                            Sign Up
                        </button>
                        <p className="mt-8"></p>
                    </div>
                    <div className="w-full md:w-1/3"></div>
                    <div className="w-full md:w-1/3">
                        <ImageSlider />
                    </div>
                </div>

                {/* Container: Find Courses for You  */}
                <div className="bg-gray-300 text-4xl px-5 py-6">
                    <div className="container mx-auto">
                        Find Courses for you 📚
                    </div>
                </div>

                {/* Slick Slider of courses */}
                <div className="px-5 pb-5">
                    <SlickSlider listOfItems={courseList} />
                </div>

                {/* Container: Welcome, Tutors! */}
                <div className="bg-gray-300 text-4xl px-5 py-6">
                    <div className="container mx-auto">
                        Welcome, Tutors! 👨‍🏫
                    </div>
                </div>

                {/* Content: Welcome, Tutors! */}
                <div className="text-xl p-5">
                    <p>Are you passionate about teaching and sharing your knowledge with eager learners?</p>
                    <p className="py-5">Join LearnEdge and become a part of our growing community of educators!</p>
                    <p>Why choose us? 🤔</p>
                    <ul>
                        <li className="p-2 pl-6"> ➤ Reach a global audience of motivated students eager to learn from you.</li>
                        <li className="p-2 pl-6"> ➤ Set your own schedule and teach at your convenience.</li>
                        <li className="p-2 pl-6"> ➤ Share your expertise in any subject or skill you're passionate about.</li>
                        <li className="p-2 pl-6"> ➤ Earn a competitive income doing what you love.</li>
                    </ul>
                    <p className="pt-2 mb-3">How to Get Started? 🚀</p>
                    <p>Click
                        <button
                            className="animate-pulse mx-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            onClick={() => navigateSignupTutor(registerTutor)} >
                            Sign Up as a Tutor
                        </button>
                        and create your tutor account.
                    </p>
                </div>

                {/* Other content from here */}

            </div >
            <Footer />
        </>
    )
}

export default Homepage
import { FETCH_COURSES } from './types';

function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                title: "Up and Running with Redis",
                discription: "In this course you'll learn how to work with the effecient Redis database to message key / value relationships."

            },
            {
                title: "HTML/CSS Bootcamp",
                discription: "Learn HTML5 and CSS3 from scratch, starting with the basics and finishing by building five projects from scratch."
            },
            {
                title: "UX for DEvelopers",
                discription: "This User Experience (UX) course examines how to develop a system for approaching application evelopment and enhancing the experience for users."
            }
        ]
    }
}
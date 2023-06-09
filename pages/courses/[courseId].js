import Button from "@/components/Button";
import { getSingleCourse } from "@/prisma/courses";
import { currencyConverter } from "@/utils/currency";
import React from "react";

const courseDetail = ({ course }) => {
  return (
    <div className="wrapper py-10 min-h-screen">
      <div
        style={{ backgroundImage: `url(${course.cover})` }}
        className="w-full h-[32rem] bg-no-repeat bg-cover bg-center"
      />

      <div className="mt-10 grid lg:grid-cols-2 lg:gap-10 space-y-2 lg:space-y-0">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">{course.title}</h2>
          <p>
            <span className="font-semibold">Instructor:</span>
            {course.instructor}
          </p>
          <p>
            <span className="font-semibold">Course Description:</span>
            {course.description}
          </p>
          <p>
            <span className="font-semibold">Entrolled Students:</span>
            {course.students}
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">Course Duration:</span>
            {course.duration}
          </p>
          <p>
            <span className="font-semibold">Rating:</span> {course.rating}
          </p>
          <p className="text-3xl font-semibold">
            Price: {currencyConverter(course.price)}
          </p>

          <Button
            // onClick={handleEnroll}
            href={`/checkout/${course.id}`}
            placeholder="enroll now"
            className="bg-black text-white py-3 rounded-lg w-full hover:bg-gray-700 duration-300"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default courseDetail;

export const getServerSideProps = async ({ query }) => {
  const course = await getSingleCourse(query.courseId);

  const updatedCourse = {
    ...course,
    createdAt: course.createdAt.toString(),
    updatedAt: course.updatedAt.toString(),
  };

  return {
    props: {
      course: updatedCourse,
    },
  };
};

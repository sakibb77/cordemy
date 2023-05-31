import SectionHeader from "@/components/SectionHeader";
import CourseItem from "@/components/CourseItem";
import { getAllCourses } from "@/prisma/courses";

const CoursesPage = ({ courses }) => {
  return (
    <div className="wrapper py-10">
      <SectionHeader
        span="COURSES"
        h2="Browse all courses"
        p=" Unlock your potential with Cordemy's online courses. Explore expert-led
      programs in programming, business, design, and more. Learn at your own
      pace, acquire new skills, and achieve your goals. Start your educational
      journey today with Cordemy."
      />

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {courses?.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));

  return {
    props: {
      courses: updatedCourses,
    },
  };
};

import prisma from "./prisma";
//get all courses
export const getAllCourses = async () => {
  const courses = await prisma.course.findMany({});

  return courses;
};

//get a single courses
export const getSingleCourse = async (id) => {
  const course = await prisma.course.findUnique({
    where: { id },
  });

  return course;
};

import db from "../db/data.js";

export const resolvers = {
  Query: {
    Courses() {
      return db.courses;
    },
    Course(parent, args) {
      return db.courses.find((course) => course.id === parseInt(args.id));
    },
    Tutors() {
      return db.tutors;
    },
    Tutor(parent, args) {
      return db.tutors.find((tutor) => tutor.id === parseInt(args.id));
    },
    Reviews() {
      return reviews;
    },
    Review(parent, args) {
      return db.reviews.find((review) => review.id === parseInt(args.id));
    },
  },
  Course: {
    reviews(parent) {
      return db.reviews.filter((review) => review.courseId === parent.id);
    },
    Tutor(parent) {
      return db.tutors.find((tutor) => tutor.courseId.includes(parent.id));
    },
  },
  Tutor: {
    Course(parent) {
      return db.courses.filter((course) => course.tutorsId === parent.id);
    },
  },
  Review: {
    Course(parent) {
      return db.courses.filter((course) =>
        course.reviewsId.includes(parent.id)
      );
    },
  },

  Mutation: {
    addCourse(parent, args) {
      let course = { id: (db.courses.length + 1).toString(), ...args.data };
      db.courses.push(course);
      return course;
    },
    updateCourse(parent, args) {
      db.courses = db.courses.map((course) => {
        if (course.id === parseInt(args.id)) {
          return { ...course, ...args.data };
        }

        return course;
      });

      return db.courses.find((course) => course.id === parseInt(args.id));
    },
    deleteCourse(parent, args) {
      return db.courses.filter((course) => course.id !== parseInt(args.id));
    },
  },
};

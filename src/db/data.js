let tutors = [
  {
    id: 1,
    firstName: "Giulio",
    lastName: "Crimpe",
    verified: true,
    courseId: [1],
  },
  {
    id: 2,
    firstName: "Maryrose",
    lastName: "Slany",
    verified: false,
    courseId: [2, 4],
  },
  {
    id: 3,
    firstName: "Kenneth",
    lastName: "Kenyam",
    verified: false,
    courseId: [3, 5],
  },
];

let courses = [
  {
    id: 1,
    title: "react",
    category: "Frontend Web",
    segments: 2,
    reviewsId: [1, 2],
    tutorsId: 1,
  },
  {
    id: 2,
    title: "Vue",
    category: "Frontend Web",
    segments: 2,
    reviewsId: [3, 4],
    tutorsId: 2,
  },
  {
    id: 3,
    title: "Express",
    category: "Backend Web",
    segments: 2,
    reviewsId: [5, 6],
    tutorsId: 3,
  },
  {
    id: 4,
    title: "strapi",
    category: "Backend Web",
    segments: 2,
    reviewsId: [7, 8],
    tutorsId: 2,
  },
  {
    id: 5,
    title: "Mongodb",
    category: "DB",
    segments: 2,
    reviewsId: [9, 10],
    tutorsId: 3,
  },
];

let reviews = [
  { id: 1, ratings: 2, comment: "Good", courseId: 1 },
  { id: 2, ratings: 1, comment: "Very good", courseId: 1 },
  { id: 3, ratings: 3, comment: "Nice", courseId: 2 },
  { id: 4, ratings: 4, comment: "Very Nice", courseId: 2 },
  { id: 5, ratings: 2, comment: "Okay", courseId: 3 },
  { id: 6, ratings: 3, comment: "Very okay", courseId: 3 },
  { id: 7, ratings: 1, comment: "Bad", courseId: 4 },
  { id: 8, ratings: 5, comment: "Not bad", courseId: 4 },
  { id: 9, ratings: 4, comment: "Cool", courseId: 5 },
  { id: 10, ratings: 4, comment: "Not cool", courseId: 5 },
];

export default { courses, reviews, tutors };

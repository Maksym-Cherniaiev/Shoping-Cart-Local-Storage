const listOfCourses = document.getElementById("courses-list");
listOfCourses.addEventListener("click", addCourse);

class CourseHandler {
  constructor(e) {
    this.event = e;
    this.handleCourse();
  }

  handleCourse() {
    if (this.event.target.classList.contains("add-to-cart")) {
      console.log(this.event.target);
    }
  }
}

function addCourse(e) {
  const newCourse = new CourseHandler(e);
}
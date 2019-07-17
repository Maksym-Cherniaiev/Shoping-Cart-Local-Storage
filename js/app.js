class CourseHandler {
  constructor(e) {
    this.event = e;
    this.cartBody = document.querySelector("#cart-content tbody");
    this.handleCourse();
  }

  handleCourse() {
    this.event.preventDefault();
    if (this.event.target.classList.contains("add-to-cart")) {
      const courseCard = this.event.target.parentElement.parentElement;
      console.log(courseCard);
      this.getCourseInfo(courseCard);
    }
  }

  getCourseInfo(card) {
    const courseInfo = {
      image: card.querySelector("img").src,
      title: card.querySelector("h4").textContent,
      price: card.querySelector(".u-pull-right").textContent,
      id: card.querySelector("a").getAttribute("data-id")
    }
    this.addToCart(courseInfo);
  }

  addToCart(courseObj) {
    const cartData = document.createElement("tr");
    cartData.innerHTML = `
      <tr>
        <td>
          <img src="${courseObj.image}" alt="img" width="100px">
        </td>
        <td>${courseObj.title}</td>
        <td>${courseObj.price}</td>
        <td>
          <a href="#" class="remove" data-id=${courseObj.id}>X</a>
        </td>
      </tr>
    `;
    console.log(cartData);
    this.cartBody.append(cartData);
  }
}

const listOfCourses = document.getElementById("courses-list");
listOfCourses.addEventListener("click", addCourse);

function addCourse(e) {
  const newCourse = new CourseHandler(e);
}
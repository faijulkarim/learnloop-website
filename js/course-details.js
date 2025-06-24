const params = new URLSearchParams(window.location.search);
const courseId = params.get("id");

const course = courses.find(c => c.id === courseId);

if (course) {
  const container = document.getElementById("course-details-container");

  container.innerHTML = `
    <div class="course-container-new">
      <div class="course-items-new">
        <div class="course-img-new">
          <img src="${course.image}" alt="${course.title}" />
        </div>
        <div class="course-texts-new">
          <h2 class="course-title-new">${course.title}</h2>
          <p class="course-description-new">${course.description}</p>
          <button class="level-new">${course.level}</button>
          <p class="instructor-label-new">কোর্স ইন্সট্রাক্টর</p>
          <div class="instructor-info-new">
            <img src="${course.instructor.img}" alt="instructor-img">
            <div class="instructor-details-new">
              <p class="instructor-name-new">${course.instructor.name}</p>
              <p class="instructor-bio-new">${course.instructor.bio}</p>
            </div>
          </div>
          ${course.formLink
            ? `<a href="${course.formLink}" class="register-new" target="_blank">রেজিস্ট্রেশন করুন</a>`
            : `<button class="register-new disabled" disabled>রেজিস্ট্রেশন বন্ধ</button>`}
        </div>
      </div>
      <div class="course-curriculum-new">
        <h2 class="curriculum-title-new">কোর্সের সিলেবাস</h2>
        <div class="accordion-new">
          ${course.syllabus
            .map(
              item => `
              <div class="accordion-item-new">
                <h3 class="accordion-header-new">${item.title}</h3>
                <div class="accordion-content-new">
                  <ul>${item.lessons.map(lesson => `<li>${lesson}</li>`).join("")}</ul>
                </div>
              </div>
            `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
} else {
  document.getElementById("course-details-container").innerHTML =
    "<p>Course not found!</p>";
}

document.querySelectorAll('.accordion-header-new').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    item.classList.toggle('active-new');
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.top-nav-hamburger');
  const navMenu = document.querySelector('.top-nav-nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      cards.forEach((card) => {
        if (filter === "all") {
          card.style.display = "block";
        } else if (card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const courseCards = document.querySelectorAll(".course-card");

    courseCards.forEach(card => {
        const originalPriceElement = card.querySelector(".original-price");
        const discountedPriceElement = card.querySelector(".discounted-price");
        const discountContainer = card.querySelector(".discount");

        if (originalPriceElement && discountedPriceElement && discountContainer) {
            const original = parseFloat(originalPriceElement.dataset.original);
            const discountPercent = parseFloat(discountContainer.dataset.discount);

            if (!isNaN(original) && !isNaN(discountPercent)) {
                const discounted = original - (original * (discountPercent / 100));
                discountedPriceElement.textContent = `৳ ${Math.round(discounted)}`;
            }
        }
    });
});

const courses = [
    {
        id: "0",
        title: "Python Fundamentals for Absolute Beginners",
        discount: 60,
        original: 4000,
        type: "Beginner",
        instructor: "Md. Faijul Karim",
        img: "img/python_fundamentals.png"
    },
    {
        id: "1",
        title: "Web Development for Full Stack Developer",
        discount: 60,
        original: 6000,
        type: "Advanced",
        instructor: "Md. Faijul Karim",
        img: "img/web_development.png"
    },
    {
        id: "2",
        title: "Ethical Hacking Course for Beginners",
        discount: 20,
        original: 3500,
        type: "Beginner",
        instructor: "Md. Faijul Karim",
        img: "img/Ethical_Hacking.jpeg"
    },
    {
        id: "3",
        title: "Python for Hacking",
        discount: 60,
        original: 1200,
        type: "Beginner",
        instructor: "Sakib Haque Zisan",
        img: "img/python_for_hacking.jpg"
    },
    {
        id: "4",
        title: "Self Learning Hacking Mission",
        discount: 90,
        original: 1500,
        type: "Beginner",
        instructor: "Md. Faijul Karim",
        img: "img/self_learning_hacking_mission.png"
    },
    {
        id:"5",
        title: "Web Deign Course for Beginners",
        discount: 25,
        original: 6000,
        type: "Beginner",
        instructor: "Coming Soon...",
        img: "img/web_design.jpeg"
    },
    {
        id: "6",
        title: "Android Development Course Basic to Advanced",
        discount: 30,
        original: 1000,
        type: "Advanced",
        instructor: "Coming Soon...",
        img: "img/android_development.jpeg"
    },
    {
        id: "7",
        title: "Pre-Recorded Web Pentesting Essentials Course",
        discount: 35,
        original: 7500,
        type: "Intermediate",
        instructor: "Sakib Haque Zisan",
        img: "img/web_pentesting.jpg"
    },
    {
        id: "8",
        title: "Python with Django Web Development",
        discount: 55,
        original: 3500,
        type: "Intermediate",
        instructor: "Coming Soon...",
        img: "img/python_with_django.png"
    },
    {
        id: "9",
        title: "JavaScript for Hacking",
        discount: 95,
        type: "Intermediate",
        original: 1500,
        instructor: "Firoz Mahmud",
        img: "img/javascript_for_hacking.jpg"
    },
    {
        id: "10",
        title: "Motion Graphics",
        discount: 78,
        type: "Intermediate",
        original: 4500,
        instructor: "Md. Faijul Karim",
        img: "img/motion_graphics.jpeg"
        
    },
    {
        id: "11",
        title: "AI Script for Video Editing",
        discount: 40,
        type: "Advanced",
        original: 6000,
        instructor: "Md. Faijul Karim",
        img: "img/ai_script_video_editing.jpeg"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".courses-wrapper");

    const isHomePage = window.location.pathname.includes("index") || window.location.pathname === "/" || window.location.pathname.endsWith("index.html");

    const displayedCourses = isHomePage ? courses.slice(0, 3) : courses;

    displayedCourses.forEach(course => {
        const discounted = course.original && course.discount ? course.original - (course.original * (course.discount / 100)) : course.original;
        const discountedPriceText = course.discount === 100 ? "FREE" : `৳ ${Math.round(discounted)}`;

        const card = document.createElement("div");
        card.className = "new-course-card";

        card.innerHTML = `
            <div class="img img-wrapper">
                <img src="${course.img}" alt="course image" loading="lazy">
            </div>
            <div class="content content-modern">
                <div class="title-price modern-title">
                    <h2>${course.title}</h2>
                    <span class="discounted-price">${discountedPriceText}</span>
                </div>
                <div class="title-price-discount new-discount-info">
                    <span class="discount" data-discount="${course.discount}">
                        <span>${course.discount}%</span>
                        <span>ডিসকাউন্ট</span>
                    </span>
                    <span class="original-price" data-original="${course.original}">৳ ${course.original}</span>
                </div>
                <button class="course-type modern-type">${course.type}</button>
                <p>Instructor: ${course.instructor}</p>
            </div>
            <a href="course-details.html?id=${course.id}" style="text-decoration: none;"><button class="footer-btn footer-modern">বিস্তারিত</button></a>
        `;

        wrapper.appendChild(card);
    });
});

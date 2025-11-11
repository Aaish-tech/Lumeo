        document.addEventListener("DOMContentLoaded", function () {
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");

        mobileMenuButton.addEventListener("click", function () {
          mobileMenu.classList.toggle("hidden");
          mobileMenuButton.classList.toggle("menu-open");
        });
        const mobileLinks = mobileMenu.querySelectorAll("a");
        mobileLinks.forEach((link) => {
          link.addEventListener("click", function () {
            mobileMenu.classList.add("hidden");
            mobileMenuButton.classList.remove("menu-open");
          });
        });
        setActivePage();
      });
      function setActivePage() {
        const currentPage =
          window.location.pathname.split("/").pop() || "index.html";
        const navLinks = document.querySelectorAll(".nav-link");

        navLinks.forEach((link) => {
          const linkHref = link.getAttribute("href");
          if (linkHref === currentPage) {
            link.classList.add("active-page");
          } else {
            link.classList.remove("active-page");
          }
        });
      }
      async function loadpage(baseUrl, contentHTML) {
        try {
          const pageContent = document.getElementById("page-content");
          pageContent.innerHTML = contentHTML;
          setActivePage();
          initializePageComponents();

          window.scrollTo(0, 0);

          console.log("Page content loaded successfully");
        } catch (error) {
          console.error("Error loading page content:", error);
        }
      }
      function initializePageComponents() {
        const accordionHeaders = document.querySelectorAll(".accordion-header");
        if (accordionHeaders.length > 0) {
          accordionHeaders.forEach((header) => {
            header.addEventListener("click", function () {
              const content = this.nextElementSibling;
              content.classList.toggle("hidden");
              this.classList.toggle("active");
            });
          });
        }

        const carousels = document.querySelectorAll(".carousel");
        if (carousels.length > 0) {
        }
      }

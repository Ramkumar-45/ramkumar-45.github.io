$("document").ready(() => {
  $("#menuIcon").on("click", (e) => {
    //     e.preventDefault();
    $("body").addClass("menu-opened");
  });
  $(".close").on("click", (e) => {
    //     e.preventDefault();
    $("body").removeClass("menu-opened");
  });

  $("#fullpage").pagepiling({
    navigation: false,
    menu: ".navbar-nav",

    anchors: ["home", "about", "education", "projects"],

    afterLoad: function (anchorLink, index) {
      $(".pp-section .intro").removeClass("animate");
      $(".active .intro").addClass("animate");
      Navbar();
    },
  });
  function Navbar() {
    if ($(".pp-section.active").hasClass("navbar-is-white")) {
      $(".navbar-main").addClass("navbar-main-white");
      $(".progress-nav").addClass("progress-nav-white");
      $(".scrollDown").addClass("white-bg");
    } else {
      $(".navbar-main").removeClass("navbar-main-white");
      $(".progress-nav").removeClass("progress-nav-white");
      $(".scrollDown").removeClass("white-bg");
    }
  }

  $(".navbar-nav-mobile li a").on("click", (e) => {
    //   e.preventDefault()
    $("body").removeClass("menu-opened");
    $(".navbar li a").removeClass("active");
    $(this).addClass("active");
  });
  $('[data-toggle="tooltip"]').tooltip();

  $(".project-box").on("mouseover", function () {
    var index = $(".project-box").index(this);
    $(".bg-change .section-bg")
      .removeClass("active")
      .eq(index)
      .addClass("active");
  });
});

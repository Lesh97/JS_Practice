let arrow = document.querySelectorAll(".arrow");

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e) => {
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

/** dimmed pop-up layer for porduct infomation */

//팝업 열기
function openModal(modalname) {
  console.log(modalname);
  document.get;
  $("." + modalname).fadeIn(300);
}

// 팝업 닫기
$(".popup .close").click(function () {
  $(this).parent().fadeOut(300);
});

/*$(".btn-example").click(function () {
  let $href = $(this).attr("href");
  layer_popup($href);
});
function layer_popup(el) {
  let $el = $(el); //레이어의 id를 $el 변수에 저장
  let isDim = $el.prev().hasClass("dimBg"); // dimmed 레이어를 감지하기 위한 boolean 변수
  isDim ? $(".dim-layer").fadeIn() : $el.fadeIn();

  let $elWidth = ~~$el.outerWidth(),
    $elHeight = ~~$el.outerHeight(),
    docWidth = $(document).width(),
    docHeight = $(document).height();

  if ($elHeight < docHeight || $elWidth < docWidth) {
    $el.css({
      marginTop: -$elHeight / 2,
      marginLeft: -$elWidth / 2,
    });
  } else {
    $el.css({ top: 0, left: 0 });
  }

  $el.find("a.btn-layerClose").click(function () {
    isDim ? $(".dim-layer").fadeOut() : $el.fadeOut();
    return false;
  });

  $(".layer .dimBg").click(function () {
    $(".dim-layer").fadeOut();
    return false;
  });
}*/

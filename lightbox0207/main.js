window.addEventListener("load", function () {
  let pics = this.document.querySelectorAll(".pic");
  let lightBox = this.document.querySelector("#lightBox");
  let lightBoxImg = this.document.querySelector("#lightboxImg");
  console.log(pics);
  // pics 반복문
  for (let i = 0; i < pics.length; i++) {
    // pics[i].addEventListener("click" , function(){
    //     alert(`확인 ${i}`)
    // });
    pics[i].addEventListener("click", showLightBox);
  }

  //   라이트박스 열리고 닫히는 함수
  function showLightBox() {
    // console.log(this);

    let bigLocation = this.getAttribute("data-src");
    // data-src="" (html 이미지 속성 중)
    // console.log(bigLocation);
    console.log(lightBoxImg);
    // 몇 번째의 사진을 클릭해도 링크는 1번 사진 뜸

    lightBoxImg.setAttribute("src" , bigLocation)
    console.log(lightBoxImg);
    // 각 번호의 사진을 찍으면 해당 번호 사진의 링크가 연결됨.
    lightBox.style.display = "block"
  }
  lightBox.addEventListener("click" , function(){
    lightBox.style.display = "none"
  })
});

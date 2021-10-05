const fontBtn = document.querySelector(".fontBtn");
const fontBox = document.querySelector(".font-box");

fontBtn.addEventListener("click", () => {
  fontBox.classList.toggle("open");
});

const dropdown1 = document.getElementById("sidedropdown");
const drop1 = document.querySelector(".dropdownitem");
const image1 = document.querySelector(".img");

const dropdown2 = document.getElementById("sidedropdown2");
const drop2 = document.querySelector(".dropdownitem2");
const image2 = document.querySelector(".img2");

const dropdown3 = document.getElementById("sidedropdown3");
const drop3 = document.querySelector(".dropdownitem3");
const image3 = document.querySelector(".img3");

const dropdown4 = document.getElementById("sidedropdown4");
const drop4 = document.querySelector(".dropdownitem4");
const image4 = document.querySelector(".img4");

const dropdown5 = document.getElementById("sidedropdown5");
const drop5 = document.querySelector(".dropdownitem5");
const image5 = document.querySelector(".img5");

const dropdown6 = document.getElementById("sidedropdown6");
const drop6 = document.querySelector(".dropdownitem6");
const image6 = document.querySelector(".img6");

const dropdown7 = document.getElementById("sidedropdown7");
const drop7 = document.querySelector(".dropdownitem7");
const image7 = document.querySelector(".img7");

const dropdown8 = document.querySelector("#sidedropdown8");
const drop8 = document.querySelector(".dropdownitem8");
const image8 = document.querySelector(".img8");



const dropdown10 = document.querySelector("#sidedropdown10");
const drop10 = document.querySelector(".dropdownitem10");
const image10 = document.querySelector(".img10");

const dropdown11 = document.querySelector("#sidedropdown11");
const drop11 = document.querySelector(".dropdownitem11");
const image11 = document.querySelector(".img11");

const dropdown12 = document.querySelector("#sidedropdown12");
const drop12 = document.querySelector(".dropdownitem12");
const image12 = document.querySelector(".img12");

const dropdown13 = document.querySelector("#sidedropdown13");
const drop13 = document.querySelector(".dropdownitem13");
const image13 = document.querySelector(".img13");

const dropdown14 = document.querySelector("#sidedropdown14");
const drop14 = document.querySelector(".dropdownitem14");
const image14 = document.querySelector(".img14");

const dropdown15 = document.querySelector("#sidedropdown15");
const drop15 = document.querySelector(".dropdownitem15");
const image15 = document.querySelector(".img15");

const dropdown16 = document.querySelector("#sidedropdown16");
const drop16 = document.querySelector(".dropdownitem16");
const image16 = document.querySelector(".img16");

const dropdown17 = document.querySelector("#sidedropdown17");
const drop17 = document.querySelector(".dropdownitem17");
const image17 = document.querySelector(".img17");

const dropdown18 = document.querySelector("#sidedropdown18");
const drop18 = document.querySelector(".dropdownitem18");
const image18 = document.querySelector(".img18");

const dropdown19 = document.querySelector("#sidedropdown19");
const drop19 = document.querySelector(".dropdownitem19");
const image19 = document.querySelector(".img19");

const dropdown20 = document.querySelector("#sidedropdown20");
const drop20 = document.querySelector(".dropdownitem20");
const image20 = document.querySelector(".img20");

const dropdown21 = document.querySelector("#sidedropdown21");
const drop21 = document.querySelector(".dropdownitem21");
const image21 = document.querySelector(".img21");

const dropdown22 = document.querySelector("#sidedropdown22");
const drop22 = document.querySelector(".dropdownitem22");
const image22 = document.querySelector(".img22");

const dropdown23 = document.querySelector("#sidedropdown23");
const drop23 = document.querySelector(".dropdownitem23");
const image23 = document.querySelector(".img23");

const dropdown24 = document.querySelector("#sidedropdown24");
const drop24 = document.querySelector(".dropdownitem24");
const image24 = document.querySelector(".img24");

function collapse(dropdown, drop, image) {
  dropdown.addEventListener("click", () => {
    drop.classList.toggle("triger");
    image.classList.toggle("i");
  });
}
collapse(dropdown1, drop1, image1);
collapse(dropdown2, drop2, image2);
collapse(dropdown3, drop3, image3);
collapse(dropdown4, drop4, image4);
collapse(dropdown5, drop5, image5);
collapse(dropdown6, drop6, image6);
collapse(dropdown7, drop7, image7);
collapse(dropdown8, drop8, image8);
collapse(dropdown10, drop10, image10);
collapse(dropdown11, drop11, image11);
collapse(dropdown12, drop12, image12);
collapse(dropdown13, drop13, image13);
collapse(dropdown14, drop14, image14);
collapse(dropdown15, drop15, image15);
collapse(dropdown16, drop16, image16);
collapse(dropdown17, drop17, image17);
collapse(dropdown18, drop18, image18);
collapse(dropdown19, drop19, image19);
collapse(dropdown20, drop20, image20);
collapse(dropdown21, drop21, image21);
collapse(dropdown22, drop22, image22);
collapse(dropdown23, drop23, image23);
collapse(dropdown24, drop24, image24);












const sideBtn = document.querySelectorAll("#sideBtn");
const blockPerent = document.querySelectorAll("#blockPerent");

sideBtn.forEach(function (btn) {
  // console.log(btn.getAttribute("data-name"));
  btn.addEventListener("click", (event) => {
    //   event.stopPropagation();
    const eventATR = findParetDiv(event.target, "sideBtn");
    sideBtn.forEach(function (btn) {
      const btnAtr = btn.getAttribute("data-name");
      if (btnAtr === eventATR) {
        btn.classList.add("active-sidebar");
        //button acton
      } else {
        //button noaction\
        btn.classList.remove("active-sidebar");
      }
    });
    blockPerent.forEach(function (p) {
      const pAtr = p.getAttribute("data-name");
      if (pAtr === eventATR) {
        p.style.top = "0rem"
        p.style.opacity = "1";
        p.style.visibility = "visible";
      } else {
        p.style.opacity = "0";
        p.style.visibility = "hidden";
        p.style.top = "-10rem"

      }
    });
  });
});

function findParetDiv(dom, id) {
  if (dom.id === id) {
    return dom.getAttribute("data-name");
  } else {
    return findParetDiv(dom.parentNode, id);
  }
}
const hiddensidebar = document.querySelector("#hiddensidebar");
const hiddensidebar2 = document.querySelector("#hiddensidebar2");
const hiddensidebar3 = document.querySelector("#hiddensidebar3");
const hiddensidebar4 = document.querySelector("#hiddensidebar4");
const hiddensidebar5 = document.querySelector("#hiddensidebar5");



function openHiddenbar() {
  hiddensidebar.style.right = "0rem";
  hiddensidebar5.style.right = "-50rem";

  hiddensidebar2.style.right = "-50rem";
  hiddensidebar3.style.right = "-50rem";
  hiddensidebar4.style.right = "-50rem";

}

function openHiddenbar2() {
  hiddensidebar2.style.right = "0rem";
  hiddensidebar5.style.right = "-50rem";

  hiddensidebar.style.right = "-50rem";
  hiddensidebar3.style.right = "-50rem";
  hiddensidebar4.style.right = "-50rem";

}

function openHiddenbar3() {
  hiddensidebar3.style.right = "0rem";

  hiddensidebar2.style.right = "-50rem";
  hiddensidebar.style.right = "-50rem";
  hiddensidebar4.style.right = "-50rem";

}

function openHiddenbar4() {
  hiddensidebar4.style.right = "0rem";
  hiddensidebar5.style.right = "-50rem";

  hiddensidebar3.style.right = "-50rem";

  hiddensidebar2.style.right = "-50rem";
  hiddensidebar.style.right = "-50rem";
}

function openHiddenbar5() {
  hiddensidebar5.style.right = "0rem";

  hiddensidebar4.style.right = "-50rem";

  hiddensidebar3.style.right = "-50rem";

  hiddensidebar2.style.right = "-50rem";
  hiddensidebar.style.right = "-50rem";
}

function closeHiddenbar() {
  hiddensidebar.style.right = "-50rem";
}

function closeHiddenbar2() {
  hiddensidebar2.style.right = "-50rem";
}

function closeHiddenbar3() {
  hiddensidebar3.style.right = "-50rem";
}

function closeHiddenbar4() {
  hiddensidebar4.style.right = "-50rem";
}

function closeHiddenbar5() {
  hiddensidebar5.style.right = "-50rem";
}
//1
const togggleslider = document.querySelector(".togggleslider");
const widthLableOption = document.querySelector(".width-lable-option");
const morewidthLableOption = document.querySelector(".more-width-lable-option");

togggleslider.addEventListener("click", () => {
  widthLableOption.classList.toggle("hide");
  morewidthLableOption.classList.toggle("open-lableOption");
});

// 2
const toggle = document.querySelector(".toggle");
const widthLableOption2 = document.querySelector(".width-border-option");
const morewidthLableOption2 = document.querySelector(
  ".more-border-lable-option"
);

toggle.addEventListener("click", () => {
  widthLableOption2.classList.toggle("hide");
  morewidthLableOption2.classList.toggle("open-BorderOption");
  drop5.style.maxHeight = "495px";
});

// 3
const toggle2 = document.querySelector(".toggle2");
const paddingLableOption = document.querySelector(".padding-lable-option");
const morePaddingLableOption = document.querySelector(
  ".more-padding-lable-option"
);

toggle2.addEventListener("click", () => {
  paddingLableOption.classList.toggle("hide");
  morePaddingLableOption.classList.toggle("open-padding-option");
  drop6.style.maxHeight = "605px";
});

const dropdown9 = document.querySelector("#sidedropdown9");
const drop9 = document.querySelector(".dropdownitem9");

dropdown9.addEventListener("click", () => {
  drop9.classList.toggle("triger");
});

// 4
const toggle4 = document.querySelector(".toggle4");
const paddingLableOption2 = document.querySelector(".padding-lable-option2");
const morePaddingLableOption2 = document.querySelector(
  ".more-padding-lable-option2"
);

toggle4.addEventListener("click", () => {
  paddingLableOption2.classList.toggle("hide");
  morePaddingLableOption2.classList.toggle("open-padding-option");
  drop3.style.maxHeight = "165px";
});
// 5
const toggle5 = document.querySelector(".toggle5");
const paddingLableOption5 = document.querySelector(".padding-lable-option5");
const morepaddingOption5 = document.querySelector(
  ".more-padding-lable-option5"
);

toggle5.addEventListener("click", () => {
  paddingLableOption5.classList.toggle("hide");
  morepaddingOption5.classList.toggle("open-BorderOption");
  drop19.style.maxHeight = "600px";
});

// 6
const toggle6 = document.querySelector(".toggle6");
const widthLableOption6 = document.querySelector(".width-border-option6");
const morewidthLableOption6 = document.querySelector(".more-border-lable-option6");

toggle6.addEventListener("click", () => {
  widthLableOption6.classList.toggle("hide");
  morewidthLableOption6.classList.toggle("open-BorderOption");
  drop19.style.maxHeight = "600px";
});


// 6
const toggleRange = document.querySelector(".toggleRange");
const dropAutoWidth = document.querySelector(".dropAutoWidth");

toggleRange.addEventListener("click", () => {
  dropAutoWidth.classList.toggle("triger");

});

// 7
const toggle7 = document.querySelector(".toggle7");
const paddingLableOption7 = document.querySelector(".padding-lable-option7");
const morepaddingOption7 = document.querySelector(
  ".more-padding-lable-option7"
);

toggle7.addEventListener("click", () => {
  paddingLableOption7.classList.toggle("hide");
  morepaddingOption7.classList.toggle("open-BorderOption");
  drop20.style.maxHeight = "600px";
});
// 8
const toggleRange2 = document.querySelector(".toggleRange2");
const dropAutoWidth2 = document.querySelector(".dropAutoWidth2");

toggleRange2.addEventListener("click", () => {
  dropAutoWidth2.classList.toggle("triger");

});
// 9
const toggle9 = document.querySelector(".toggle9");
const paddingLableOption9 = document.querySelector(".padding-lable-option9");
const morepaddingOption9 = document.querySelector(
  ".more-padding-lable-option9"
);

toggle9.addEventListener("click", () => {
  paddingLableOption9.classList.toggle("hide");
  morepaddingOption9.classList.toggle("open-BorderOption");
  drop12.style.maxHeight = "600px";
});

const mainBody = document.querySelector(".main-body");
const mainCol = document.querySelectorAll(".main-col")
const blockbilderL = document.querySelectorAll(".blockbilder-l")

const blockbilder1 = blockbilderL[0];
const blockbilderLLast = blockbilderL[blockbilderL.length - 1]



const blockbuilderLayerControl = document.querySelectorAll(".blockbuilder-layer-control")
const yourWebsite = document.querySelector(".yourWebsite")
const imgBox = document.querySelector(".imgbox");

const contentText = document.querySelector(".content-text");

const desktopBtn = document.querySelectorAll(".desktopBtn");
const mobileBtn = document.querySelectorAll(".mobileBtn");

const acDesktopBtn = document.querySelector(".acDesktopBtn");
const acMobileBtn = document.querySelector(".acMobileBtn");

const notification = document.querySelectorAll(".notification");


function mobileVersion() {
  mainBody.style.width = "50%";
  mainCol.forEach((e) => {

    mainBody.style.backgroundColor = "transparent"
    e.style.width = "320px";
  });

  blockbilderL.forEach((e) => {

    blockbilder1.style.borderTop = "1px #999 dashed";
    blockbilderLLast.style.borderBottom = "1px #999 dashed";
    e.style.borderLeft = "1px #999 dashed";
    e.style.borderRight = "1px #999 dashed";

  })

  blockbuilderLayerControl.forEach((b) => {
    b.style.left = "40%";
  });

  yourWebsite.style.width = "90px";
  yourWebsite.style.height = "23px";
  imgBox.style.width = "78px"
  imgBox.style.height = "21px";
  contentText.style.fontSize = "14px"

  mobileBtn.forEach((m) => {
    m.classList.add("nav-active")
  })

  desktopBtn.forEach((d) => {
    d.classList.remove("nav-active")
  })

  acMobileBtn.style.fill = "#DEDFE1";
  acDesktopBtn.style.fill = "#777777";

  notification.forEach((n) => {
    n.style.display = "block"
  })


}

function desktopVersion() {
  mainBody.style.width = "100%";
  mainCol.forEach((e) => {
    e.style.width = "600px";
    mainBody.style.backgroundColor = "#f9f9f9"


  })
  blockbilderL.forEach((e) => {

    blockbilder1.style.borderTop = "1px transparent dashed";
    blockbilder1.style.borderTop = "";
    blockbilderLLast.style.borderBottom = "none";
    e.style.borderLeft = "none";
    e.style.borderRight = "none";
    // e.style.border = "none";


  })

  blockbuilderLayerControl.forEach((b) => {
    b.style.left = "45%";
  })
  yourWebsite.style.width = "180px";
  yourWebsite.style.height = "45px";

  desktopBtn.forEach((d) => {
    d.classList.add("nav-active")
  })
  mobileBtn.forEach((m) => {
    m.classList.remove("nav-active")
  })

  acMobileBtn.style.fill = "#777777";
  acDesktopBtn.style.fill = "#DEDFE1";

  notification.forEach((n) => {
    n.style.display = "none"
  })
}
//console.log('oioioiuoiuoiu');

/*
document.getElementById("scroll_mariana").addEventListener("scroll", myFunction);

function myFunction() {
  console.log('oioioioiioi');
}*/


var wrapper1 = document.getElementById('wrapper1');
var wrapper1H = wrapper1.offsetHeight;

var wrapper2 = document.getElementById('wrapper2');
var wrapper2H = wrapper2.offsetHeight + wrapper1H;

var wrapper3 = document.getElementById('wrapper3');
var wrapper3H = wrapper3.offsetHeight + wrapper2H;

var wrapper4 = document.getElementById('wrapper4');
var wrapper4H = wrapper4.offsetHeight + wrapper3H;

var wrapper5 = document.getElementById('wrapper5');
var wrapper5H = wrapper5.offsetHeight + wrapper4H;

var wrapper6 = document.getElementById('wrapper6');
var wrapper6H = wrapper6.offsetHeight + wrapper5H;

var wrapper7 = document.getElementById('wrapper7');
var wrapper7H = wrapper7.offsetHeight + wrapper6H;

var wrapper8 = document.getElementById('wrapper8');
var wrapper8H = wrapper8.offsetHeight + wrapper7H;

var wrapper9 = document.getElementById('wrapper9');
var wrapper9H = wrapper9.offsetHeight + wrapper8H;

var wrapper10 = document.getElementById('wrapper10');
var wrapper10H = wrapper10.offsetHeight + wrapper9H;

var wrapper11 = document.getElementById('wrapper11');
var wrapper11H = wrapper11.offsetHeight + wrapper10H;

var wrapper12 = document.getElementById('wrapper12');
var wrapper12H = wrapper12.offsetHeight + wrapper11H;

console.log(wrapper1H);
console.log(wrapper2H);
console.log(wrapper3H);
console.log(wrapper4H);
console.log(wrapper5H);
console.log(wrapper6H);
console.log(wrapper7H);
console.log(wrapper8H);
console.log(wrapper9H);
console.log(wrapper10H);
console.log(wrapper11H);
console.log(wrapper12H);

window.addEventListener('resize', getHeight);

function getHeight() {
    
  wrapper1 = document.getElementById('wrapper1');
  wrapper1H = wrapper1.offsetHeight;
    
  wrapper2 = document.getElementById('wrapper2');
  wrapper2H = wrapper2.offsetHeight + wrapper1H;
    
  wrapper3 = document.getElementById('wrapper3');
  wrapper3H = wrapper3.offsetHeight + wrapper2H;
    
  wrapper4 = document.getElementById('wrapper4');
  wrapper4H = wrapper4.offsetHeight + wrapper3H;
    
  wrapper5 = document.getElementById('wrapper5');
  wrapper5H = wrapper5.offsetHeight + wrapper4H;
    
  wrapper6 = document.getElementById('wrapper6');
  wrapper6H = wrapper6.offsetHeight + wrapper5H;
    
  wrapper7 = document.getElementById('wrapper7');
  wrapper7H = wrapper7.offsetHeight + wrapper6H;
    
  wrapper8 = document.getElementById('wrapper8');
  wrapper8H = wrapper8.offsetHeight + wrapper7H;
    
  wrapper9 = document.getElementById('wrapper9');
  wrapper9H = wrapper9.offsetHeight + wrapper8H;
    
  wrapper10 = document.getElementById('wrapper10');
  wrapper10H = wrapper10.offsetHeight + wrapper9H;
    
  wrapper11 = document.getElementById('wrapper11');
  wrapper11H = wrapper11.offsetHeight + wrapper10H;
    
  wrapper12 = document.getElementById('wrapper12');
  wrapper12H = wrapper12.offsetHeight + wrapper11H;
    
//  console.log(wrapper0H);
//  console.log(wrapper1H);
//  console.log(wrapper2H);
//  console.log(wrapper3H);
};


window.onscroll = function () {
  changeBG2()
  changeBG3()
  changeBG4()
  changeBG5()
  changeBG6()
  changeBG7()
  changeBG8()
  changeBG9()
  changeBG10()
  changeBG11()
  changeBG12()
};


function changeBG2() {
  if (document.body.scrollTop >= wrapper1H || document.documentElement.scrollTop > wrapper1H) {
    console.log('oioi');
    document.getElementById("bg2").classList.remove('none');
  } else {
    document.getElementById("bg2").classList.add('none');
  }
}

function changeBG3() {
  if (document.body.scrollTop >= wrapper2H || document.documentElement.scrollTop >= wrapper2H) {
//    console.log('oioi');
    document.getElementById("bg3").classList.remove('none');
  } else {
    document.getElementById("bg3").classList.add('none');
  }
}

function changeBG4() {
  if (document.body.scrollTop >= wrapper3H || document.documentElement.scrollTop >= wrapper3H) {
//    console.log('oioi');
    document.getElementById("bg4").classList.remove('none');
  } else {
    document.getElementById("bg4").classList.add('none');
  }
}

function changeBG5() {
  if (document.body.scrollTop >= wrapper4H || document.documentElement.scrollTop >= wrapper4H) {
//    console.log('oioi');
    document.getElementById("bg5").classList.remove('none');
  } else {
    document.getElementById("bg5").classList.add('none');
  }
}

function changeBG6() {
  if (document.body.scrollTop >= wrapper5H || document.documentElement.scrollTop >= wrapper5H) {
//    console.log('oioi');
    document.getElementById("bg6").classList.remove('none');
  } else {
    document.getElementById("bg6").classList.add('none');
  }
}

function changeBG7() {
  if (document.body.scrollTop >= wrapper6H || document.documentElement.scrollTop >= wrapper6H) {
//    console.log('oioi');
    document.getElementById("bg7").classList.remove('none');
  } else {
    document.getElementById("bg7").classList.add('none');
  }
}

function changeBG8() {
  if (document.body.scrollTop >= wrapper7H || document.documentElement.scrollTop >= wrapper7H) {
//    console.log('oioi');
    document.getElementById("bg8").classList.remove('none');
  } else {
    document.getElementById("bg8").classList.add('none');
  }
}

function changeBG9() {
  if (document.body.scrollTop >= wrapper8H || document.documentElement.scrollTop >= wrapper8H) {
//    console.log('oioi');
    document.getElementById("bg9").classList.remove('none');
  } else {
    document.getElementById("bg9").classList.add('none');
  }
}

function changeBG10() {
  if (document.body.scrollTop >= wrapper9H || document.documentElement.scrollTop >= wrapper9H) {
//    console.log('oioi');
    document.getElementById("bg10").classList.remove('none');
  } else {
    document.getElementById("bg10").classList.add('none');
  }
}

function changeBG11() {
  if (document.body.scrollTop >= wrapper10H || document.documentElement.scrollTop >= wrapper10H) {
//    console.log('oioi');
    document.getElementById("bg11").classList.remove('none');
  } else {
    document.getElementById("bg11").classList.add('none');
  }
}

function changeBG12() {
  if (document.body.scrollTop >= wrapper11H || document.documentElement.scrollTop >= wrapper11H) {
//    console.log('oioi');
    document.getElementById("bg12").classList.remove('none');
  } else {
    document.getElementById("bg12").classList.add('none');
  }
}

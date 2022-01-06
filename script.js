function decrease1() {
  trapHeight = 
  getComputedStyle(document.documentElement).getPropertyValue('--trap-height');
  document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight,10)-10)+"px");
}
// function decrease2() {
//   trapHeight = 
//   getComputedStyle(document.documentElement).getPropertyValue('--trap-height');
//   document.documentElement.style.setProperty('--trap-height',(parseInt(trapHeight,10)-10)+"px");
// }

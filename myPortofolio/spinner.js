// document.onreadystatechange = function() {
//     if (document.readyState !== "complete") {
//         document.querySelector(
//           "body").style.visibility = "hidden";
//         document.querySelector(
//           "#spinner").style.visibility = "visible";
//     } else {
//         document.querySelector(
//           "#spinner").style.display = "none";
//         document.querySelector(
//           "body").style.visibility = "visible";
//     }
// };

window.addEventListener('load' , () => {
    const spinner= document.querySelector('.spinner');

    spinner.classList.add('spinner-hidden');
    spinner.addEventListener('transitioned' , () => {
        document.body.removeChild('spinner');
    })
})
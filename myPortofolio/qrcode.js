let qrBox = document.querySelector('.qr-box')
let qrImage = document.querySelector('.qr-image');
let qrInput = document.querySelector('.qr-input');

function generateQR() {
    if(qrInput.value.length > 0) {
qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrInput.value;
qrInput.value = '';
 qrBox.classList.add('show-img');
}
}


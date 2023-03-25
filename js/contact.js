function SendInfo() {
    hoten = $("#txtHoTen").val();
    email = $("#txtEmail").val();
    sdt = $("#txtPhone").val();
    donvi = $("#txtDonVi").val();
    noidung = $("#txtNoiDung").val();
    capt = $("#txtCaptcha").val();

    //check hoten
    if (hoten == ""||hoten==null||hoten==undefined) {
        alert("Vui long nhap ho ten")
        return;
    }

    //check mail
    if (validateEmail(email) === false || (validateEmail(email) === null) ) {
        alert("Email khong hop le!")
        return;
    }

    //check phone
    if (validatePhone(sdt) === false || (validatePhone(sdt) === null)) {
        alert("Dien thoai khong hop le!")
        return;
    }
    
    //don vi
    if (donvi == ""||donvi==null||donvi==undefined) {
        alert("Vui long nhap don vi")
        return;
    }

    //noi dung
    if (noidung == ""||noidung==null||noidung==undefined) {
        alert("Vui long nhap noi dung")
        return;
    }

    //captcha
    if (capt == ""||capt==null||capt==undefined) {
        alert("Vui long nhap ma captcha")
        return;
    }


   
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePhone = (sdt) => {
    return String(sdt)
        .toLowerCase()
        .match(
            /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
        );
};
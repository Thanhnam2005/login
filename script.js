document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi

    // Lấy giá trị username và password từ form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Kiểm tra thông tin đăng nhập
    if (username === 'Camly' && password === '01032005') {
        // Nếu thông tin đăng nhập chính xác, chuyển hướng người dùng đến trang chính
        window.location.href = 'https://12985b4f-fff2-4842-8516-989813e5f348-00-1jsr4ktl3yuoz.sisko.replit.dev/'; // Thay 'trang-chinh.html' bằng đường dẫn đến trang chính của bạn
    } else {
        // Nếu thông tin đăng nhập không chính xác, hiển thị thông báo lỗi
        alert('Sai thông tin, vui lòng nhập lại.');
    }
});

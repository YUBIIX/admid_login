// script.js

// ฟังก์ชันสำหรับล็อกอิน
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/admin.html';
        } else {
            alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        }
    })
    .catch(error => console.error('Error:', error));
});

// ฟังก์ชันสำหรับอัปเดตเนื้อหา
document.getElementById('update-content-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const content = document.getElementById('content').value;

    fetch('/api/update-content', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('อัปเดตเนื้อหาสำเร็จ');
        } else {
            alert('เกิดข้อผิดพลาดในการอัปเดต');
        }
    })
    .catch(error => console.error('Error:', error));
});

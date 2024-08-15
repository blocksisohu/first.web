// فتح وإغلاق نافذة الاتصال
document.getElementById('contactBtn').onclick = function() {
    document.getElementById('contactModal').style.display = 'block';
}

document.querySelector('.close').onclick = function() {
    document.getElementById('contactModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('contactModal')) {
        document.getElementById('contactModal').style.display = 'none';
    }
}

// تفعيل التمرير السلس
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

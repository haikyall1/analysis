
document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

function toggleSolution(id) {
    const solution = document.getElementById(id);
    const content = solution.querySelector('.hidden-content');
    content.classList.toggle('show');
}


window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']]
    }
};


    document.addEventListener('DOMContentLoaded', function() {
        // Toggle breathing animation
        const breathingBtn = document.querySelector('.bg-indigo-600');
        if(breathingBtn) {
            breathingBtn.addEventListener('click', function() {
                const circle = document.querySelector('.breathing-animation');
                if(circle) {
                    circle.classList.toggle('animate-pulse');
                    this.textContent = this.textContent.includes('Start') ? 
                        'Stop Exercise' : 'Start 2-Minute Exercise';
                }
            });
        }
        
        // Mock file upload interaction
        const uploadBtn = document.querySelector('.bg-purple-100');
        if(uploadBtn) {
            uploadBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('File upload dialog would open here in the full application');
            });
        }
    });
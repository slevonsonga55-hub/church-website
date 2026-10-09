document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================
       1. HAMBURGER MOBILE MENU TOGGLE
       ========================================================= */
    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile drawer when a navigation link is clicked
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }


    /* =========================================================
       2. LIPA NA M-PESA COPY TO CLIPBOARD
       ========================================================= */
    const copyMpesaBtn = document.getElementById('copy-mpesa-btn');
    
    if (copyMpesaBtn) {
        copyMpesaBtn.addEventListener('click', () => {
            // Replace '123456' with your exact Till / Paybill number if needed
            const mpesaDetails = "Till Number: 123456 (WESO JOOUST FELLOWSHIP)"; 
            
            navigator.clipboard.writeText(mpesaDetails).then(() => {
                const originalText = copyMpesaBtn.innerText;
                copyMpesaBtn.innerText = "Copied to Clipboard! ✓";
                copyMpesaBtn.style.backgroundColor = "#22c55e"; // Success Green feedback
                
                setTimeout(() => {
                    copyMpesaBtn.innerText = originalText;
                    copyMpesaBtn.style.backgroundColor = ""; // Reset button style
                }, 2500);
            }).catch(err => {
                console.error("Failed to copy M-Pesa details: ", err);
            });
        });
    }

});
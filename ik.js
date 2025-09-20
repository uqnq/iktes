document.addEventListener("DOMContentLoaded", function() {
    const floatingAd = `
        <style>
            .floating-ad {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background: #f9f9f9;
                border-top: 1px solid #ddd;
                padding: 6px 10px;
                font-size: 14px;
                text-align: center;
                z-index: 9999;
                font-family: Arial, sans-serif;
            }
            .floating-ad a {
                color: #0073e6;
                font-weight: bold;
                text-decoration: none;
            }
            .floating-ad a:hover {
                text-decoration: underline;
            }
            .floating-ad .close-btn {
                position: absolute;
                right: 10px;
                top: 2px;
                border: none;
                background: none;
                font-size: 16px;
                color: #666;
                cursor: pointer;
            }
        </style>
        <div class="floating-ad" id="floating-ad">
            <button class="close-btn" onclick="document.getElementById('floating-ad').remove();">&times;</button>
            Mau harga <strong>NolRupiah.com</strong>? 
            <a href="https://nolrupiah.com" target="_blank" rel="nofollow noopener">Klik sini</a>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", floatingAd);
});

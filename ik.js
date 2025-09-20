document.addEventListener("DOMContentLoaded", function() {
    const adHtml = `
        <style>
            .floating-ad {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 10px; /* tinggi pasti */
                background: #333;
                color: #fff;
                font-size: 13px;
                line-height: 30px; /* teks pas tengah */
                text-align: center;
                z-index: 9999;
                font-family: Arial, sans-serif;
            }
            .floating-ad a {
                color: #4fc3f7;
                text-decoration: none;
                font-weight: bold;
            }
            .floating-ad .close-btn {
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                border: none;
                background: none;
                color: #aaa;
                font-size: 16px;
                cursor: pointer;
            }
        </style>
        <div class="floating-ad" id="floating-ad">
            Mau harga <strong>NolRupiah.com</strong>? 
            <a href="https://nolrupiah.com" target="_blank" rel="nofollow noopener">Klik sini</a>
            <button class="close-btn" onclick="document.getElementById('floating-ad').remove();">&times;</button>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", adHtml);
});


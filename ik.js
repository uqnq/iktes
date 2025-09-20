document.addEventListener("DOMContentLoaded", function() {
    const adHtml = `
        <style>
            .floating-ad {
                position: fixed;
                bottom: 0;
                left: 0;
                width: 100%;
                background: #333; /* warna gelap supaya kontras */
                color: #fff;
                font-size: 13px; /* lebih kecil */
                padding: 4px 10px; /* vertical padding 4px, horizontal 10px */
                text-align: center;
                z-index: 9999;
                font-family: Arial, sans-serif;
                box-shadow: 0 -1px 3px rgba(0,0,0,0.3);
            }
            .floating-ad a {
                color: #4fc3f7;
                text-decoration: none;
                font-weight: bold;
            }
            .floating-ad a:hover {
                text-decoration: underline;
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
            <button class="close-btn" aria-label="Tutup" onclick="document.getElementById('floating-ad').remove();">&times;</button>
            Mau harga <strong>NolRupiah.com</strong>? 
            <a href="https://nolrupiah.com" target="_blank" rel="nofollow noopener">Klik sini</a>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", adHtml);
});

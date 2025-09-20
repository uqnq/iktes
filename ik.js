const floatingAdScript = `
    <style>
        .floating-ad-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background-color: #f1f1f1;
            padding: 10px;
            text-align: center;
            box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
        }
        .floating-ad-container .ad-content a {
            color: #0073e6;
            font-weight: bold;
            text-decoration: none;
        }
        .floating-ad-container .ad-content a:hover {
            text-decoration: underline;
        }
        .close-ad-button {
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 20px;
            font-weight: bold;
            color: #555;
            background: none;
            border: none;
            cursor: pointer;
        }
    </style>
    <div class="floating-ad-container" id="floating-ad">
        <button class="close-ad-button" onclick="document.getElementById('floating-ad').style.display='none';">
            &times;
        </button>
        <div class="ad-content">
            <p>
                Mau harga <strong>NolRupiah.com</strong>? 
                <a href="https://nolrupiah.com" target="_blank" rel="noopener">Klik Sini</a>
            </p>
        </div>
    </div>
`;

document.body.insertAdjacentHTML('beforeend', floatingAdScript);

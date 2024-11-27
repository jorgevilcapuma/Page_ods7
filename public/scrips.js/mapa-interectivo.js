// Inicialización del mapa
var map = L.map('map').setView([0, 0], 2); // Coordenadas iniciales centradas en el mapa mundial

// Capa de mapas de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Variable para almacenar el país seleccionado
var selectedCountryLayer = null;

// Función para obtener la imagen del país (puedes sustituir con URLs de imágenes específicas)
function getCountryImage(countryName) {
    const countryImages = {
        // América
        "United States": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
        "Canada": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
        "Brazil": "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
        "Argentina": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
        "Mexico": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg",
        "Chile": "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
        "Peru": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg",
        "Colombia": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg",
        "Venezuela": "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg",
        "Ecuador": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg",
        "Bolivia": "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg",
        "Paraguay": "https://tse2.mm.bing.net/th?id=OIP.ndvVqZhlkZLcoHTCYdm5kQHaEU&pid=Api&P=0&h=180",
        "Uruguay": "https://tse3.mm.bing.net/th?id=OIP.HhuzFykcZ1FUg--hM6e03gHaEK&pid=Api&P=0&h=180",
        "Guatemala": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg",
        "Honduras": "https://tse1.mm.bing.net/th?id=OIP.JBQLTCb9HJuywFDMvPmrsQHaEx&pid=Api&P=0&h=180",
        "El Salvador": "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_El_Salvador.svg",
        "Nicaragua": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg",
        "Costa Rica": "https://cdn.pixabay.com/photo/2016/06/03/18/33/flag-1434063_960_720.jpg",
        "Panama": "https://tse4.mm.bing.net/th?id=OIP.r1C6g0_i-RyPzMDUs2IAywHaEy&pid=Api&P=0&h=180",
        "Belize": "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
        "Cuba": "https://tse1.mm.bing.net/th?id=OIP.RkUNxtIA5gPlGinO04XyBAHaEo&pid=Api&P=0&h=180",
        "Jamaica": "https://tse2.mm.bing.net/th?id=OIP.wJH0cUOQb0RUIN9wcfnzsgHaEK&pid=Api&P=0&h=180",
        "Dominican Republic": "https://tse4.mm.bing.net/th?id=OIP.7Df93kpL4xvyLy7P1GBBJQHaEo&pid=Api&P=0&h=180",
        "Saint Lucia": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Saint_Lucia.svg",
        "Barbados": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Barbados.svg",
        "Trinidad and Tobago": "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg",
        "Guyana": "https://tse3.mm.bing.net/th?id=OIP.2LMNbf2b9nGBXHe98YiZqwHaEc&pid=Api&P=0&h=180",
        "Suriname": "https://tse3.mm.bing.net/th?id=OIP.ilmlwcvYBK8Ubcez-_milwHaE8&pid=Api&P=0&h=180",
        "Greenland": "https://tse2.mm.bing.net/th?id=OIP.j6Mjk6C1cmDsPYdwsjKfIQHaEL&pid=Api&P=0&h=180",
        // Europa
        "Albania": "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg",
        "Portugal": "https://tse2.mm.bing.net/th?id=OIP.MkV6i0qJXQv1ob0TfiRuAQHaER&pid=Api&P=0&h=180",
        "Andorra": "https://upload.wikimedia.org/wikipedia/commons/1/1c/Flag_of_Andorra.svg",
        "Armenia": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg",
        "Austria": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
        "Azerbaijan": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg",
        "Belarus": "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Belarus.svg",
        "Belgium": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
        "Bosnia and Herzegovina": "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_Bosnia_and_Herzegovina.svg",
        "Bulgaria": "https://upload.wikimedia.org/wikipedia/commons/7/70/Flag_of_Bulgaria.svg",
        "Croatia": "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg",
        "Cyprus": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Cyprus.svg",
        "Czech Republic": "https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_the_Czech_Republic.svg",
        "Denmark": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg",
        "Estonia": "https://upload.wikimedia.org/wikipedia/commons/5/5f/Flag_of_Estonia.svg",
        "Finland": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
        "France": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        "Georgia": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg",
        "Germany": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
        "Greece": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
        "Hungary": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
        "Iceland": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg",
        "Ireland": "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
        "Italy": "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
        "Kazakhstan": "https://upload.wikimedia.org/wikipedia/commons/d/d8/Flag_of_Kazakhstan.svg",
        "Kosovo": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Kosovo.svg",
        "Latvia": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg",
        "Liechtenstein": "https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_Liechtenstein.svg",
        "Lithuania": "https://upload.wikimedia.org/wikipedia/commons/1/10/Flag_of_Lithuania.svg",
        "Luxembourg": "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Luxembourg.svg",
        "Malta": "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_Malta.svg",
        "Moldova": "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg",
        "Monaco": "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Monaco.svg",
        "Montenegro": "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Montenegro.svg",
        "Netherlands": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
        "North Macedonia": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_North_Macedonia.svg",
        "Norway": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Norway.svg",
        "Poland": "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg",
        "Portugal": "https://tse2.mm.bing.net/th?id=OIP.MkV6i0qJXQv1ob0TfiRuAQHaER&pid=Api&P=0&h=180",
        "Romania": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
        "Russia": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
        "San Marino": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_San_Marino.svg",
        "Serbia": "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Serbia.svg",
        "Slovakia": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg",
        "Slovenia": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Flag_of_Slovenia.svg",
        "Spain": "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
        "Sweden": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg",
        "Switzerland": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
        "Turkey": "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
        "Ukraine": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
        "United Kingdom": "https://tse2.mm.bing.net/th?id=OIP.W9BIHANV_2rSuJYidY5mUQHaFP&pid=Api&P=0&h=180",
        "Uzbekistan": "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg",
        "Vatican City": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Vatican_City.svg",
        "Norway": "https://tse3.mm.bing.net/th?id=OIP.uQIWwCJoJAPAIpcH1-uZ6wHaEK&pid=Api&P=0&h=180",
        "Bulgaria": "https://tse4.mm.bing.net/th?id=OIP.kbg7LQW8YhXmsvfahWyJxwHaEK&pid=Api&P=0&h=180",
        "Iraq": "https://tse3.mm.bing.net/th?id=OIP.uWy5bD8lQSDQVgNjFtPExwHaE8&pid=Api&P=0&h=180",
        "Saudi Arabia": "https://tse3.mm.bing.net/th?id=OIP.PGp6StQ17Vp64sSW_ZXKXQHaEK&pid=Api&P=0&h=180",
        "Iran": "https://tse2.mm.bing.net/th?id=OIP._vhqJJQUiRw9En27BAyD3gHaFC&pid=Api&P=0&h=180",
        "Pakistan": "https://tse4.mm.bing.net/th?id=OIP.R-JkwatZKWTSdm491rc8FwHaEK&pid=Api&P=0&h=180",
        "NTurkmenistan": "https://tse4.mm.bing.net/th?id=OIP.46jXTwDInPwry4olXcmYXAHaE8&pid=Api&P=0&h=180",
        "Papua New Guinea": "https://tse3.mm.bing.net/th?id=OIP.uQIWwCJoJAPAIpcH1-uZ6wHaEK&pid=Api&P=0&h=180",
        "Turkmenistan": "https://tse2.mm.bing.net/th?id=OIP.pXnjhkAsRwDlOFbtLF6lyQAAAA&pid=Api&P=0&h=180",
        "Yemen": "https://tse4.explicit.bing.net/th?id=OIP.XjqyHH1vC5oidUAdHBgkNgHaE7&pid=Api&P=0&h=180",
        "Oman": "https://tse1.mm.bing.net/th?id=OIP.cQI1R-Y3b19aBEeXCOFGNgHaEL&pid=Api&P=0&h=180",
        "Norway": "https://tse3.mm.bing.net/th?id=OIP.uQIWwCJoJAPAIpcH1-uZ6wHaEK&pid=Api&P=0&h=180",
        "Norway": "https://tse3.mm.bing.net/th?id=OIP.uQIWwCJoJAPAIpcH1-uZ6wHaEK&pid=Api&P=0&h=180",


        // Asia & Oceanía
        "China": "https://astelus.com/wp-content/uploads/2024/04/el-color-rojo-en-la-bandera-de-china-1152x759.png.webp",
        "India": "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
        "Japan": "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
        "South Korea": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_South_Korea.svg",
        "Indonesia": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg",
        "Pakistan": "https://tse4.mm.bing.net/th?id=OIP.R-JkwatZKWTSdm491rc8FwHaEK&pid=Api&P=0&h=180",
        "Bangladesh": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg",
        "Philippines": "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg",
        "Vietnam": "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg",
        "Thailand": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg",
        "Myanmar": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg",
        "Nepal": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Flag_of_Nepal.svg",
        "Sri Lanka": "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg",
        "Maldives": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Flag_of_Maldives.svg",
        "Afghanistan": "https://tse2.mm.bing.net/th?id=OIP.6NNNdMAwecFt95Vo2_BKYAHaEc&pid=Api&P=0&h=180",
        "Bhutan": "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg",
        "Mongolia": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg",
        "Australia": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
        "New Zealand": "https://upload.wikimedia.org/wikipedia/commons/3/3f/Flag_of_New_Zealand.svg",
        "Fiji": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Fiji.svg",
        "Papua New Guinea": "https://tse4.mm.bing.net/th?id=OIP.irINcpz7EPRgqx1vUX93ZwHaEK&pid=Api&P=0&h=180",
        "Solomon Islands": "https://upload.wikimedia.org/wikipedia/commons/3/39/Flag_of_the_Solomon_Islands.svg",
        "Vanuatu": "https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Vanuatu.svg",
        "Samoa": "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Samoa.svg",
        "Tonga": "https://upload.wikimedia.org/wikipedia/commons/2/24/Flag_of_Tonga.svg",
        "Kiribati": "https://upload.wikimedia.org/wikipedia/commons/d/dc/Flag_of_Kiribati.svg",
        "Tuvalu": "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Tuvalu.svg",
        "Nauru": "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",
        "Papua New Guinea": "https://tse4.mm.bing.net/th?id=OIP.irINcpz7EPRgqx1vUX93ZwHaEK&pid=Api&P=0&h=180",
        "Solomon Islands": "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_the_Solomon_Islands.svg",
        "Vanuatu": "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Vanuatu.svg",
        "Samoa": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Flag_of_Samoa.svg",
        "Tonga": "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Tonga.svg",
        "Kiribati": "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_Kiribati.svg",
        "Marshall Islands": "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_the_Marshall_Islands.svg",
        "Nauru": "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg",
        "Tuvalu": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg",
        "Wallis and Futuna": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Flag_of_Wallis_and_Futuna.svg",
        "American Samoa": "https://upload.wikimedia.org/wikipedia/commons/5/53/Flag_of_American_Samoa.svg",
        "French Polynesia": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Flag_of_French_Polynesia.svg",
        "New Caledonia": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Flag_of_New_Caledonia.svg",
        "Pitcairn Islands": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_the_Pitcairn_Islands.svg",
        "Cook Islands": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Flag_of_the_Cook_Islands.svg",
        "Niue": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Flag_of_Niue.svg",
        "Tokelau": "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Tokelau.svg",
        "Belarus": "https://tse2.mm.bing.net/th?id=OIP.ge1-KK9f89r_fAMiPIQIDgHaEK&pid=Api&P=0&h=180",
        "Kazakhstan": "https://tse1.mm.bing.net/th?id=OIP.Y1rCNm5SLmf5A8QXVTy2gAHaEo&pid=Api&P=0&h=180",
        "Egipto": "https://tse2.mm.bing.net/th?id=OIP.6lzgbZLrf1EC4woN59QXYwHaE4&pid=Api&P=0&h=180",
        // África
        "Sudáfrica": "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
        "Nigeria": "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg",
        "Egypt": "https://tse2.mm.bing.net/th?id=OIP.6lzgbZLrf1EC4woN59QXYwHaE4&pid=Api&P=0&h=180",
        "Kenia": "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg",
        "Etiopía": "https://tse2.mm.bing.net/th?id=OIP.2LxDFLm7CrhFk7GnjEwDgAHaEK&pid=Api&P=0&h=180",
        "Argelia": "https://tse2.mm.bing.net/th?id=OIP._k3PCqDyfC6rreXg3bPfUQHaEc&pid=Api&P=0&h=180",
        "Marruecos": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg",
        "Túnez": "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg",
        "Senegal": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
        "Ghana": "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg",
        "Costa de Marfil": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Cote_d%27Ivoire.svg",
        "Uganda": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg",
        "Tanzania": "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg",
        "Angola": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg",
        "Zimbabwe": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg",
        "Mozambique": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg",
        "Ruanda": "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg",
        "Libya": "https://tse4.explicit.bing.net/th?id=OIP.vzYife_ikCA9inr4GxTlNwHaEK&pid=Api&P=0&h=180",
        "Algeria": "https://tse3.mm.bing.net/th?id=OIP.CtQDShfDMgINw2gTmegMJQHaEK&pid=Api&P=0&h=180",
        "Mali": "https://tse2.mm.bing.net/th?id=OIP.e0NpumGCQNfdvfrwU1OKfwHaEK&pid=Api&P=0&h=180",
        "Mauritania": "https://tse1.mm.bing.net/th?id=OIP.8N0irA4p8T6AYALXX2m9GAHaE7&pid=Api&P=0&h=180",
        "Democratic Republic of the Congo": "https://tse1.mm.bing.net/th?id=OIP.bGtO3gSVEVJyFIwhBQwczAHaEK&pid=Api&P=0&h=180",
        "Sudan": "https://tse4.mm.bing.net/th?id=OIP.6pMBd3EwsrYIdwEaXqwM8wHaEK&pid=Api&P=0&h=180",
        "Namibia": "https://tse4.mm.bing.net/th?id=OIP.kI_PPxbFQxDTsEnPPoSk3QHaE8&pid=Api&P=0&h=180",
        "South Africa": "https://tse1.mm.bing.net/th?id=OIP.KazcoXv7gyrLWx7jynjihQHaE8&pid=Api&P=0&h=180",
        "Botswana": "https://tse1.mm.bing.net/th?id=OIP.-FGdTgmLeAg2RooT1-UXtAHaEK&pid=Api&P=0&h=180",
        "Madagascar": "https://tse2.mm.bing.net/th?id=OIP.KQiX7grdd3FxY6UIKaOZogHaD4&pid=Api&P=0&h=180",
        "Niger": "https://tse1.mm.bing.net/th?id=OIP.zinSFwdV4mnxmiLbRIwEuwHaEo&pid=Api&P=0&h=180",
        "Chad": "https://tse3.mm.bing.net/th?id=OIP.ia1LY65PxZLeoLSznm9HJgHaEK&pid=Api&P=0&h=180",
        "Central African Republic": "https://tse2.mm.bing.net/th?id=OIP.5kIk9GVyXiXCNI8b8rMzywHaE6&pid=Api&P=0&h=180",
        "United Republic of Tanzania": "https://tse1.mm.bing.net/th?id=OIP.jG_lRuPPLKh-zFhh7glVVAHaE8&pid=Api&P=0&h=180",
        "Somalia": "https://tse1.mm.bing.net/th?id=OIP._xc9BdmMP7Mao4hvLcRdhgHaEK&pid=Api&P=0&h=180",
        "Ethiopia": "https://tse2.mm.bing.net/th?id=OIP.2LxDFLm7CrhFk7GnjEwDgAHaEK&pid=Api&P=0&h=180",
        "Kenya": "https://tse2.mm.bing.net/th?id=OIP.0qoA1MDuDAOeM7QQUksv-gHaEK&pid=Api&P=0&h=180",
        "South Sudan": "https://tse3.mm.bing.net/th?id=OIP.zEMh2lvMIBKQkAoxjvnQbwHaDt&pid=Api&P=0&h=180",
        "Cameroon": "https://tse1.mm.bing.net/th?id=OIP.Iv5G-VgHbNLaWT1rm4QUgQHaEK&pid=Api&P=0&h=180",
        "Ivory Coast": "https://tse3.mm.bing.net/th?id=OIP.Os5Pz5d-VPLykCOiT2ycvQHaFj&pid=Api&P=0&h=180",
        "Gabon": "https://tse3.mm.bing.net/th?id=OIP.cESZjp5nb5Qld32nu1XiYgHaE4&pid=Api&P=0&h=180",
        "Guinea": "https://tse1.mm.bing.net/th?id=OIP.s6FfBH43-5toNmRf28bthQHaEo&pid=Api&P=0&h=180",
        "Liberia": "https://tse1.mm.bing.net/th?id=OIP.hBNSlSp_Z1Kytl_KFgbw8wHaE7&pid=Api&P=0&h=180",
        "Laos": "https://tse4.mm.bing.net/th?id=OIP.t8ieD_h9W37N2WuXWiG_KgHaEx&pid=Api&P=0&h=180",
    };

    return countryImages[countryName] || "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg";
}

// Crear el mapa base con OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var geojsonLayer; // Variable para la capa GeoJSON
var selectedCountryLayer = null; // Variable para almacenar el país seleccionado
var activeODS = null; // Almacenar el estado del ODS activo

// Función para mostrar información del país con su imagen y enlace
function showCountryInfo(lat, lon, countryName, countryLink) {
    const countryImageUrl = getCountryImage(countryName); // Obtener la imagen del país

    const infoContent = ` 
<div class="country-info">
    <img src="${countryImageUrl}" alt="Imagen del país" class="country-image" />
    <div class="country-name">${countryName}</div>
    <div>Aún quedan desafíos importantes en los ODS.</div>
    <a href="${countryLink}" target="_blank">Ver más sobre ${countryName}</a>
</div>
`;
    L.popup()
        .setLatLng([lat, lon])
        .setContent(infoContent)
        .openOn(map);
}

// Función para restablecer el estilo del país previamente seleccionado
function resetCountryStyle() {
    if (selectedCountryLayer) {
        geojsonLayer.resetStyle(selectedCountryLayer);
        selectedCountryLayer = null;
    }
}

// Función para generar un color aleatorio
function getRandomColor() {
    const colors = ['#FF5722', '#4CAF50', '#3F51B5', '#FFC107', '#009688', '#E91E63'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Función para cambiar el color de todos los países según el ODS seleccionado
function changeCountryColorsForODS(odsColor) {
    geojsonLayer.eachLayer(function (layer) {
        layer.setStyle({
            color: odsColor, // Color del borde del país
            fillColor: odsColor, // Color de relleno del país
            weight: 2,
            fillOpacity: 0.7
        });
    });
}

// Cargar capa GeoJSON y configurar eventos
geojsonLayer = L.geoJson(null, {
    style: function (feature) {
        return {
            color: "#4CAF50", // Color base para todos los países
            weight: 1,
            fillOpacity: 0.5
        };
    },
    onEachFeature: function (feature, layer) {
        layer.on({
            click: function (e) {
                const countryName = feature.properties.name;
                const latlng = e.latlng;
                const countryLink = `https://en.wikipedia.org/wiki/${countryName.replace(/\s+/g, '_')}`;

                resetCountryStyle(); // Restablecer el estilo del país previamente seleccionado

                const randomColor = getRandomColor(); // Generar un color aleatorio

                // Cambiar el estilo del país seleccionado
                layer.setStyle({
                    color: randomColor,
                    fillColor: randomColor,
                    weight: 2,
                    fillOpacity: 0.7
                });

                selectedCountryLayer = layer; // Almacenar la capa seleccionada
                showCountryInfo(latlng.lat, latlng.lng, countryName, countryLink); // Mostrar la información del país
            }
        });
    }
}).addTo(map);

// Cargar datos GeoJSON
fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
    .then(response => response.json())
    .then(data => {
        geojsonLayer.addData(data);
    });

// Función para agregar marcador en el mapa
function addMarker(lat, lng, title, description) {
    var popupContent = `<h3>${title}</h3><p>${description}</p>`;
    L.marker([lat, lng]).addTo(map).bindPopup(popupContent).openPopup();
    map.setView([lat, lng], 5); // Cambiar la vista del mapa al marcador seleccionado
}

// Función para alternar el color del mapa basado en el ODS seleccionado
function toggleMapColor(ods, color) {
    if (activeODS === ods) {
        // Restablecer al color original
        geojsonLayer.eachLayer(function (layer) {
            layer.setStyle({
                fillColor: "#ccc",  // Color de relleno original
                fillOpacity: 0.7,
                weight: 2,
                color: "#555"  // Color del borde original
            });
        });
        activeODS = null;  // Restablecer el ODS activo
    } else {
        // Cambiar el color de todos los países según el ODS seleccionado
        changeCountryColorsForODS(color);
        activeODS = ods;  // Establecer el ODS activo
    }
}

// Función para reiniciar completamente el mapa
document.getElementById('reset-map').addEventListener('click', function () {
    // Restablecer la vista inicial del mapa (coordenadas y zoom)
    map.setView([51.505, -0.09], 2);

    // Eliminar todas las capas añadidas (marcadores, etc.)
    addedLayers.forEach(function (layer) {
        map.removeLayer(layer);
    });

    // Limpiar el array de capas añadidas
    addedLayers = [];
});



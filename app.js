const rockSongs = [
    { title: "Guns'n Roses - Sweet Child O' Mine", link: "https://www.youtube.com/watch?v=1w7OgIMMRc4" },
    { title: "AC/DC - Back in Black", link: "https://www.youtube.com/watch?v=pAgnJDJN4VA" },
    { title: "Linkin Park - In The End", link: "https://www.youtube.com/watch?v=eVTXPUF4Oz4" },
    { title: "Pink Floyd - Another Brick in The Wall", link: "https://www.youtube.com/watch?v=YR5ApYxkU-U" },
    { title: "Led Zeppelin - Immigrant Song", link: "https://www.youtube.com/watch?v=RlNhD0oS5pk" },
    { title: "Europe - The Final Countdown", link: "https://www.youtube.com/watch?v=9jK-NcRmVcw" },
    { title: "Coldplay - Yellow", link: "https://www.youtube.com/watch?v=yKNxeF4KMsY" },
    { title: "System of a Down - Chop Suey", link: "https://www.youtube.com/watch?v=CSvFpBOe8eY" }
];

const reggaeSongs = [
    { title: "Bob Marley & the Wailers - I Shot The Sheriff", link: "https://www.youtube.com/watch?v=oe2hdbft5-U" },
    { title: "Jimmy Cliff - Many Rivers To Cross", link: "https://www.youtube.com/watch?v=doWWHQDWe2k" },
    { title: "Johnny Nash - I Can See Clearly Now", link: "https://www.youtube.com/watch?v=b0cAWgTPiwM" },
    { title: "Bob Marley & the Wailers - No Woman, No Cry", link: "https://www.youtube.com/watch?v=IT8XvzIfi4U" },
    { title: "Ken Boothe - Everything I Own", link: "https://www.youtube.com/watch?v=JZHTg26q1Js" },
    { title: "The Melodians - Rivers Of Babylon", link: "https://www.youtube.com/watch?v=BXf1j8Hz2bU" },
    { title: "The Paragons - The Tide Is High", link: "https://www.youtube.com/watch?v=SQXqkiKXiHc" }
];

const salsaSongs = [
    { title: "Willie Colón y Rubén Blades - Pedro Navaja", link: "https://www.youtube.com/watch?v=ACD_wuxuMzg" },
    { title: "La Sonora Ponceña - Fuego en el 23", link: "https://www.youtube.com/watch?v=jqg5n6TtO-U" },
    { title: "Joe Arroyo - La rebelión", link: "https://www.youtube.com/watch?v=KNcaw0Ye69g" },
    { title: "El Gran Combo de Puerto Rico - Sin salsa no hay paraíso", link: "https://www.youtube.com/watch?v=lNJnM_AJxys" },
    { title: "Grupo Niche - Cali pachanguero", link: "https://www.youtube.com/watch?v=7KxkMLAZlzw" },
    { title: "Celia Cruz y Johnny Pacheco - Toro mata", link: "https://www.youtube.com/watch?v=0VRkExBOoYg" },
    { title: "Oscar D’Leon - Llorarás", link: "https://www.youtube.com/watch?v=gxlB1B9emDc" }
];

const vallenatoSongs = [
    { title: "Rafael Orozco - La creciente", link: "https://www.youtube.com/watch?v=-g1O38ycIVc" },
    { title: "Diomedes Díaz - Amarte más no pude", link: "https://www.youtube.com/watch?v=SKV6zQyeJeo" },
    { title: "Binomio de Oro - Un osito dormilón", link: "https://www.youtube.com/watch?v=SloTFWbshwE" },
    { title: "Los Embajadores Vallenatos - La del santo cachón", link: "https://www.youtube.com/watch?v=O8axbKX1JVo" },
    { title: "Los Hermanos Zuleta - Mi hermano y yo", link: "https://www.youtube.com/watch?v=hPt3duzE1Y8" },
    { title: "Los Gigantes Del Vallenato - Me mata la melancolía", link: "https://www.youtube.com/watch?v=WyueNqPNUrQ" },
    { title: "Los Chiches Vallenatos - Tierra Mala", link: "https://www.youtube.com/watch?v=--mwc9RIYw4" },
    { title: "Los Inquietos del Vallenato - Entrégame Tu Amor", link: "https://www.youtube.com/watch?v=kQiBJcz2udA" }
];

const songRecommend = document.getElementById("song")
const rockBtn = document.getElementById("rock")
const reggaeBtn = document.getElementById("reggae")
const salsaBtn = document.getElementById("salsa")
const vallenatoBtn = document.getElementById("vallenato")

function displaySong(song) {
    songRecommend.innerHTML = `<a href="${song.link}" target="_blank">${song.title}</a>`
}

rockBtn.addEventListener("click", () => {
    const randomSong = Math.floor(Math.random () * rockSongs.length)
    displaySong(rockSongs[randomSong])
})

reggaeBtn.addEventListener("click", () => {
    const randomSong = Math.floor(Math.random () * reggaeSongs.length)
    displaySong(reggaeSongs[randomSong])
})

salsaBtn.addEventListener("click", () => {
    const randomSong = Math.floor(Math.random () * salsaSongs.length)
    displaySong(salsaSongs[randomSong])
})


vallenatoBtn.addEventListener("click", () => {
    const randomSong = Math.floor(Math.random () * vallenatoSongs.length)
    displaySong(vallenatoSongs[randomSong])
})

const music = new Audio('songs/KhesariLalYadav.mp3');
// music.play();
const songs = [
    {
        id: 1,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1.png",


    },
    {
        id: 2,
        songName: `
        Raate_Diya_Butake_-_राते_दिया_बुताके_-_Superhit_Film_Song_-_Bhojpuri_Hit_Song_2023(256k)<br>
                        <div class="subtitle">Pawan​ Singh</div>`,
        poster: "thumbnail/2.png",


    },
    {
        id: 3,
        songName: `Patari_Kamariya___#Shivani_Singh___Aastha_Singh___Bhojpuri_Hit(256k)<br>
                        <div class="subtitle">Pawan​ Singh</div>`,
        poster: "thumbnail/3.png",


    },
    {
        id: 4,
        songName: `Dilwa_Le_Gaile_Raja​_-_दिलवा_ले_गईले_राजा___#Neelam_Giri___#Shilpi_Raj___Bhojpuri_Song_2022<br>
                        <div class="subtitle">Neelam Giri</div>`,
        poster: "thumbnail/4.png",


    },
    {
        id: 5,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/5.png",


    },
    {
        id: 6,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/6.png",


    },
    {
        id: 7,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/7.png",


    },
    {
        id: 8,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/8.png",


    },
    {
        id: 9,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/9.png",


    },
    {
        id: 10,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/10.png",


    },
    {
        id: 11,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/11.png",


    },
    {
        id: 12,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/12.png",


    },
    {
        id: 13,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/13.png",


    },
    {
        id: 14,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/14.png",


    },
    {
        id: 15,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/15.png",


    },
    {
        id: 16,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/16.png",


    },
    {
        id: 17,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/17.png",


    },
    {
        id: 18,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/18.png",


    },
    {
        id: 19,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/19.png",


    },
    {
        id: 20,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/19.png",


    },
    {
        id: 21,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 22,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 23,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 24,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 25,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 26,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 27,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 28,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 29,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 30,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 31,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 32,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 33,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 34,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 35,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 36,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 37,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 38,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 39,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 40,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 40,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 42,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 43,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 44,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 45,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 45,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 46,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
    {
        id: 47,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Alan Walker</div>`,
        poster: "thumbnail/1000173400.png",


    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause')
    }
    else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause');
    }
});

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
        e.style.background = `rgb(105,105,105,.0)`
    })

}
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })

}

let index = 0;
let posterMasterplay = document.getElementById('poster-masterplay');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index)
        music.src = `songs/${index}.mp3`;

        posterMasterplay.src = `thumbnail/${index}.png`
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause');

        let songTitles = songs.filter((els) => {
            return els.id == index;
        })
        songTitles.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
            // posterMasterplay.src = poster;

        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = `rgb(105,105,105,.1)`;
        makeAllPlay();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot1 = document.getElementsByClassName('dot');
music.addEventListener('timeupdate', () => {
    let currentTime = music.currentTime;
    let duration = music.duration;
    let min1 = Math.floor(duration / 60);
    let sec1 = Math.floor(duration % 60);
    if (sec1 < 10) {
        sec1 = '0' + sec1;
    }

    currentEnd.innerText = `${min1}:${sec1}`
    let min2 = Math.floor(currentTime / 60);
    let sec2 = Math.floor(currentTime % 60);
    if (sec2 < 10) {
        sec2 = '0' + sec2;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((currentTime / duration) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot1.style.left = `${seekBar}%`;

});















let popSongLeft = document.getElementById('popSongLeft');
let popSongRight = document.getElementById('popSongRight');
let PopSong = document.querySelector('.pop-song');

popSongRight.addEventListener('click', () => {
    PopSong.scrollLeft += 200;
})
popSongLeft.addEventListener('click', () => {
    PopSong.scrollLeft -= 200;
})

let popArLeft = document.getElementById('popArLeft');
let popArtRight = document.getElementById('popArtRight');
let item = document.querySelector('.item');

popArtRight.addEventListener('click', () => {
    item.scrollLeft += 200;
});
popArtLeft.addEventListener('click', () => {
    item.scrollLeft -= 200;
});


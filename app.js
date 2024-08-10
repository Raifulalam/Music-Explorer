// import {data} from ('./data.js')
const music = new Audio('songs/KhesariLalYadav.mp3');

music.play();
const songs = [
    {
        id: 1,
        songName: `टूट जाई पलंग राजा जी -Tut Jai Palang Raja Ji<br>
                        <div class="subtitle">Khesarilal Yadav</div>`,
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
        songName: `Kamariya Gole Gole Dole Raja Ji || Neelkamal Singh Shilpi Raj Bhojpuri New Blockbuster Song 2022<br>
                        <div class="subtitle"> Neelkamal Singh , Shilpi Raj </div>`,
        poster: "thumbnail/5.png",


    },
    {
        id: 6,
        songName: `Chadhal Jawani Rasgulla | Dj Remix Song | Neelkamal Singh | Shilpi Raj New Bhojpuri Song 2023<br>
                        <div class="subtitle">Neelkamal Singh , Shilpi Raj </div>`,
        poster: "thumbnail/6.png",


    },
    {
        id: 7,
        songName: `Heroine | Neelkamal Singh | Sanjana Mishra | Gulab Jaisan Khilal Badu | Bhojpuri Song<br>
                        <div class="subtitle">Neelkamal Singh | Sanjana Mishra</div>`,
        poster: "thumbnail/7.png",


    },
    {
        id: 8,
        songName: `निम्बू खरबूजा भईल 2 | #Karishma Kakkar | Sapna Chauhan | Bhojpuri Song<br>
                        <div class="subtitle">Karishma Kakkar | Sapna Chauhan</div>`,
        poster: "thumbnail/8.png",


    },
    {
        id: 9,
        songName: `पाँचे के नाचे अइहा | #Pawan Singh | #Shilpi_Raj | Ft- Dimpal Singh | Panche Ke Nache | #Video Song<br>
                        <div class="subtitle">Pawan Singh | #Shilpi_Raj</div>`,
        poster: "thumbnail/9.png",


    },
    {
        id: 10,
        songName: `Piya Ji Ke Muski | Khesari Lal Yadav, Aamrapali Dubey | Doli Saja Ke Rakhna | FULL SONG | Movie Song<br>
                        <div class="subtitle"> Khesari Lal Yadav, Aamrapali Dubey </div>`,
        poster: "thumbnail/10.png",


    },
    {
        id: 11,
        songName: `Tu Mera Koi Na Hoke Bhi Kuch Lage Lyrics – Arijit Singh<br>
                        <div class="subtitle">Arijit Singh</div>`,
        poster: "thumbnail/11.png",


    },
    {
        id: 12,
        songName: `Besharam Rang Song | Pathaan | Shah Rukh Khan, Deepika Padukone | Vishal & Sheykhar | Shilpa, Kumaar<br>
                        <div class="subtitle"> Vishal–Shekhar</div>`,
        poster: "thumbnail/12.png",


    },
    {
        id: 13,
        songName: `Baarish | Half Girlfriend | Arjun Kapoor & Shraddha Kapoor| Ash King ,Sashaa | Tanishk| Baarish 2024<br>
                        <div class="subtitle"> Ash King & Shashaa Tirupati</div>`,
        poster: "thumbnail/13.png",


    },
    {
        id: 14,
        songName: `chal chaiya chaiya >br>
                        <div class="subtitle">Sukhwinder Singh & Sapna Awasthi</div>`,
        poster: "thumbnail/14.png",


    },
    {
        id: 15,
        songName: `Meri Mehbooba | Zara Tasveer Se Tu Nikal Ke Samne Aa | Kumar Sanu | Alka Yagnik | Pardes (1997)<br>
                        <div class="subtitle">Kumar Sanu | Alka Yagnik</div>`,
        poster: "thumbnail/15.png",


    },
    {
        id: 16,
        songName: `Udd Jaa Kaale Kaava | Gadar 2 | Sunny Deol, Ameesha | Mithoon, Udit N, Alka Y | Uttam S,Anand Bakshi<br>
                        <div class="subtitle">Mithoon|Udit Narayan | Alka Yagnik</div>`,
        poster: "thumbnail/16.png",


    },
    {
        id: 17,
        songName: `Chal Tere Ishq Mein Lyrics – Gadar 2<br>
                        <div class="subtitle">Mithoon, Neeti Mohan & Vishal Mishra</div>`,
        poster: "thumbnail/17.png",


    },
    {
        id: 18,
        songName: `Challa | Full Song | Jab Tak Hai Jaan | Shah Rukh Khan, Katrina Kaif | Rabbi | A. R. Rahman | Gulzar<br>
                        <div class="subtitle">A. R. Rahman | Gulzar</div>`,
        poster: "thumbnail/18.png",


    },
    {
        id: 19,
        songName: `Dard E Disco Full Video HD Song | Om Shanti Om | ShahRukh<br>
                        <div class="subtitle">Sukhwinder Singh, Marianne DCruz and Caralisa</div>`,
        poster: "thumbnail/19.png",


    },
    {
        id: 20,
        songName: `Dil Diyan Gallan Song | Tiger Zinda Hai | Salman Khan <br>
                        <div class="subtitle">Atif Aslam</div>`,
        poster: "thumbnail/20.png",


    },
    {
        id: 21,
        songName: `Dil Galti Kar Baitha Hai | Meet Bros Ft. Jubin Nautiyal<br>
                        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "thumbnail/21.png",


    },
    {
        id: 22,
        songName: `Dil Jhoom | Gadar 2 | Arijit Singh | Sunny Deol, Utkarsh Sharma, Simratt K | Mithoon, Sayeed Quadri<br>
                        <div class="subtitle"> Arijit Singh</div>`,
        poster: "thumbnail/22.png",


    },
    {
        id: 23,
        songName: `Dil Ne Yeh Kaha Hain Dil Se - HD VIDEO SONG | Akshay, Suniel shetty<br>
                        <div class="subtitle">Udit Narayan, Alka Yagnik & Kumar Sanu</div>`,
        poster: "thumbnail/23.png",


    },
    {
        id: 24,
        songName: `Jaadu Teri Nazar Song | Darr | Shah Rukh Khan, Juhi Chawla | Udit Narayan | Shiv-Hari | Anand Bakshi<br>
                        <div class="subtitle">Udit Narayan | Shiv-Hari | Anand Bakshi</div>`,
        poster: "thumbnail/24.png",


    },
    {
        id: 25,
        songName: `Janam Janam – Dilwale | Shah Rukh Khan | Kajol | Pritam<br>
                        <div class="subtitle">Arijit Singh</div>`,
        poster: "thumbnail/25.png",


    },
    {
        id: 26,
        songName: `Saat Samundar Paar Video Song (4K) | Divya Bharti <br>
                        <div class="subtitle">Anand Bhaksi</div>`,
        poster: "thumbnail/26.png",


    },
    {
        id: 27,
        songName: `Chaleya (Lyrics) - Jawan | Shah Rukh Khan | Nayanthara | Atlee, Anirudh | Arijit Singh | Shilpa Rao<br>
                        <div class="subtitle"> Arijit Singh | Shilpa Rao</div>`,
        poster: "thumbnail/27.png",


    },
    {
        id: 28,
        songName: ` Jhoome Jo Pathaan Song | Shah Rukh Khan, Deepika |<br>
                        <div class="subtitle">| Arijit Singh </div>`,
        poster: "thumbnail/28.png",


    },
    {
        id: 29,
        songName: `O Biba Mainu Duur Na Karin (LYRICS) - Vishal Mishra | Zahrah S Khan | Tanishk Bagchi |Khel Khel Mein<br>
                        <div class="subtitle">ishal Mishra | Zahrah S Khan | Tanishk Bagchi</div>`,
        poster: "thumbnail/29.png",


    },
    {
        id: 30,
        songName: `Ladki Badi Anjani Hai : Kuch Kuch Hota Hai | Shah Rukh Khan<br>
                        <div class="subtitle">Alka Yagnik | Kumar Sanu</div>`,
        poster: "thumbnail/30.png",


    },
    {
        id: 31,
        songName: `Manwa Laage Lyrics | Manwa Laage Song Lyrics from Happy New Year<br>
                        <div class="subtitle">Shreya Ghoshal & Arijit Singh </div>`,
        poster: "thumbnail/31.png",


    },
    {
        id: 32,
        songName: `Main Yahaan Hoon - Shahrukh Khan, Preity Zinta | Veer-Zaara | Udit Narayan, Madan Mohan | 90s Songs<br>
                        <div class="subtitle"> Udit Narayan, Madan Mohan</div>`,
        poster: "thumbnail/32.png",


    },
    {
        id: 33,
        songName: `Main Koi Aisa Geet Gaoon<br>
                        <div class="subtitle">Abhijeet & Alka Yagnik</div>`,
        poster: "thumbnail/33.png",


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
let dot = document.getElementsByClassName('dot')
music.addEventListener('timeupdate', () => {
    let currentTime = music.currentTime;
    let duration = music.duration;
    let min1 = Math.floor(duration / 60);
    let sec1 = Math.floor(duration % 60);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`
    let min2 = Math.floor(currentTime / 60);
    let sec2 = Math.floor(currentTime % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;
    let progressBar = parseInt((currentTime / duration) * 100);
    seek.value = progressBar;
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    if (currentTime == duration) {
        nextplay()
    }
});
seek.addEventListener('change', () => {
    let duration = music.duration;
    music.currentTime = seek.value * duration / 100;
});

let volIcon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let volBar = document.getElementsByClassName('vol-bar')[0];
let volDot = document.getElementById('vol_dot')
vol.addEventListener('change', () => {
    if (vol.value == 0) {
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.add('bi-volume-off-fill');


    }
    if (vol.value > 0) {
        volIcon.classList.remove('bi-volume-up-fill');
        volIcon.classList.add('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        volIcon.classList.add('bi-volume-up-fill');
        volIcon.classList.remove('bi-volume-down-fill');
        volIcon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    volBar.style.width = `${vol_a}%`;
    volDot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});
let back = document.getElementById('back');
let next = document.getElementById('next')
back.addEventListener('click', () => {
    index -= 1;

    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
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
next.addEventListener('click', () => {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `songs/${index}.mp3`;
    posterMasterplay.src = `thumbnail/${index}.png || thumbnail/${index}.jpg`
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
function nextplay() {
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
}

let popSongLeft = document.getElementById('popSongLeft');
let popSongRight = document.getElementById('popSongRight');
let PopSong = document.querySelector('.pop-song');

popSongRight.addEventListener('click', () => {
    PopSong.scrollLeft += 360;
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


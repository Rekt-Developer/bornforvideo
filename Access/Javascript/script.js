/*
🎬 Video playlist UI Design like Skillshare With Vanilla JavaScript
👨🏻‍⚕️ By: Coding Design

You can do whatever you want with the code. However if you love my content, you can subscribed my YouTube Channel
🌎link: www.youtube.com/codingdesign
*/

const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': '𝗦𝗧𝗢𝗣 𝗩𝗜𝗗𝗘𝗢',
        'title': '𝗦𝗧𝗢𝗣 𝗩𝗜𝗗𝗘𝗢',
        'name': '𝗦𝗧𝗢𝗣 𝗩𝗜𝗗𝗘𝗢',
        'duration': '𝗦𝗧𝗢𝗣 𝗩𝗜𝗗𝗘𝗢',
    },

    {
        'id': 'a1',
        'title': 'شقد عنك يسالوني طيء',
        'name': 'شقد عنك يسالوني طيء.mp4',
        'duration': '5:13 د',
    },


    {
        'id': 'a2',
        'title': 'قريبا',
        'name': '111111111111111111111111111.mp4',
        'duration': 'قريبا',
    },
   
    
];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/pp/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pp/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/pp/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pp/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});

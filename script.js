const API_Key = "AIzaSyCUXPTugCsC89X9XJVSuewAoxJQPO9mVm0";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const searchBtn = document.querySelector("#searchBtn");

function displayVideos(videos){
    videos.map((video, i) => {
        document.querySelector("#videoContainer").innerHTML+=
        `
            <a href= "/video.html?videoId=${video.id.videoId}">
                <li>
                    <img src="${video.snippet.thumbnails.high.url}"/> <p>${video.snippet .title}</p>
                </li>
            <a>
        `
    });
}



function getVideo(query){
    fetch(`${BASE_URL}/search?key=${API_Key}&q=${query}&type=video&maxResults=10&part=snippet`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            displayVideos(data.items)
        })
};

searchBtn.addEventListener("click", ()=>{
    getVideo(document.querySelector("#searchInput").value);

})

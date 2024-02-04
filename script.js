const API_Key = "AIzaSyCUXPTugCsC89X9XJVSuewAoxJQPO9mVm0";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const searchBtn = document.querySelector("#searchBtn");

function displayVideos(videos){
    videos.map((video, i) => {
        document.querySelector("#videoContainer").innerHTML+=
        `
            <a href= "/video.html?videoId=${video.id.videoId}">
                <li style="list-style:none" >
                    <img style="padding-top:10px;" heigth="150px" width="300px" src="${video.snippet.thumbnails.high.url}"/> 
                    <p style="width:150px height:50px">${video.snippet .title}</p>
                </li>
            <a>
        `
    });
}



function getVideo(query){
    fetch(`${BASE_URL}/search?key=${API_Key}&q=${query}&type=video&maxResults=10&part=snippet&maxResults=20`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            displayVideos(data.items)
        })
};

searchBtn.addEventListener("click", ()=>{
    document.querySelector(".sideControls>div").style.display = "none";
    getVideo(document.querySelector("#searchInput").value);

});
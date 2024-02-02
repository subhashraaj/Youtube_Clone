const API_KEY = "AIzaSyCUXPTugCsC89X9XJVSuewAoxJQPO9mVm0";
const BASE_URL = "https://www.googleapis.com/youtube/v3";


window.addEventListener("load", () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const videoId = params.get("videoId");

    if (YT) {
        new YT.Player("videoContainer", {
            height: "500",
            width: "1000",
            videoId: videoId
        });
    }

    function getChannelDetails(channelId){
        fetch(`${BASE_URL}/channels?key=${API_KEY}&part=snippet&id=${channelId}`)
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data)
            })


    } 

    function getVideoStats(){
        fetch(`${BASE_URL}/videos?key=${API_KEY}&part=statistics&id=${videoId}`)
        .then((res)=> res.json())
        .then((data)=>{
            document.querySelector("#likes").innerHTML += 
            `
                <p>Likes :${data.items[0].statistics.likeCount}</p>
            `
            console.log("stats", data);
        })
    }

    function getVideoDetails() {
        fetch(`${BASE_URL}/videos?key=${API_KEY}&part=snippet&id=${videoId}`)
            .then((res)=> res.json())
            .then((data)=>{
                console.log("video details", data);
                console.log(data.items[0].snippet.channelId); 
                getChannelDetails(data.items[0].snippet.channelID)
            })
       
    }
    function getCommets(){
        fetch(`${BASE_URL}/commentThreads?key=${API_KEY}&part=snippet&videoId=${videoId}&maxResults=25`)
        .then((res)=> res.json())
        .then((data)=>{
            console.log("comments", data)
        })


    }
    getVideoStats();
    getVideoDetails();
    getCommets();

});


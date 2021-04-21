const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")


document.addEventListener("keypress", (e) =>{
    console.log(e.key)
    if(e.key=="v"){
        document.getElementById("boomAudio").play()
    }else if(e.key=="f"){
        document.getElementById("clapAudio").play()
    }else if(e.key=="e"){
        document.getElementById("hihatAudio").play()
    }else if(e.key=="m"){
        document.getElementById("kickAudio").play()
    }else if(e.key=="a"){
        document.getElementById("openhatAudio").play()
    }else if(e.key=="p"){
        document.getElementById("rideAudio").play()
    }else if(e.key=="k"){
        document.getElementById("snareAudio").play()
    }else if(e.key=="o"){
        document.getElementById("tinkAudio").play()
    }else if(e.key=="l"){
        document.getElementById("tomAudio").play()
    }
})

document.getElementById("boomButton").addEventListener("click", () =>{
    document.getElementById("boomAudio").play()
})
document.getElementById("clapButton").addEventListener("click", () =>{
    document.getElementById("clapAudio").play()
})
document.getElementById("hihatButton").addEventListener("click", () =>{
    document.getElementById("hihatAudio").play()
})
document.getElementById("kickButton").addEventListener("click", () =>{
    document.getElementById("kickAudio").play()
})
document.getElementById("openhatButton").addEventListener("click", () =>{
    document.getElementById("openhatAudio").play()
})
document.getElementById("rideButton").addEventListener("click", () =>{
    document.getElementById("rideAudio").play()
})
document.getElementById("snareButton").addEventListener("click", () =>{
    document.getElementById("snareAudio").play()
})
document.getElementById("tinkButton").addEventListener("click", () =>{
    document.getElementById("tinkAudio").play()
})
document.getElementById("tomButton").addEventListener("click", () =>{
    document.getElementById("tomAudio").play()
})
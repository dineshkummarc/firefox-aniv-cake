var audioContext,sourceNode;

window.addEventListener('load', init, false);
function init() {
    
    window.AudioContext = window.AudioContext||window.webkitAudioContext;
    audioContext = new AudioContext();
    
    
    getUserMedia({audio:true},gotStream);
  
}

function getUserMedia(dictionary, callback) {
    try {
        navigator.getUserMedia =
        navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
        navigator.getUserMedia(dictionary, callback, error);
    } catch (e) {
        alert('getUserMedia threw exception :' + e);
    }
}

function error() {
    alert('Stream generation failed.');
}

function gotStream(stream) {
    // Create an AudioNode from the stream.
    mediaStreamSource = audioContext.createMediaStreamSource(stream);
    // Connect it to the destination.
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    mediaStreamSource.connect(analyser);
    
    var bufferLength = analyser.fftSize;
    var dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);
    
    value();
    
    function value(){
        requestAnimationFrame(value);
        display=analyser.getByteTimeDomainData(dataArray);
        for(var i = 0; i < bufferLength; i++) {
            if(dataArray[i]<30){
               spegni=true;
            }
        }
    }
    
    
}

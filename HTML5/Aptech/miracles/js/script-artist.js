window.onload = function () {
    var xmlHttp;
    var url = "media/tracks.json";

    if (window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
    else {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlHttp.open("GET", url, true);
    xmlHttp.send();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var jsonDoc = JSON.parse(xmlHttp.responseText);
            var artists = jsonDoc.artists;

            // Display artist image Medium
            var output = "";
            var i, j;
            for (i = artists.length - 1; i >= 0; i--) {
                for (j = 0; j < artists[i].album.length; j++) {
                    output += "<img id='art-m-" + i + "-" + j +
                        "' class='album-art-m' src='" + artists[i].album[j].images[1] + "'>";
                }
            }
            document.getElementById('arts-m').innerHTML = output;


            // Display first artist name, album, track, url, alt
            i = 0;
            output = "<h3 id='artist-name' class='color-smoked'>" + artists[i].name + "</h3>"
                  + "<h4 id='album-name' class='color-smoked'> Album: " + artists[i].album[0].name + "</h4>"
                  + "<h4 id='track-name' class='color-smoked'> Track: " + artists[i].album[0].track + "</h4>"
                  + "<h5><a id='url' href='" + artists[i].url + "' target='_blank' alt='Artist's website'>"
                  + artists[i].alt + "</a></h5>";

            document.getElementById('art-wrapper-info').innerHTML = output;


            /* Load Audio Playlist */
            output = "";

            // Retrieve each artist data
            for (i = 0; i < artists.length; i++) {
                // Retrieve each album per artist
                for (j = 0; j < artists[i].album.length; j++) {
                    output += "<article id='track-" + i + "-" + j + "' onclick=\"playTrack("
                          + i + ", " + j + ")\">"
                          + "<div class='track-img-wr'>"
                          + "<img id='art-s-" + i + "' src='" + artists[i].album[j].images[0] + "'/>"
                          + "</div><div class='track-info'>"
                          + "<p>" + artists[i].album[j].track + "</p>"
                          + "<p><h5>by " + artists[i].name;

                    if (artists[i].album[j].year > 0) {
                        output += ". Released " + artists[i].album[j].year;
                    }
                    if (artists[i].album[j].label !== "") {
                        output += " under " + artists[i].album[j].label;
                    }

                    output += ".</h5></p></div></article>";
                }

            }

            document.getElementById('tracks-lists').innerHTML = output;

            // Audio playback once track is selected
            playAudio(artists[0].album[0].audio);
            $('#track-0-0').removeClass('deselected').addClass('selected');
            
            miracles.allArtists = artists;
        }
    };
};

var miracles = { allArtists: []};

// Method to play selected track and load corresponding details
function playAudio(audio) {
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.getElementsByTagName('source')[0].src = audio;
    audioPlayer.load(); // load the player
    audioPlayer.play(); // play the loaded track
}

function playTrack(artistID, albumID) {
    playAudio(miracles.allArtists[artistID].album[albumID].audio);
    
    loadTrackInfo(miracles.allArtists[artistID].name,
        miracles.allArtists[artistID].album[albumID].name,
        miracles.allArtists[artistID].album[albumID].track, 
        miracles.allArtists[artistID].url,
        miracles.allArtists[artistID].alt);
        
        // TODO: Load the corresponding track picture
        var artsMImg = document.getElementById('arts-m').getElementsByTagName('img');
        for(var i=0; i < artsMImg.length; i++)
        {
            artsMImg[i].style.zIndex = "300";
        }
        var activeImage = document.getElementById('art-m-' + artistID + '-' + albumID);
        activeImage.style.zIndex = "500";
        
        // TODO: Set selected track color.
        $('#track-' + artistID + '-' + albumID).siblings().removeClass('selected').addClass('deselected');
        $('#track-' + artistID + '-' + albumID).removeClass('deselected').addClass('selected');
}

function loadTrackInfo(artist, album, track, url, alt) {
    // TODO: Load the corresponding album information
    document.getElementById('artist-name').innerHTML = artist;
    document.getElementById('album-name').innerHTML = "Album: " + album;
    document.getElementById('track-name').innerHTML = "Track: " + track;
    artistURL = document.getElementById('url');
    artistURL.href = url;
    artistURL.innerHTML = alt;
}
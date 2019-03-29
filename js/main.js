function Player () {
    //
    document.addEventListener('visibilitychange', function () {
        // 
    });

    function init (url) {

        var listener = {
            onbufferingstart: function() {
              console.log("Buffering start.");
            },
          
            onbufferingprogress: function(percent) {
              console.log("Buffering progress data : " + percent);
            },
          
            onbufferingcomplete: function() {
              console.log("Buffering complete.");
            },
            onstreamcompleted: function() {
              console.log("Stream Completed");
              webapis.avplay.stop();
            },
          
            oncurrentplaytime: function(currentTime) {
              console.log("Current playtime: " + currentTime);
            },
          
            onerror: function(eventType) {
              console.log("event type error : " + eventType);
            },
          
            onevent: function(eventType, eventData) {
              console.log("event type: " + eventType + ", data: " + eventData);
            },

          };

        webapis.avplay.open(url);
        webapis.avplay.setListener(listener);
        webapis.avplay.setDisplayRect('680','2','600','350');
        webapis.avplay.setLooping(true);
     
    }

    function play () {
        //
        webapis.avplay.prepareAsync(function (){
            webapis.avplay.play();
        });    
    }

    function stop () {
        //
        webapis.avplay.stop()
    }

    function getStatus () {
        //
        return webapis.avplay.getState();
    }

    return {
        init: init,
        play: play,
        stop: stop,
        getStatus: getStatus
    };
}
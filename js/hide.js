var  takum = document.getElementById('topy');

    window.onscroll = function() {

        if (window.pageYOffset > 200) {

            //      		nav.style.background = "#18212a";
            //      		nav.style.boxShadow = "0 0 20px 0 rgba(0, 0, 0, 0.63)";
            //            nav.style.padding = "50px";
            //            box.style.background = "red";
            takum.style.background = "red";
        } else {
            //      		nav.style.background = "transparent";
            //      		nav.style.boxShadow = "none";
            //            nav.style.padding = "20px";
            //            box.style.background = "blue";
            takum.style.background = "green";
        }
    }
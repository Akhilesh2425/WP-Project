var current=0;
            var images=document.getElementsByClassName("slides");
            var indicators=document.getElementsByClassName("indicator");
            var timer;
        
            function display(autoplay=true) {
                for (var i=0; i<images.length; i++) {
                    images[i].style.display="none";
                }
                current++;
                if (current>images.length) {
                    current=1;
                }
                for (var i=0; i<indicators.length; i++) {
                    indicators[i].classList.remove("highlight");
                }
                images[current-1].style.display="block";
                indicators[current-1].classList.add("highlight");
                if (autoplay) {
                    timer=setTimeout(display, 3500);
                }
            }
        
            function resetTimer() {
                clearTimeout(timer);
                timer=setTimeout(display, 3500);
            }
        
            function previous() {
                clearTimeout(timer);
                current-=2;
                if (current<0) {
                    current=images.length-1;
                }
                display(false);
                resetTimer();
            }
        
            function nextSlide() {
                clearTimeout(timer);
                display(false);
                resetTimer();
            }
        
            display();
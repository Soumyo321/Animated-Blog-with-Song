
var text = document.querySelectorAll("h3");
var t2 = document.querySelector("#container")
var btn = document.querySelector('.b1');
var cidx=0;

    

    btn.addEventListener("click",function(){
        // btn.classList.add('hover-effect')
        btn.innerHTML='Read'
        
        t2.addEventListener('mouseenter',function(){
            if(!t2.classList.contains('hover-effect'))
            // t2.style.backgroundColor="#999"
            t2.style.cursor='pointer'
            t2.style.background='black';
            t2.style.boxShawdow = '0 0 20px 5px gold';
            t2.style.transition='0.5s'
            t2.style.color='greenyellow';
            t2.classList.add('glow')
            
        })
        t2.addEventListener('mouseleave',function(){
            if(!t2.classList.contains('hover-effect'))
            // t2.style.background="transpaent";
            // t2.style.boxShawdow = "0 0 20px 5px gold;"
            t2.style.backgrorndColor='black'
            //   t2.style.backgroundColor="#999"
        })
    })
  
    
    const arr=['JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page',
    'JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behavior of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc.',
    'JavaScript, abbreviated as JS, is a flexible and widely used programming language that has remained popular for decades. Its appeal stems from its ability to bring online applications to life, generate dynamic user experiences, and function across several platforms']

    function toggleContent(){
       const contDiv = document.getElementById('container');
       const currentContent = arr[cidx];
        contDiv.textContent = currentContent;
        cidx = (cidx+1)% arr.length;
       
        toggleContent()
        }

//photo
document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll('.photo');
    const container = document.getElementById('container2');
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    let currentIndex = 0;
    const fadeDuration = 1000; // Duration of the fade effect in milliseconds
    const intervalDuration = 3000; // Interval between photo changes in milliseconds

    // Hide all photos except the first one initially
    photos.forEach((photo, index) => {
        if (index !== 0) {
            photo.style.opacity = '0';
        }
    });

    // Set container size to match the dimensions of the first photo
    const firstPhoto = photos[0];
    container.style.width = firstPhoto.width + 'px';
    container.style.height = firstPhoto.height + 'px';

    // Function to fade in a photo
    function fadeIn(element) {
        let opacity = 0;
        const startTime = performance.now();
        const fade = () => {
            opacity = (performance.now() - startTime) / fadeDuration;
            if (opacity >= 1) {
                element.style.opacity = '1';
                return;
            }
            element.style.opacity = opacity;
            requestAnimationFrame(fade);
        };
        fade();
    }

    // Function to fade out a photo
    function fadeOut(element) {
        let opacity = 1;
        const startTime = performance.now();
        const fade = () => {
            opacity = 1 - (performance.now() - startTime) / fadeDuration;
            if (opacity <= 0) {
                element.style.opacity = '0';
                return;
            }
            element.style.opacity = opacity;
            requestAnimationFrame(fade);
        };
        fade();
    }

    // Function to toggle between photos with fade effect
    function toggleContent() {
        const currentPhoto = photos[currentIndex];
        const nextIndex = (currentIndex + 1) % photos.length;
        const nextPhoto = photos[nextIndex];

        // Fade out the current photo
        fadeOut(currentPhoto);

        // Fade in the next photo after a short delay
        setTimeout(() => {
            fadeIn(nextPhoto);
            currentIndex = nextIndex;
        }, fadeDuration);
    }

    // Function to start/stop the slideshow on button click
    let slideshowInterval;
    let slideshowRunning = false;

    function toggleSlideshow() {
        if (  !slideshowRunning     ) {
            slideshowInterval = setInterval(toggleContent, intervalDuration);
            btn2.textContent = 'See';
        } else {
            clearInterval(slideshowInterval);
            btn2.textContent = 'Stop';
        }
        slideshowRunning = !slideshowRunning;
    }

    // Attach event listeners to buttons
    btn1.addEventListener('click', toggleContent );
    btn2.addEventListener('click', toggleSlideshow);
});




//music
document.addEventListener("DOMContentLoaded", function() {
    const music = document.getElementById("music");
    const btn2 = document.getElementById("btn2");
    let musicPaused = false;
    let resumePosition = 0;

    // Function to play the music
    function playMusic() {
        if (!musicPaused) {
            music.currentTime = resumePosition;
            music.play();
        } else {
            music.play();
        }
    }

    // Function to pause the music
    function pauseMusic() {
        music.pause();
        resumePosition = music.currentTime;
    }

    // Function to toggle play/pause on button click
    function toggleMusic() {
        if (!musicPaused) {
            pauseMusic();
            btn2.textContent = 'stop';
        } else {
            playMusic();
            btn2.textContent = 'See';
        }
        musicPaused = !musicPaused;
    }

    // Attach event listener to the button
    btn2.addEventListener('click', toggleMusic);

    // Listen for the music's pause event
    music.addEventListener('pause', function() {
        musicPaused = false;
    });

    // Listen for the music's play event
    music.addEventListener('play', function() {
        musicPaused = true;
    });
});

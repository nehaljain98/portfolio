(function() {
    'use strict'; 
        // window.onscroll = function() {myFunction()};

        // var navbar = document.getElementById("headernav");
    
        // var sticky = navbar.offsetTop;
        
        // function myFunction() {
        //     if (window.pageYOffset >= sticky) {
        //         navbar.classList.add("sticky")
        //     } else {
        //         navbar.classList.remove("sticky");
        //     }
        // }

        const navLinks = document.querySelectorAll('nav ul li a');
    
        navLinks.forEach(function(eachLink){
            eachLink.addEventListener('click',smoothScroll);
        });
    
        function smoothScroll(event){
        event.preventDefault();
    
        const targetID = event.target.getAttribute('href');
        const targetAnchor = document.querySelector(targetID);
    
        const originalTop = Math.floor(targetAnchor.getBoundingClientRect().top)-200;
        window.scrollBy({top:originalTop, left:0, behavior:'smooth'});
        console.log (originalTop);
        }
    
        // window.addEventListener('load', function(){
        //     const posts = document.querySelectorAll('section');
        //     const postTops = [];
        //     let lastpost = posts.length - 1;
        //     let pagetop;
        //     let counter = 0;
        //     let prevCounter = 0;
    
        //     posts.forEach(function(post){
        //         postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset)
        //     })
            
    
            window.addEventListener ('scroll', function(){
                pagetop = window.pageYOffset +250;
    
                if (pagetop>postTops[counter+1]) {
                    counter++;
                    console.log (`scrolling down ${counter}`);
                } else if (counter > 0 && pagetop < postTops [counter]) {
                    counter--;
                    lastPost = posts.length - 1;
                    console.log (`scrolling up ${counter}`);
                } else if (pagetop > postTops[lastPost]) {
                    counter = lastPost;
                    lastPost++;
                    console.log (`last post: ${counter}`);
                }
    
                if (counter != prevCounter) {
                    navLinks.forEach (function(eachLink){
                        eachLink.removeAttribute ('class');
                    });
                    var thisLink = document.querySelector (`nav ul li:nth-child(${counter+1}) a `);
                    thisLink.className = 'selected';
                    prevCounter = counter;
                }
    
            });
        });
    
        let resizeID;
        window.addEventListener ('resize', function(){
            clearTimeout (resizeID);
            resizeID = setTimeout(function(){
                window.onbeforeprint = function () {
                    window.scrollTo(0,0);
                };
                window.location.reload (true);
            },500);
        });

        $(function() {
            $(window).scroll( function(){
        
        
                $('.fadeInBlock').each( function(i){
        
                    var bottom_of_object = $(this).position().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
        
                    /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
                    bottom_of_;window = bottom_of_window + 300;  
        
                    if( bottom_of_window > bottom_of_object ){
        
                        $(this).animate({'opacity':'1'},1000)
        
                    }
                }); 
        
            });
        });

        var coverImage = document.querySelector("#cover-image");
    
        function setTranslate(xPos, yPos, el) {
            el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        }
    
        window.addEventListener("DOMContentLoaded", scrollLoop, false);
    
        var xScrollPosition;
        var yScrollPosition;
    
        function scrollLoop() {
            xScrollPosition = window.scrollX;
            yScrollPosition = window.scrollY;
    
            setTranslate(0, yScrollPosition * -0.5, coverImage);
    
            requestAnimationFrame(scrollLoop);
        }

        // ===== Scroll to Top ==== 
        (function(){
            // Back to Top - by CodyHouse.co
            var backTop = document.getElementsByClassName('js-cd-top')[0],
                offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
                offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
                scrollDuration = 700,
                scrolling = false;
        
            if( backTop ) {
                //update back to top visibility on scrolling
                window.addEventListener("scroll", function(event) {
                    if( !scrolling ) {
                        scrolling = true;
                        (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
                    }
                });
        
                //smooth scroll to top
                backTop.addEventListener('click', function(event) {
                    event.preventDefault();
                    (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
                });
            }
        
            function checkBackToTop() {
                var windowTop = window.scrollY || document.documentElement.scrollTop;
                ( windowTop > offset ) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
                ( windowTop > offsetOpacity ) && Util.addClass(backTop, 'cd-top--fade-out');
                scrolling = false;
            }
        })();
    })();
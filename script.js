(function() {
    'use strict'; 
        window.onscroll = function() {myFunction()};

        var navbar = document.getElementById("headernav");
    
        var sticky = navbar.offsetTop;
        
        function myFunction() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }

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
    
        window.addEventListener('load', function(){
            const posts = document.querySelectorAll('section');
            const postTops = [];
            let lastpost = posts.length - 1;
            let pagetop;
            let counter = 0;
            let prevCounter = 0;
    
            posts.forEach(function(post){
                postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset)
            })
            
    
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

   
        
    })();
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
 
    import ScrollTrigger, { Trigger } from '../src/ScrollTrigger'
    import Canvas from './canvas'

    ((document, window) => {
        // This is where the magic happens, start by initializing a ScrollTrigger
        // instance. We can set default options for all triggers in the constructor.
        //
        // We set some default 'trigger' options, and add a custom callback for
        // the didScroll method. Also we set the scroll sustain to 800ms.
        const trigger = new ScrollTrigger({
            // Set custom (default) options for the triggers, these can be overwritten
            // when adding new triggers to the ScrollTrigger instance. If you pass
            // options when adding new triggers, you'll only need to pass the object
            // `trigger`, e.g. { once: false }
            trigger: {
                // If the trigger should just work one time
                once: false,
                offset: {
                    // Set an offset based on the elements position, returning an
                    // integer = offset in px, float = offset in percentage of either
                    // width (when setting the x offset) or height (when setting y)
                    //
                    // So setting an yOffset of 0.2 means 20% of the elements height,
                    // the callback / class will be toggled when the element is 20%
                    // in the viewport.
                    element: {
                        x: 0,
                        y: (trigger, rect, direction) => {
                            // You can add custom offsets according to callbacks, you
                            // get passed the trigger, rect (DOMRect) and the scroll
                            // direction, a string of either top, left, right or
                            // bottom.
                            return 0.2
                        }
                    },
                    // Setting an offset of 0.2 on the viewport means the trigger
                    // will be called when the element is 20% in the viewport. So if
                    // your screen is 1200x600px, the trigger will be called when the
                    // user has scrolled for 120px.
                    viewport: {
                        x: 0,
                        y: (trigger, frame, direction) => {
                            // We check if the trigger is visible, if so, the offset
                            // on the viewport is 0, otherwise it's 20% of the height
                            // of the viewport. This causes the triggers to animate
                            // 'on screen' when the element is in the viewport, but
                            // don't trigger the 'out' class until the element is out
                            // of the viewport.

                            // This is the same as returning Math.ceil(0.2 * frame.h)
                            return trigger.visible ? 0 : 0.2
                        }
                    }
                },
                toggle: {
                    // The class(es) that should be toggled
                    class: {
                        in: 'visible', // Either a string, or an array of strings
                        out: ['invisible', 'extraClassToToggleWhenHidden']
                    },
                    callback: {
                        // A callback when the element is going in the viewport, you can
                        // return a Promise here, the trigger will not be called until
                        // the promise resolves.
                        in: null,
                        // A callback when the element is visible on screen, keeps
                        // on triggering for as long as 'sustain' is set
                        visible: null,
                        // A callback when the element is going out of the viewport.
                        // You can also return a promise here, like in the 'in' callback.
                        //
                        // Here an example where all triggers take 10ms to trigger
                        // the 'out' class.
                        out: (trigger) => {
                            // `trigger` contains the Trigger object that goes out
                            // of the viewport
                            return new Promise((resolve, reject) => {
                                setTimeout(resolve, 10)
                            })
                        }
                    }
                },
            },
            // Set custom options and callbacks for the ScrollAnimationLoop
            scroll: {
                // The amount of ms the scroll loop should keep triggering after the
                // scrolling has stopped. This is sometimes nice for canvas
                // animations.
                sustain: 200,
                // Window|HTMLDocument|HTMLElement to check for scroll events
                element: window,
                // Add a callback when the user has scrolled, keeps on triggering for
                // as long as the sustain is set to do
                callback: didScroll,
                // Callback when the user started scrolling
                start: () => {},
                // Callback when the user stopped scrolling
                stop: () => {},
                // Callback when the user changes direction in scrolling
                directionChange: () => {}
            }
        })

        const canvasElement = document.querySelector('canvas'),
                        ctx = canvasElement.getContext('2d')

        let w = canvasElement.width = window.innerWidth,
            h = canvasElement.height = window.innerHeight,
            density = 1, isDrawing = true

        const canvas = new Canvas(ctx, w, h)

        function setup() {
            // Add the triggers
            addTriggers()

            // Basic canvas setup
            window.addEventListener('resize', resize)

            density = window.devicePixelRatio != undefined ? window.devicePixelRatio : 1.0

            canvasElement.width = w * density
            canvasElement.height = h * density

            canvas.width = w
            canvas.height = h

            ctx.scale(density,density)

            draw()
        }

        function addTriggers() {
            // Adding triggers can be done in multiple ways, the easiest is to pass
            // a querySelector.
            trigger.add('[data-slideInLeft]')
                .add('[data-slideInRight]')
                .add('[data-slideInBottom]')

            // Add the trigger for the callback example, also add a custom callback
            // when the trigger becomes visible. As an example we pass an HTMLElement
            // instead of a querySelector.
            const element = document.querySelector('[data-callback]')
            trigger.add(element, {
                toggle: {
                    callback: {
                        in: counterCallback
                    }
                }
            })
        }

        function counterCallback(trigger) {
            // In the callback we get passed the Trigger object, from here we have
            // access to the responding HTMLElement among other things. You could,
            // for instance, change the class it toggles, or attach another callback.
            // Check the console for more info.
            console.info(trigger)

            // For now, we just append the counter
            const counterElement = trigger.element.querySelector('span')
            const counter = parseInt(counterElement.innerText)

            counterElement.innerText = counter + 1
        }

        function didScroll(position) {
            // calculate the delta, from 0 to 1 (when having 1 screen height) to
            // animate with
            const delta = (position.y / window.innerHeight)

            canvas.scrollDelta = delta

            // change the backgroundColor accordingly
            // const lightness = map(delta, 0, 1, 5, 76)
            // const saturation = map(delta, 0, 1, 84, 0)

            // document.body.style.backgroundColor = `hsl(186, ${saturation}%, ${lightness}%)`

            // check if the canvas is on-screen, otherwise stop the animationLoop.
            if (position.y > window.innerHeight) {
                isDrawing = false
            } else if (!isDrawing) {
                isDrawing = true

                draw()
            }
        }

        setup()
    
    })();
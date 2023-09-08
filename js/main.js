
$(document).ready(function(){

    // service animation 
    $('.about-part-1').waypoint({
        handler: function(direction) {
            $('.about-part-1').addClass('animate__animated animate__fadeInUp animate__slow');
            console.log('hello world')
        },
        offset: '50%'
    })

    $('.about-part-2').waypoint({
        handler: function(direction) {
            $('.about-part-2').addClass('animate__animated animate__zoomIn animate__slow');
        },
        offset: '50%'
    });

    // on scroll rotate fan 
    const serviceboxs = document.querySelectorAll('.service-box');
    let rotate = 0;
    const callback = (entries,observe) => {
        const [entry] = entries;
        const fan = document.getElementById('fan');
        rotate += 20;
        fan.style.transform = `rotate(${rotate}deg)`
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    serviceboxs.forEach(ele => {
        const io = new IntersectionObserver(callback,options);
        io.observe(ele);
    });


    // auto scroll service 
    const servicecontainer = document.getElementsByClassName('service-container')[0];
    const scrollPerCall = servicecontainer.scrollHeight/serviceboxs.length;
    let scroll = 0;
    setInterval(() => {
        if(scroll >= servicecontainer.scrollHeight){
            scroll = 0;
        }
        servicecontainer.scrollTo(0,scroll);
        scroll += scrollPerCall;
    },5000);
});
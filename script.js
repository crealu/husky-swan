const menu = document.getElementById('menu');
const swan = document.getElementById('swan');
const text = document.getElementById("text");
const sound = document.getElementById("swan-audio");
// const audio = new Audio("media/squawk.mp3");

const burst = new mojs.Burst({
    radius:   { 0: 100 },
    count:    10,
    children: {
        shape:      'polygon',
        fill:       { 'cyan' : 'yellow' },
        radius:     20,
        rotate:      { 360: 0 },
        duration:   1000,
        delay:      'stagger(0, 10)'
    }
});

const burst2 = new mojs.Burst({
    radius:   { 0: 100 },
    count:    10,
    children: {
        shape:      'polygon',
        points:     5,
        fill:       { 'cyan' : 'magenta' },
        rotate:      { 360: 0 },
        duration:   1250,
        delay:      'stagger(10, 20)'
    }
});

const burst3 = new mojs.Burst({
    radius:   { 0: 100 },
    count:    5,
    degree:   360,
    children: {
        fill:       { 'magenta' : 'yellow' },
        duration:   1500,
        delay:      'stagger(20, 30)'
    }
  });

function squawk() {
    sound.play();
}

function cueSwans() {
    swan.style.display = 'block';
    let t = 20;
    let id = setInterval(frame1, 750);
    function frame1() {
        t--;
        console.log(t);
        if (t == 2) {
            clearInterval(id);
        }
        
        if (t % 2 == 0) {
            swan.src = 'media/squawk.svg';
        } else {
            swan.src = 'media/swan.svg';
        }
    }
}

function cycleMelt() {
    let t = 12;
    let id = setInterval(frame, 200);
    function frame() {
        t--;
        menu.src = `./media/Group ${t.toString()}.png`;
        if (t == 2) {
            clearInterval(id);
        }
    }
}

menu.addEventListener("click", (event) => {
    cycleMelt();
    setTimeout(() => {
        event.target.style.display = "none";
        burst.generate();
        burst.replay();
        burst2.generate();
        burst2.replay();
        burst3.generate();
        burst3.replay();
        text.classList.add("visible");
        setTimeout(() => {
            text.classList.remove("visible");
            squawk();
            cueSwans()
        }, 2000);
    }, 2000);
});
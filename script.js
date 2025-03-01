const menu = document.getElementById('menu');
const swan = document.getElementById('swan');
const text = document.getElementById("text");
const squawk = document.getElementById("swan-audio");

const burst = new mojs.Burst({
    radius:   { 0: 100 },
    count:    10,
    children: {
    shape:      'polygon',
    fill:       { 'cyan' : 'yellow' },
    radius:     20,
    rotate:      { 360: 0 },
    duration:   1000
    }
});

const burst2 = new mojs.Burst({
    radius:   { 0: 100 },
    count:    10,
    children: {
        shape:      'polygon',
    }
});

function cueSwans() {
    swan.style.display = 'block';
    let t = 20;
    let id = setInterval(frame1, 750);
    function frame1() {
        t--;
        console.log(t);
        if (t % 2 == 0) {
            swan.src = './media/squawk.svg';
        } else {
            swan.src = `./media/swan.svg`
        }
        if (t == 2) {
            clearInterval(id);
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
        text.classList.add("visible");
        setTimeout(() => {
            text.classList.remove("visible");
            squawk.play();
            cueSwans()
        }, 2000);
    }, 2000);
});
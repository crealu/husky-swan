const menu = document.getElementById('menu');
const swan = document.getElementById('swan');
const text = document.getElementById("text");

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

    function cueSwans() {
        swan.style.display = 'block';
        let t = 12;
        let id = setInterval(frame, 300);
        function frame() {
            t--;
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
        cueSwans()
    }, 2000);
    }, 2000);
});
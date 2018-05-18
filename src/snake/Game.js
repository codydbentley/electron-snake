
import Screen from './Screen';
import Keyboard from './input/Keyboard';
import Snake from './Snake';
import Level from './Level';

const Game = () => {

    let title = "Snake Clone";

    let paused = true;

    let screen = new Screen(500, 500);
    let key = new Keyboard;
    let player = new Snake(key);
    let level = new Level(500, 500);

    level.addPlayer(player);

    let lastTime;
    let tickRate = 30;
    let tick = 1000 / tickRate;
    let timer;
    let delta;
    let frames;
    let ticks;

    const update = () => {
        key.update();
        if (paused && key.input.space) paused = false;
        if (!paused) {
            player.update();
            level.update();
        }
    };

    const render = () => {
        if (!paused) {
            screen.clear();
            level.render(screen);
            player.render(screen);
        }
    };

    const run = () => {
        let now = performance.now();
        delta += (now - lastTime) / tick;
        lastTime = now;
        if (delta >= 1) {
            update();
            ticks++;
            delta--;
        }
        render();
        frames++;
        if (Date.now() - timer > 1000) {
            timer += 1000;
            document.title = `${title} | fps: ${frames} | tick: ${ticks}`;
            ticks = 0;
            frames = 0;
        }
        requestAnimationFrame(run);
    };

    const start = () => {
        lastTime = performance.now();
        timer = Date.now();
        delta = 0;
        frames = 0;
        ticks = 0;
        run();
    };

    return {
        start
    }
};

export default Game;
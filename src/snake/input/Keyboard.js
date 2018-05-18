
const Keyboard = () => {

    window.addEventListener('keydown', (event) => {
        keyDown(event.key);
    });

    window.addEventListener('keyup', (event) => {
        keyUp(event.key);
    });

    let keys = {};

    let input = {
        up: false,
        down: false,
        left: false,
        right: false,
        space: false
    };

    const update = () => {
        input.up = Boolean(keys["w"] || keys["ArrowUp"]);
        input.down = Boolean(keys["s"] || keys["ArrowDown"]);
        input.left = Boolean(keys["a"] || keys["ArrowLeft"]);
        input.right = Boolean(keys["d"] || keys["ArrowRight"]);
        input.space = Boolean(keys[" "]);
    };

    const keyDown = (key) => {
        keys[key] = true;
    };

    const keyUp = (key) => {
        keys[key] = false;
    };

    return {
        update,
        input
    }
};

export default Keyboard;

import Section from './Section';

const Snake = (key) => {

    let direction = Math.floor(Math.random() * 4);

    let chunks = [];
    let size = 50;
    let width = 10;
    let speed = 5;
    let uTrack = direction;
    let lastMove = 0;

    let head;

    chunks.push({x: 250, y: 250});

    const grow = () => {
        size += 50;
    };

    const move = () => {
        if ((chunks.length * speed) >= size) {
            chunks.shift();
        }
        let dx = 0;
        let dy = 0;
        if (direction === 0 || direction === 2) {
            dy += (direction === 2 ? speed : -speed);
        } else {
            dx += (direction === 1 ? speed : -speed);
        }
        let lastChunk = chunks[chunks.length-1];
        head = {x: lastChunk.x + dx, y: lastChunk.y + dy};
        chunks.push(head);
    };

    const collision = (cx, cy, cs) => {
        let
            px = head.x - (width / 2),
            py = head.y - (width / 2);
        return (
            px < cx + cs && px + width > cx &&
            py < cy + cs && py + width > cs
        );
    };

    const update = () => {
        if (key.input.up && direction !== 2) {
            direction = 0;
        }
        if (key.input.right && direction !== 3) {
            direction = 1;
        }
        if (key.input.down && direction !== 0) {
            direction = 2;
        }
        if (key.input.left && direction !== 1) {
            direction = 3;
        }
        move();
    };

    const render = (screen) => {
        screen.ctx.beginPath();
        screen.ctx.lineCap = "round";
        screen.ctx.lineJoin = "round";
        screen.ctx.lineWidth = width;
        screen.ctx.strokeStyle = "red";
        let start = chunks[0];
        screen.ctx.moveTo(start.x, start.y);
        for (let i = 1; i < chunks.length; i++) {
            screen.ctx.lineTo(chunks[i].x, chunks[i].y);
        }
        screen.ctx.stroke();
    };

    return {
        update,
        render,
        collision,
        grow
    }
};

export default Snake;
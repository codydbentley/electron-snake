
import Section from './Section';

const Snake = (key) => {

    let direction = Math.floor(Math.random() * 4);

    let sections = [];
    sections.push(new Section(250, 250));
    let size = 5;

    const move = () => {
        console.log(direction);
        if (sections.length === size) {
            sections.pop();
        }
        let head = sections[0];
        let dx = head.x;
        let dy = head.y;
        if (direction === 0) dy -= head.size;
        if (direction === 1) dx += head.size;
        if (direction === 2) dy += head.size;
        if (direction === 3) dx -= head.size;
        sections.unshift(new Section(dx, dy));
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
        sections.forEach(section => {
            section.render(screen);
        })
    };

    return {
        update,
        render
    }
};

export default Snake;
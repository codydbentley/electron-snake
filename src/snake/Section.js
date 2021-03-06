
const Section = (x, y) => {

    const render = (screen) => {
        screen.ctx.fillStyle = color;
        screen.ctx.fillRect(x, y, size, size);
    };

    return {
        x,
        y,
        update,
        render,
    }

};

export default Section;
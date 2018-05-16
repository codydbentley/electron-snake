
const Section = (x, y) => {

    let color = "red";
    let size = 10;

    const render = (screen) => {
        screen.ctx.fillStyle = color;
        screen.ctx.fillRect(x, y, size, size);
    };

    return {
        x,
        y,
        size,
        render,
    }

};

export default Section;
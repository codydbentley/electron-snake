
const Food = (x, y, size) => {

    const render = (screen) => {
        screen.ctx.fillStyle = "green";
        screen.ctx.fillRect(x, y, size, size);
    };

    return {
        x,
        y,
        size,
        render
    }
};

export default Food;
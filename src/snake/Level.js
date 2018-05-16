
const Level = (w, h) => {

    const render = (screen) => {
        screen.ctx.fillStyle = "black";
        screen.ctx.fillRect(0, 0, w, h);
    };

    return {
        render
    }
};

export default Level;
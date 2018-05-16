
const Screen = (w, h) => {
    let canvas;
    let context;

    canvas = document.createElement('canvas');
    canvas.style.display = 'block';
    canvas.width = w;
    canvas.height = h;
    context = canvas.getContext('2d');
    document.body.insertBefore(canvas, document.body.childNodes[0]);

    const clear = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    };

    return {
        clear,
        ctx: context
    }
};

export default Screen;

import Food from './Food';

const Level = (w, h) => {

    let player;
    let foodSize = 15;
    let food = null;

    const spawnFood = () => {
        let x = Math.floor(Math.random() * 480) + 10;
        let y = Math.floor(Math.random() * 480) + 10;
        if (!player.collision(x, y, foodSize)) {
            food = new Food(x,y, foodSize);
            console.log(food.x + " " + food.y);
        }
    };

    const addPlayer = (entity) => {
        player = entity;
    };

    const update = () => {
        while (food === null) {
            spawnFood();
        }
        if (player.collision(food.x, food.y, food.size)) {
            food = null;
            player.grow();
        }
    };

    const render = (screen) => {
        screen.ctx.fillStyle = "black";
        screen.ctx.fillRect(0, 0, w, h);
        if (food !== null) {
            food.render(screen);
        }
    };

    return {
        addPlayer,
        update,
        render
    }
};

export default Level;
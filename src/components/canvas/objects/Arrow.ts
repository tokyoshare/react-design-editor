import { fabric } from 'fabric';

const Arrow = fabric.util.createClass(fabric.Line, {
    type: 'arrow',
    superType: 'drawing',
    initialize(points: any, options: any) {
        options = options || {};
        this.callSuper('initialize', points, options);
    },
    _render(ctx: CanvasRenderingContext2D) {
        this.callSuper('_render', ctx);
        ctx.save();
        const xDiff = this.x2 - this.x1;
        const yDiff = this.y2 - this.y1;
        const angle = Math.atan2(yDiff, xDiff);
        ctx.translate((this.x2 - this.x1) / 2, (this.y2 - this.y1) / 2);
        ctx.rotate(angle);
        ctx.beginPath();
        // Move 5px in front of line to start the arrow so it does not have the square line end showing in front (0,0)
        ctx.moveTo(5, 0);
        ctx.lineTo(-5, 5);
        ctx.lineTo(-5, -5);
        ctx.closePath();
        ctx.fillStyle = this.stroke;
        ctx.fill();
        ctx.restore();
    },
});

Arrow.fromObject = (options: any, callback: any) => {
    return callback(new Arrow(options));
};

export default Arrow;

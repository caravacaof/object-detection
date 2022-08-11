export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {
        // Get prediction results
        const [x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        // styling
        const color = 'yelllow';
        ctx.strokeStyle= color
        ctx.font = '18px Arial'
        ctx.fillStyle = color

        // Draw 
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()

    });
}
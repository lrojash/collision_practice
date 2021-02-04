class Square extends GameObject
{
    constructor (context, x, y, vx, vy, mass){
        super(context, x, y, vx, vy, mass);

        //Set default width and height
        this.width = 50;
        this.height = 50;
    }

    draw(){
        //Draw a simple square
        // this.context.fillStyle = this.isColliding?'#ff8080':'#0099b0';
        this.context.fillStyle = "#ff8080"
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }

    update(secondsPassed, reverse){
        //Move with set velocity
        if (reverse) {
            console.log('reached inside of update: ', this.x)
            this.x -= this.vx * secondsPassed;
            this.y -= this.vy * secondsPassed;
        }
        this.x += this.vx * secondsPassed;
        this.y += this.vy * secondsPassed;
    }
}
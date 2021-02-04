
class GameWorld {

    constructor(canvasId) {
        this.canvas = null
        this.context = null
        this.oldTimeStamp = 0
        this.gameObjects = []
        this.resetCounter = 0

        this.init(canvasId)
    }

    init(canvasId) {
        this.canvas = document.getElementById(canvasId)
        this.context = this.canvas.getContext('2d')

        this.createWorld()

        window.requestAnimationFrame((timeStamp) => {
            this.gameLoop(timeStamp)
        })
    }

    createWorld() {
        this.gameObjects = [
            new Square(this.context, 200, 300, 0, 50),
            // new Square(this.context, 500, 300, 0, 50)
        ]
    }
    gameLoop(timeStamp) {
        let secondsPassed = (timeStamp - this.oldTimeStamp) / 1000
        this.oldTimeStamp = timeStamp

        this.clearCanvas()
        let reverse = this.reachedEnd()
        console.log('after setting reverse: ', reverse)
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].update(secondsPassed, reverse)
            console.log('inside for loop: ', this.gameObjects[0].y)
        }

        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].draw()
        }

        window.requestAnimationFrame((timeStamp) => this.gameLoop(timeStamp))
    }
    reachedEnd() {
        let bottom = this.canvas.height
        if (this.gameObjects[0].y >= 600) {
            return true
        }
        return false
    }
    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

}
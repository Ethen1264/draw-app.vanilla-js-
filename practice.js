const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d") // 그림을 그릴 때 사용하는 변수
canvas.width = 800
canvas.height = 800

ctx.fillRect(400, 200, 50, 200)
ctx.fillRect(600, 200, 50, 200)
ctx.lineWidth = 2
ctx.strokeRect(500, 300, 50, 100)
ctx.fillRect(400, 200, 200, 20)
ctx.moveTo(400, 200)
ctx.lineTo(525,100)
ctx.lineTo(650,200)
ctx.fill()

ctx.beginPath()

ctx.fillRect(210 - 40,200 - 30, 12,100)
ctx.fillRect(350 - 40,200 - 30, 12,100)
ctx.fillRect(260 - 40,200 - 30, 60,200)

ctx.arc(250, 100, 50, 0, 2 * Math.PI) 
ctx.fill()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI) 
ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI) 
ctx.fill()
const modeBtn = document.getElementById("mode-btn")
const destroyBtn = document.getElementById("destroy-btn")
const eraserBtn = document.getElementById("eraser-btn")
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
)
const color = document.getElementById("color")
const lineWidth = document.getElementById("line-width")
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d") // 그림을 그릴 때 사용하는 변수

const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 800

canvas.width = CANVAS_WIDTH
canvas.height = CANVAS_HEIGHT
ctx.lineWidth = lineWidth.value
let isPainting = false
let isFilling = false
function onMove(event){
  if(isPainting) {
    ctx.lineTo(event.offsetX, event.offsetY)
    ctx.stroke()
    return
  }
  ctx.moveTo(event.offsetX, event.offsetY)
}
function onMouseDown() {
  isPainting = true
}
function onMouseUp() {
  isPainting = false
  ctx.beginPath()
}
function onLineWidthChange(event){
  ctx.lineWidth = event.target.value
}

function onColorChange(event){
  ctx.strokeStyle = event.target.value
  ctx.fillStyle = event.target.value
}

function onColorClick(event) {
  const colorValue = event.target.dataset.color
  ctx.strokeStyle = colorValue
  ctx.fillStyle = colorValue
  color.value = colorValue
}
function onModeClick(){
  if(isFilling){
    isFilling = false
    modeBtn.innerText = "Fill"
  } else {
    isFilling = true
    modeBtn.innerText = "Draw"
  }
}

function onCanvasClick() {
  if(isFilling){
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
  }
}

function onDestroyClick() {
  ctx.fillStyle = 'white'
  ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
}

function onEraserClick() {
  ctx.strokeStyle = "white"
  isFilling = false
  modeBtn.innerText = "Fill"
}

canvas.addEventListener("mousemove", onMove)
canvas.addEventListener("mousedown", onMouseDown)
canvas.addEventListener("mouseup", onMouseUp)
canvas.addEventListener("mouseleave", onMouseUp)

canvas.addEventListener("click", onCanvasClick)
lineWidth.addEventListener("change", onLineWidthChange)
color.addEventListener("change", onColorChange)

colorOptions.forEach(color => color.addEventListener("click", onColorClick))

modeBtn.addEventListener("click", onModeClick)
destroyBtn.addEventListener("click", onDestroyClick)
eraserBtn.addEventListener("click", onEraserClick)
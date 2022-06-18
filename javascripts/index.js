console.log("hi")
document.addEventListener('DOMContentLoaded', () => {
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()
})

})

function addWorkouts(){
// const createWorkout = document.querySelector("submit")
// createWorkout.addEventListener("submit", event){
    
// }
fetch("http://localhost:3000/workouts")
    .then (response => response.json())
    .then (data => { 
        data.forEach(workout => showWorkouts(workout))
    })
}
addWorkouts()
function showWorkouts(workout){
    const workoutCollection = document.getElementById("workout_collection")
    const div = document.createElement("div")
    div.classList.add("card")
    const h2 = document.createElement("h2")
    h2.textContent = workout.exercise
    const img = document.createElement("img")
    img.src = workout.image
    img.classList.add("exercise-image")
    const h3 = document.createElement("h3")
    h3.textContent = workout.target
    div.append(h2, img, h3)
    workoutCollection.append(div)
}

// function callBackFunction(e){
//     console.log(e, "it works")
//     submit.preventDefault()
//     submit.addEventListener("click", event => callBackFunction(event));
// }

document.addEventListener("change", event =>{
    if(event.target.matches("#muscle-group")){
        const ul = document.getElementById("create_workout")
        ul.innerHTML = ""
        const filterWorkout = workouts.filter(workout => workout.target[0] === event.target.value)
 
        addWorkouts(filterWorkout)
    }
    })

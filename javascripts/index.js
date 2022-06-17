console.log("hi")
function addWorkouts(){
// const createWorkout = document.querySelector("submit")
// createWorkout.addEventListener("submit", event){
    
// }
fetch("http://localhost:3000/workouts")
    .then (response => response.json())
    .then (data => { data.forEach(workout => showWorkouts(workout))
       
       
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
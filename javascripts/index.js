let workouts=[];

function addWorkouts(){
fetch("http://localhost:3000/workouts")
    .then (response => response.json())
    .then (data => { 
        workouts= data;
        workouts.forEach(workout => showWorkouts(workout))
        
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

document.addEventListener("change", event =>{
    if(event.target.matches("#primary")){
        const filterWorkouts = workouts.filter(workout => workout.target === event.target.value)
        document.getElementById("workout_collection").innerHTML= "";
        filterWorkouts.forEach(workout=> {
        showWorkouts(workout)
       }) 
    }
    })
    document.addEventListener("change", event =>{
        if(event.target.matches("#secondary")){
          const filterWorkouts = workouts.filter(workout => workout.target === event.target.value)
           filterWorkouts.forEach(workout=> {
            showWorkouts(workout)
           })    
        }
        })
        document.addEventListener("click", event => {
            if (event.target.matches("div")) {
                console.log(event)
                event.target.style.color = "red"
            }
        })
     document.addEventListener("mouseover", event => {
         if (event.target.matches("h2")) {
         console.log(event)
            event.target.style.color= "red";
         }
            setTimeout(function() {
              event.target.style.color = "";
            }, 500);
          }, false);
        
        
     
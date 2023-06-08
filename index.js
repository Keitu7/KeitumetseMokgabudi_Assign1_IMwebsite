function getReference() {
//Getting the element image//
let newreference = document.getElementById("reference");


//Create an Array for the list of refrences//
let references = [];

//Setting the images//
references[0] = "Photo by AXP Photography on Unsplash";

references[1] = "Photo by Artem Stoliar on Unsplash";

references[2] = "Photo by 10bits Studio on Unsplash";

references[3] = "Photo by Eugene Golovesov on Unsplash";

references[4] = "Photo by NEOM on Unsplash";

references[5] = "Photo by Anita Austvika on Unsplash";

//Randomly calling each image referecne name//
let i = Math.floor(Math.random() * references.length);

//Setting the new refrence in//
newreference.innerHTML = references[i];
}
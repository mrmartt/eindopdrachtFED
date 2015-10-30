// selecteer de fieldset die we aan en uit willen zetten
var Projectradiobutton = document.querySelector('main form fieldset:nth-of-type(3)');
var Stageradiobutton = document.querySelector('main form fieldset:nth-of-type(4)');


// hide deze fieldset
Projectradiobutton.classList.add('is-invisible');
Stageradiobutton.classList.add('is-invisible');


// select first radio button you can find
document.getElementById("projectradiobutton").onclick = function() {
Projectradiobutton.classList.add('is-visible'),
Stageradiobutton.classList.remove('is-visible');
}

// select last radio button you can find
document.getElementById("stageradiobutton").onclick = function() {
Projectradiobutton.classList.remove('is-visible'),
Stageradiobutton.classList.add('is-visible');
}

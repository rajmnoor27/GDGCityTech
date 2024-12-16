
function handleSubmit(event){
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let emplID = document.getElementById('firstName').value;
    let cityTechEmail = document.getElementById('cityTechEmail').value;
    let cunyLoginEmail = document.getElementById('cunyLoginEmail').value;
    let major = document.getElementById('major').value;
    let academicYear = document.querySelector('input[name="academicYear"]:checked').value;

    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`EMPLID: ${emplID}`);
    console.log(`City Tech Email: ${cityTechEmail}`);
    console.log(`Cuny Login Email: ${cunyLoginEmail}`);
    console.log(`Major: ${major}`);
    console.log(`Academic Year: ${academicYear}`);

    window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=oMkuJSyh-Um6ZihiTe_VcaYFYUwX07RMlgBfgalFE6tUM1UzWFZLTkk4STNSRkJDMTJNRzZRS085QS4u", '_blank'); 
}


const images = [
    'img/IMG_2263.jpeg',
    'img/IMG_2299.jpeg',
    'img/IMG_3808.jpeg',
    'img/IMG_3902.jpeg',
    'img/IMG_4108.jpeg'
]

let currentIndex = 0;

function changeImage(direction){
    currentIndex += direction;
    if(currentIndex < 0) currentIndex = images.length - 1;
    if(currentIndex >= images.length) currentIndex = 0;

    document.getElementById('image').src = images[currentIndex];
}


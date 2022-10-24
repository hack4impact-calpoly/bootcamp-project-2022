
const face = document.querySelector('.logo');
let button_count = 0;

face.addEventListener('click', () => 
{
    if (button_count < 3){
        face.width = face.width * 1.1;
        face.height = face.height * 1.1;
        button_count +=1;
    }
    else{
        face.width = face.width * 2;
        face.height = face.height * 2;
    }

}
)
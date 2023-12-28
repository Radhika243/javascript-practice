const input = document.getElementById('input');
const button = document.getElementById('btn');

if(input.value !== ''){
    button.disabled = false;
}else{
    button.disabled=true;
}

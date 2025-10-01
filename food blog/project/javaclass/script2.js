function greetuser(){
    const name = document.getElementById('inputname').value;
    const message = "hello " +  name  + " dear";
    document.getElementById('greeting').textContent=message;
}
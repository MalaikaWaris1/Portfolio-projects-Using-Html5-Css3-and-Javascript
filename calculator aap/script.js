let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    let btn = e.target.innerHTML;

    if (btn == '=') {
      try {
        // Replace ^ with ** for JS eval
        string = string.replace(/\^/g, "**");
        string = eval(string);
        document.querySelector('input').value = string;
      } catch {
        document.querySelector('input').value = "Error";
        string = "";
      }
    }
    else if (btn == 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    else if (btn == 'DEL') {
      string = string.slice(0, -1);
      document.querySelector('input').value = string;
    }
    else {
      string = string + btn;
      document.querySelector('input').value = string;
    }
  });
});


const items = document.querySelectorAll('.ingredient');

items.forEach(item => {
    item.addEventListener('click', function() {
        if (this.style.textDecoration === 'line-through') {
            this.style.textDecoration = 'none';
            this.style.color = "#fff";
            this.style.backgroundColor = "#525d9c";
        } else {
            this.style.textDecoration = 'line-through';
            this.style.color = "#C8C8C8";
            this.style.backgroundColor = "#eff2fd";
        }
    });
});
  
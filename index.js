const buttons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");

buttons.forEach(function (btn) {
    btn.onclick = function () {
        // убираем active у всех
        buttons.forEach(b => b.classList.remove("active"));
        panels.forEach(p => p.classList.remove("active"));

        // добавляем нужным
        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    };
});
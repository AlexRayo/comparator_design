var range = document.getElementById('money_range'), rangeV = document.getElementById('range_v'), btn_compare = document.getElementById('btn_compare'), spinner = document.getElementById('spinner'), bar_progress = document.getElementById('progress_bar'), back_btn = document.getElementById('btn_back'), final_title = document.getElementById('final_title'), setValue = function () {
    var newValue = Number((range.value - range.min) * 100 / (range.max - range.min)), newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = "<span style=\"\">" + range.value + " \u20AC</span>";
    rangeV.style.left = "calc(" + newValue + "% + (" + newPosition + "px))";
    document.getElementById('range-fill').style.width = "calc(" + newValue + "% + (" + newPosition + "px))";
};
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue);
function compareNow() {
    spinner.classList.add("d-block");
    bar_progress.classList.add("d-none");
    back_btn.classList.add("d-none");
    btn_compare.classList.add("d-none");
    final_title.innerHTML = "Estamos buscando tu mejor oferta...";
}
function changeRange() {
    var width = 500;
    var percent = range.value * 10;
    if (percent > 95)
        percent -= 5;
    if (percent < 5)
        percent += 5;
    document.getElementById('range-fill').style.width = percent + '%';
}
document.onload = changeRange();
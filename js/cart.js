var come = document.getElementById('come');
var leave = document.getElementById('leave');
var form_date = document.getElementById('form-date');
var count_day = document.getElementById('count-day');
var price = document.getElementById('price1');
//Lấy id rồi chuyển sang int để tính rồi sang string để format
var priceInt = parseInt(price.innerText) * 1000;
// console.log(formatCash(priceInt));
var qty = document.getElementById('qty');
var price_old = document.getElementById('price-old');
var total = document.getElementById('total');
form_date.addEventListener('change', function () {
    console.log(come.value);
    console.log(leave.value);
    let day_start = new Date(come.value);
    console.log(day_start.toUTCString());
    let day_end = new Date(leave.value);
    console.log(day_end.toUTCString());
    let time = get_day_of_time(day_start, day_end)
    console.log(time + ' day');
    count_day.innerHTML = '<b>' + time + '</b>';
    price_old.innerHTML = formatCash(String(priceInt));
    console.log(price_old.innerText);
    let qty_new = qty.value;
    console.log(qty_new);
    let total_str = formatCash(String(priceInt * time * qty_new));
    total.innerHTML = total_str;
    console.log(total_str);

})
const get_day_of_time = (d1, d2) => {
    let ms1 = d1.getTime();
    let ms2 = d2.getTime();
    result = Math.ceil((ms2 - ms1) / (24 * 60 * 60 * 1000));
    if (result < 0) {
        return 0;
    }
    return result;
    // Hàm làm tròn xuống Math.floor
};
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    })
}
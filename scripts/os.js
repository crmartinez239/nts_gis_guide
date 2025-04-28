const osSelect = document.getElementById("select-os");
const windows = document.getElementById("extract-windows");
const chromeos = document.getElementById("extract-chromeos");
const mac = document.getElementById("extract-mac");

osSelect.addEventListener("change", () => {
    if (osSelect.value === "windows") {
        windows.style.display = "block";
        chromeos.style.display = "none";
        mac.style.display = "none";
    } else if (osSelect.value === "chromeos") {
        windows.style.display = "none";
        chromeos.style.display = "block";
        mac.style.display = "none";
    } else {
        windows.style.display = "none";
        chromeos.style.display = "none";
        mac.style.display = "block";
    }
})
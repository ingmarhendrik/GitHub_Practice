
     function triggerDropDown(Id) {
        var dropdown = document.getElementById(Id);
        if (dropdown.style.display === "none") {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    }
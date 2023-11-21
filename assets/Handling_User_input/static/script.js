class formValidation{
    constructor(formName) {
        this.form = document.forms[formName];
        this.name = this.form.elements.namedItem('name');
        this.nameError = document.getElementById("text_error");
    }

    validateInput() {
        if (this.name.value.trim() === "") {
            this.nameError.innerHTML = "Please enter your name";
            this.name.focus();
            return false;
        }
        this.nameError.innerHTML = "";
        return true;
    }

    submitform() {
        this.form.submit();
    }
}

window.onload = function () {
    document.getElementById("submitForm").addEventListener("click", function () {
        var form = new formValidation("userInput");
        if (form.validateInput())
        {
            form.submitform();
        }
    });
}
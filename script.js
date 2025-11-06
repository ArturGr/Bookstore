const DATA_ARRAY = [];
let myDataLocal = [];

function init() {
    data_import();
    checking_data();
    template_main_container();
    template_section_book_title();
    template_section_book_img();
    template_section_book_details();
    template_section_book_comments();
}

function data_import() {
    getFromLocalStorage();
    if (myDataLocal.length > 0) {
        for (let i = 0; i < myDataLocal.length; i++) {
            DATA_ARRAY.push(myDataLocal[i]);
        }
    } else {
        for (let i = 0; i < books.length; i++) {
            DATA_ARRAY.push(books[i]);
        }
    }
}

function checking_data() {
    if (DATA_ARRAY.length == 0) {
        return console.log("Error: data array is empty.")
    }
}

function sending_comment(index) {
    let COMMENT = document.getElementById(`comment_input_id${index}`);
    if (COMMENT.value.trim() == 0) {
        return console.log("Error: cannot send empty comment.");
    }
    DATA_ARRAY[index].comments.push({
        "name": "Leser",
        "comment": `${COMMENT.value.trim()}`
    });
    COMMENT.value = "";
    saveData();
    template_table_for_section_book_comments(index);
}

function saveData() {
    if (myDataLocal != null) {
        saveToLocalStorage();
    } else {
        return console.log("Data saving error");
    }
}

function saveToLocalStorage() {
    localStorage.setItem("myDataLocal", JSON.stringify(DATA_ARRAY));
}

function getFromLocalStorage() {
    let myData = JSON.parse(localStorage.getItem("myDataLocal"));

    if (myData == null) {
        return;
    }
    myDataLocal = myData;
}

function like(index) {
    DATA_ARRAY[index].liked = true;
    DATA_ARRAY[index].likes += 1;
    saveData();
    template_section_book_details();
}

function unlike(index) {
    const LIKES_AMOUNT = DATA_ARRAY[index].likes;
    DATA_ARRAY[index].liked = false;
    DATA_ARRAY[index].likes = MaxValue(LIKES_AMOUNT);
    if (FAVORITE_CHECKBOX_REF.checked) {
        document.getElementById(`id${index}`).style.display = "none";
    }
    saveData();
    template_section_book_details();
}

function MaxValue(value) {
    const RESULT = value - 1;
    if (RESULT > 0) {
        return RESULT;
    } else {
        return 0;
    }
}

const FAVORITE_CHECKBOX_REF = document.getElementById("checkboxID0");
FAVORITE_CHECKBOX_REF.addEventListener('change', favorite_data_filter);

function favorite_data_filter() {
    if (FAVORITE_CHECKBOX_REF.checked) {
        for (let i = 0; i < DATA_ARRAY.length; i++) {
            if (!DATA_ARRAY[i].liked) {
                document.getElementById(`id${i}`).style.display = "none";
            }
        }
    } else {
        for (let i = 0; i < DATA_ARRAY.length; i++) {
            document.getElementById(`id${i}`).style.display = "";
        }
    }
}

const MAIN_CONTAINER_REF = document.getElementById("main_container");
MAIN_CONTAINER_REF.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (event.target.tagName === 'INPUT' && event.target.id.startsWith('comment_input_id')) {
            event.preventDefault();
            const indexString = event.target.id.replace('comment_input_id', '');
            const index = parseInt(indexString);
            sending_comment(index);
        }
    }
});

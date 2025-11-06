const DATA_ARRAY = [];
let myDataLocal = [];
const FAVORITE_CHECKBOX_REF = document.getElementById("checkboxID0");
const MAIN_CONTAINER_REF = document.getElementById("main_container");

function init() {
    dataImport();
    checkingData();
    mainContainer();
    sectionBookTitle();
    sectionBookImg();
    sectionBookDetails();
    sectionBookComments();
}

function dataImport() {
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

function checkingData() {
    if (DATA_ARRAY.length == 0) {
        return console.log("Error: data array is empty.")
    }
}

function mainContainer() {
    const MAIN_CONTAINER_REF = document.getElementById("main_container");
    MAIN_CONTAINER_REF.innerHTML = "";
    for (let i = 0; i < DATA_ARRAY.length; i++) {
        MAIN_CONTAINER_REF.innerHTML += BOOK_WINDOW_TEMPLATE(i);
    }
}

function sectionBookTitle() {
    for (let i = 0; i < DATA_ARRAY.length; i++) {
        let section_book_title_ref = document.getElementById(`book_title_id${i}`);
        section_book_title_ref.innerHTML = "";
        section_book_title_ref.innerHTML += BOOK_TITLE(i);
    }
}

function sectionBookImg() {
    for (let i = 0; i < DATA_ARRAY.length; i++) {
        let section_book_img_ref = document.getElementById(`book_img_id${i}`);
        section_book_img_ref.innerHTML = "";
        section_book_img_ref.innerHTML += BOOK_IMG();
    }
}

function sectionBookDetails() {
    for (let i = 0; i < DATA_ARRAY.length; i++) {
        let section_book_details_ref = document.getElementById(`book_details_id${i}`);
        section_book_details_ref.innerHTML = "";
        section_book_details_ref.innerHTML += LikesForSectionBookDetails(i);
        tableForSectionBookDetails(i);
    }
}

function LikesForSectionBookDetails(index) {
    let favIcon;
    if (DATA_ARRAY[index].liked) {
        favIcon = UNLIKE_ICON_TEMPLATE(index);
    } else {
        favIcon = LIKE_ICON_TEMPLATE(index);
    }
    return BOOK_DETAILS_CONTENT_TEMPLATE(
        DATA_ARRAY[index].price,
        DATA_ARRAY[index].likes,
        favIcon
    );
}

function tableForSectionBookDetails(index) {
    const section_book_details_table_ref = document.getElementById(`book_details_id${index}`);
    section_book_details_table_ref.innerHTML += TABLE_BOOK_DETAILS(index);
}

function sectionBookComments() {
    for (let i = 0; i < DATA_ARRAY.length; i++) {
        let section_book_comments_ref = document.getElementById(`book_comments_id${i}`);
        section_book_comments_ref.innerHTML = "";
        section_book_comments_ref.innerHTML += BOOK_COMMENTS(i);
        tableForSectionBookComments(i);
    }
}

function tableForSectionBookComments(index) {
    const section_book_comments_table_ref = document.getElementById(`book_comments_table_id${index}`);
    section_book_comments_table_ref.innerHTML = "";
    section_book_comments_table_ref.innerHTML += BOOK_COMMENTS_TABLE(index);
    for (let i = 0; i < DATA_ARRAY[index].comments.length; i++) {
        let section_comments_table_ref = document.getElementById(`comment_table_id${index}`)
        section_comments_table_ref.innerHTML += BOOK_COMMENTS_TABLE_BODY(index, i);
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
    tableForSectionBookComments(index);
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
    sectionBookDetails();
}

function unlike(index) {
    const LIKES_AMOUNT = DATA_ARRAY[index].likes;
    DATA_ARRAY[index].liked = false;
    DATA_ARRAY[index].likes = MaxValue(LIKES_AMOUNT);
    if (FAVORITE_CHECKBOX_REF.checked) {
        document.getElementById(`id${index}`).style.display = "none";
    }
    saveData();
    sectionBookDetails();
}

function MaxValue(value) {
    const RESULT = value - 1;
    if (RESULT > 0) {
        return RESULT;
    } else {
        return 0;
    }
}

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

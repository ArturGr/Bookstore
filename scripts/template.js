function template_main_container() {
    const MAIN_CONTAINER_REF = document.getElementById("main_container");
    MAIN_CONTAINER_REF.innerHTML = "";
    for (let i = 0; i < DATA_ARRAY.length; i++) {
        MAIN_CONTAINER_REF.innerHTML +=
            `<div id="id${i}" class="book_window">
            <section id="book_title_id${i}" class="Book_Title" tabindex="0"></section>
            <section id="book_img_id${i}" class="Book_Img"></section>
            <section id="book_details_id${i}" class="Book_Details" tabindex="0"></section>
            <section id="book_comments_id${i}" class="Book_Comments" tabindex="0"></section>
        </div>`;
    }
}

function template_section_book_title() {
    for (let i = 0; i < DATA_ARRAY.length; i++) {
        let section_book_title_ref = document.getElementById(`book_title_id${i}`);
        section_book_title_ref.innerHTML = "";
        section_book_title_ref.innerHTML += `<h2>${DATA_ARRAY[i].name}</h2>`;
    }
}

function template_section_book_img() {
    for (let i = 0; i < DATA_ARRAY.length; i++) {
        let section_book_img_ref = document.getElementById(`book_img_id${i}`);
        section_book_img_ref.innerHTML = "";
        section_book_img_ref.innerHTML +=
            `<div>
                        <img src="./assets/img/Book.png" alt="Image of book">
                    </div>`;
    }
}

function template_section_book_details() {
    for (let i = 0; i < DATA_ARRAY.length; i++) {
        let section_book_details_ref = document.getElementById(`book_details_id${i}`);
        section_book_details_ref.innerHTML = "";
        section_book_details_ref.innerHTML += template_likes_for_section_book_details(i);
        template_table_for_section_book_details(i);
    }
}

function template_likes_for_section_book_details(index) {
    let FAVICONE = `<img src="./assets/img/ToLike.png" alt="Image of like icon" tabindex="0" onclick="like(${index})">`;
    if (DATA_ARRAY[index].liked) {
        FAVICONE = `<img src="./assets/img/ToUnlike.png" alt="Image of like icon" tabindex="0" onclick="unlike(${index})">`;
    }
    return `<div>
                <p>${DATA_ARRAY[index].price.toFixed(2)} €</p>
                <div class="Book_Likes">
                    <p>${DATA_ARRAY[index].likes}</p>
                    ${FAVICONE}
                </div>
            </div>`;
}

function template_table_for_section_book_details(index) {
    const section_book_details_table_ref = document.getElementById(`book_details_id${index}`);
    section_book_details_table_ref.innerHTML +=
        `<table>
                        <tbody>
                            <tr>
                            <th>Author</th>
                            <td>: ${DATA_ARRAY[index].author}</td>
                            </tr>
                            <tr>
                            <th>Erscheinungsjahr</th>
                            <td>: ${DATA_ARRAY[index].publishedYear}</td>
                            </tr>
                            <tr>
                            <th>Genere</th>
                            <td>: ${DATA_ARRAY[index].genre}</td>
                            </tr>
                        </tbody>
                    </table>`;
}

function template_section_book_comments() {
    for (let i = 0; i < DATA_ARRAY.length; i++) {
        let section_book_comments_ref = document.getElementById(`book_comments_id${i}`);
        section_book_comments_ref.innerHTML = "";
        section_book_comments_ref.innerHTML +=
            `<div id="book_comments_table_id${i}" class="table"></div>
                    <div>
                        <input type="text" id="comment_input_id${i}" placeholder="  Schreibe dein Kommentar ..." size="30">
                        <img src="./assets/img/Sending_icon.png" alt="Image of send icon" tabindex="0" onclick="sending_comment(${i})">
                    </div>  
                    `;
        template_table_for_section_book_comments(i);
    }

}

function template_table_for_section_book_comments(index) {
    const section_book_comments_table_ref = document.getElementById(`book_comments_table_id${index}`);
    section_book_comments_table_ref.innerHTML = "";
    section_book_comments_table_ref.innerHTML +=
        `<table>
                        <caption>Kommentare:</caption>
                        <tbody id="comment_table_id${index}"></tbody>
                    </table>`;
    for (let i = 0; i < DATA_ARRAY[index].comments.length; i++) {
        let section_comments_table_ref = document.getElementById(`comment_table_id${index}`)
        section_comments_table_ref.innerHTML += `
                        <tr>
                            <th>[${DATA_ARRAY[index].comments[i].name}]</th>
                            <td>: ${DATA_ARRAY[index].comments[i].comment}</td>
                        </tr>`;
    }
}
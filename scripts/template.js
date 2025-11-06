const BOOK_WINDOW_TEMPLATE = (i) => `
    <div id="id${i}" class="book_window">
        <section id="book_title_id${i}" class="Book_Title" tabindex="0"></section>
        <section id="book_img_id${i}" class="Book_Img"></section>
        <section id="book_details_id${i}" class="Book_Details" tabindex="0"></section>
        <section id="book_comments_id${i}" class="Book_Comments" tabindex="0"></section>
    </div>
`;

const BOOK_TITLE = (i) => `
    <h2>
        ${DATA_ARRAY[i].name}
    </h2>
`;

const BOOK_IMG = () => `
    <div>
        <img src="./assets/img/Book.png" alt="Image of book">
    </div>
`;

const LIKE_ICON_TEMPLATE = (index) => 
    `<img src="./assets/img/ToLike.png" alt="Image of like icon" tabindex="0" onclick="like(${index})">`;

const UNLIKE_ICON_TEMPLATE = (index) => 
    `<img src="./assets/img/ToUnlike.png" alt="Image of unlike icon" tabindex="0" onclick="unlike(${index})">`;

const BOOK_DETAILS_CONTENT_TEMPLATE = (price, likes, favIcon) => `
    <div>
        <p>${price.toFixed(2)} €</p>
        <div class="Book_Likes">
            <p>${likes}</p>
            ${favIcon}
        </div>
    </div>
`;

const TABLE_BOOK_DETAILS = (index) => `
    <table>
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
    </table>
`;

const BOOK_COMMENTS = (i) => `
    <div id="book_comments_table_id${i}" class="table">
    </div>
    <div>
        <input type="text" id="comment_input_id${i}" placeholder="  Schreibe dein Kommentar ..." size="30">
        <img src="./assets/img/Sending_icon.png" alt="Image of send icon" tabindex="0" onclick="sending_comment(${i})">
    </div>  
`;

const BOOK_COMMENTS_TABLE = (index) => `
    <table>
        <caption>Kommentare:</caption>
        <tbody id="comment_table_id${index}"></tbody>
    </table>
`;

const BOOK_COMMENTS_TABLE_BODY = (index, i) => `
    <tr>
        <th>[${DATA_ARRAY[index].comments[i].name}]</th>
        <td>: ${DATA_ARRAY[index].comments[i].comment}</td>
    </tr>
`;
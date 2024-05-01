function search() {
    let searchText = document.getElementById("search").value;
    let text = document.getElementById("text").value;
    let highlightedText = text.replace(new RegExp(searchText, 'gi'), function(match) {
    return '<span class="highlight">' + match + '</span>';
    });
    document.getElementById("result").innerHTML = highlightedText;
}
$(function() {

    $(".shopping-item-toggle").on("click", function() {
        $(".shopping-item")
            .closet("span")
            .toggleClass("shopping-item shopping-item__checked shopping-item");
    });

    $("#addItem").on("click", function(event) {
        event.preventDefault();
        let new_item = $("#shopping-list-entry").val();
        $(".shopping-list").append(
            "<li>" +
            "<span class='shopping-item'>"+new_item+"</span>" +
            "<div class='shopping-item-controls'>" +
            "<button class='shopping-item-toggle'>" +
            "<span class='button-label'>check</span>" +
            "</button>" +
            "<button class='shopping-item-delete'>" +
            "<span class='button-label'>delete</span>" +
            "</button>" +
            "</div>" +
            "</li>");
    });

});
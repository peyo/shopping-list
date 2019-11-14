$(function() {

    // Adding items to the list.
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

    // Checking & unchecking items on the list.
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        event.preventDefault();
        let check = $(this).closest("li").children(".shopping-item")[0];
        $(check).toggleClass("shopping-item__checked");
    });

    // Deleting items on the list.
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
        event.preventDefault();
        $(this)
            .closest("li").remove("li");
    });

});
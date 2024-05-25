var currentPage = window.location.href;
if (currentPage.includes("Contact.html")) {
    document.querySelector('.header-button a').classList.add('btn-success');
}


$(function () {
  $("#includedContent").load("footer.html");
});

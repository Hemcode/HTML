(function() {
  const body = document.querySelector('body');
// TRY_CATCH_FINALLY
  try {
    body.style.backgroundColor = "green";
  } catch (e) {
    console.log(e);
  } finally {
    console.log('Hello Wolrd\n');
  }
})();

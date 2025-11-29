const PASSWORD = "LIM2026";  // <-- change this to your password

(function() {
  const userInput = prompt("This page is private. Enter password:");
  if (userInput !== PASSWORD) {
    document.body.innerHTML = "<h2 style='color:red;text-align:center;margin-top:40px;'>Access Denied</h2>";
    throw new Error("Access denied");
  }
})();

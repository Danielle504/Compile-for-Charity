  var count = 0;
  function counter() {
    while (count <= 10) {
      count += 0.01;
      document.getElementById("compile-btn").innerHTML = count;
    }
    return count;
  }

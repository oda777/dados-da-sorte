document.addEventListener("DOMContentLoaded", () => {
  const rollBtn = document.getElementById("rollBtn");

  rollBtn.addEventListener("click", () => {
    const sides = parseInt(document.getElementById("dice").value);
    let quantity = parseInt(document.getElementById("quantity").value);

    if (isNaN(quantity) || quantity < 1) quantity = 1;
    if (quantity > 100) quantity = 100; // limite

    let results = [];
    let total = 0;

    for (let i = 0; i < quantity; i++) {
      let roll = Math.floor(Math.random() * sides) + 1;
      results.push(roll);
      total += roll;
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    results.forEach(num => {
      let span = document.createElement("span");
      span.textContent = num;
      span.classList.add("dice-result");
      resultsDiv.appendChild(span);
    });

    document.getElementById("total").textContent = `Total: ${total}`;

    // Histórico
    const history = document.getElementById("history");
    const li = document.createElement("li");
    li.textContent = `${quantity}d${sides} → [${results.join(", ")}] = ${total}`;
    history.prepend(li);
  });
});

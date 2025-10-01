function rollDice() {
  const sides = parseInt(document.getElementById("dice").value);
  const quantity = parseInt(document.getElementById("quantity").value);

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
    resultsDiv.appendChild(span);
  });

  document.getElementById("total").textContent = `Total: ${total}`;


  const history = document.getElementById("history");
  const li = document.createElement("li");
  li.textContent = `${quantity}d${sides} → [${results.join(", ")}] = ${total}`;
  history.prepend(li);
}


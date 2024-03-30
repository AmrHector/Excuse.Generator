window.onload = () => {
  // Function to generate a random excuse
  let generateExcuse = () => {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];

    let subjectIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whereIndex = Math.floor(Math.random() * what.length);
    let posIndex = Math.floor(Math.random() * when.length);

    return (
      who[subjectIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whereIndex] +
      " " +
      when[posIndex] +
      "."
    );
  };

  // Function to update the HTML with the generated excuse
  let generateExcuseAndUpdateHTML = () => {
    let excuse = generateExcuse();
    document.getElementById("the-excuse").innerHTML = excuse;
  };

  // Button event listener to generate a new excuse
  document
    .getElementById("generate-excuse-btn")
    .addEventListener("click", generateExcuseAndUpdateHTML);

  // Initial generation of excuse
  generateExcuseAndUpdateHTML();
};

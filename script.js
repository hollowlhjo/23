function startQuiz() {
  try {
    const participants = parseInt(
      document.getElementById("participants").value
    );
    const winners = parseInt(document.getElementById("winners").value);
    const url = `http://www.random.org/integers/?num=${winners}&min=1&max=${participants}&col=1&base=10&format=plain&rnd=new`;
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        const winnersArray = data.trim().split("\n");
        document.getElementById(
          "results"
        ).innerHTML = `Переможці: ${winnersArray.join(", ")}`;
      })
      .catch((error) => {
        console.error("Помилка при отриманні результатів вікторини:", error);
      });
  } catch (error) {
    console.error("Неочікувана помилка:", error);
  }
}
function generatePassword() {
  try {
    const length = parseInt(document.getElementById("length").value);
    const includeDigits = document.getElementById("digits").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;

    if (!includeDigits && !includeLowercase && !includeUppercase) {
      throw new Error(
        "At least one of the digits, lowercase, or uppercase boxes must be checked."
      );
    }

    let characters = "";

    if (includeDigits) {
      characters += "0123456789";
    }

    if (includeLowercase) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (includeUppercase) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    const passwordArray = [];

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      passwordArray.push(characters.charAt(randomIndex));
    }

    const password = passwordArray.join("");
    document.getElementById(
      "password"
    ).innerHTML = `Generated Password: ${password}`;
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

class JeopardyGame {
  constructor() {
    this.categories = [];
    this.categoryQuestions = [];
  }

  async initGame() {
    await this.setCategories();
    await this.fetchQuestions();
  }

  async resetGame() {
    for (let i = 0; i < this.categoryQuestions.length; i++) {
      const categoryQuestion = this.categoryQuestions[i];
      categoryQuestion.state = 0;
      document.getElementById(
        `question-${categoryQuestion.questionId}-category-${categoryQuestion.categoryId}`
      ).innerHTML = "?";
    }
  }

  async setCategories() {
    await this.fetchCategories();
    for (let i = 0; i < this.categories.length; i++) {
      document.getElementById(`category-${i}`).innerHTML =
        this.categories[i].title.toUpperCase();
    }
  }

  async fetchCategories() {
    return await fetch(
      "https://rithm-jeopardy.herokuapp.com/api/categories?count=6"
    )
      .then((response) => response.json())
      .then((data) => {
        this.categories = data;
        return data;
      });
  }

  async fetchQuestions() {
    for (let i = 0; i < this.categories.length; i++) {
      const questionResults = await fetch(
        `https://rithm-jeopardy.herokuapp.com/api/category?id=${this.categories[i].id}`
      )
        .then((response) => response.json())
        .then((data) => {
          return data;
        });

      for (let z = 0; z < questionResults.clues.length; z++) {
        this.categoryQuestions.push({
          questionId: z,
          categoryId: i,
          state: 0,
          question: questionResults.clues[z].question,
          answer: questionResults.clues[z].answer,
        });
      }
    }
  }
}

const game = new JeopardyGame();

game.initGame();

function updateCard(question, category) {
  const cell = document.getElementById(
    `question-${question}-category-${category}`
  );
  const cellQuestion = game.categoryQuestions.find(
    (q) => q.questionId === question && q.categoryId === category
  );

  cellQuestion.state += 1;

  if (cellQuestion.state === 1) {
    cell.innerHTML = cellQuestion.question;
  } else if (cellQuestion.state === 2) {
    cell.innerHTML = cellQuestion.answer;
  }
}

function resetGame() {
  game.resetGame();
}

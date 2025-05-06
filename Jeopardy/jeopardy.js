class TriviaGameShow {
  constructor() {
    this.categories = [];
    this.categoryQuestions = [];
  }

  async initGame() {
    await this.setCategories();
    await this.fetchQuestions(this.categories);
  }

  restartGame() {
    for (let i = 0; i < this.categoryQuestions.length; i++) {
      this.categoryQuestions[i].state = 0;
      document.getElementById(
        `question-${this.categoryQuestions[i].question}-category-${this.categoryQuestions[i].category}`
      ).innerHTML = "?";
    }
  }

  async fetchQuestions(categories) {
    for (let i = 0; i < categories.length; i++) {
      const questions = await new Promise((resolve, reject) => {
        fetch(
          `https://rithm-jeopardy.herokuapp.com/api/category?id=${categories[i].id}`
        )
          .then((response) => response.json())
          .then((data) => {
            resolve(data);
          });
      });

      for (let z = 0; z < questions.clues.length; z++) {
        const clue = questions.clues[z];
        this.categoryQuestions.push({
          category: i,
          question: z,
          state: 0,
          questionText: clue.question,
          answer: clue.answer,
        });
      }
    }
  }

  async setCategories() {
    const categoryResponse = await this.fetchCategories();
    this.categories = categoryResponse;
    document.getElementById("category-one").innerHTML =
      categoryResponse[0].title.toUpperCase();
    document.getElementById("category-two").innerHTML =
      categoryResponse[1].title.toUpperCase();
    document.getElementById("category-three").innerHTML =
      categoryResponse[2].title.toUpperCase();
    document.getElementById("category-four").innerHTML =
      categoryResponse[3].title.toUpperCase();
    document.getElementById("category-five").innerHTML =
      categoryResponse[4].title.toUpperCase();
    document.getElementById("category-six").innerHTML =
      categoryResponse[5].title.toUpperCase();
  }

  async fetchCategories() {
    return await new Promise((resolve, reject) => {
      fetch(
        `https://rithm-jeopardy.herokuapp.com/api/categories?count=6` //`https://rithm-jeopardy.herokuapp.com/api/category?id=[integer]`
      )
        .then((response) => response.json())
        .then((data) => {
          resolve(data);
        });
    });
  }
}

const game = new TriviaGameShow();

game.initGame();

function updateCell(question, category) {
  const updateQuestion = game.categoryQuestions.find(
    (q) => q.question === question && q.category === category
  );

  updateQuestion.state += 1;
  if (updateQuestion.state === 1) {
    document.getElementById(
      `question-${question}-category-${category}`
    ).innerHTML = updateQuestion.questionText;
  } else if (updateQuestion.state === 2) {
    document.getElementById(
      `question-${question}-category-${category}`
    ).innerHTML = updateQuestion.answer;
  }
}

function restartGame() {
  game.restartGame();
}

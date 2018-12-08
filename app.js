const money = [
  { level: '1', amount: '100' },
  { level: '2', amount: '200' },
  { level: '3', amount: '300' },
  { level: '4', amount: '500' },
  { level: '5', amount: '1,000' },
  { level: '6', amount: '2,000' },
  { level: '7', amount: '4,000' },
  { level: '8', amount: '8,000' },
  { level: '9', amount: '16,000' },
  { level: '10', amount: '25,000' },
  { level: '11', amount: '50,000' },
  { level: '12', amount: '100,000' },
  { level: '13', amount: '250,000' },
  { level: '14', amount: '500,000' },
  { level: '15', amount: '1,000,000' }
];

const questions = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question: 'who invent Javascript?',
    correct_answer: 'Brendan Eich',
    incorrect_answers: ['James Gosling', 'Tim Berners-Lee', 'Dennis Ritchie']
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question: 'What internet protocol was documented in RFC 1459?',
    correct_answer: 'IRC',
    incorrect_answers: ['HTTP', 'HTTPS', 'FTP']
  }
];

const app = new Vue({
    el: '#lineslife',
    mounted() {
        this.shuffle();
    },
    data: {
        message: questions[0].question,        questions,
    index: 0,
        shuffledArray: []
    },
    methods: {
    currentQ() {
    return this.questions[this.index];
    },
    possibleAnswers(idx) {
                return this.shuffledArray[idx];
        },
        shuffle() {
                const tempArr = [
                this.currentQ().correct_answer,
                ...this.currentQ().incorrect_answers
                                    ];
                    this.shuffledArray = _.shuffle(tempArr);
                }
    }
});
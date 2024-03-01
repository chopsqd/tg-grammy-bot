const {Random} = require('random-js')
const questions = require('./questions.json')

const getRandomQuestion = (topic) => {
    const random = new Random()
    let questionTopic = topic.toLowerCase()
    const questionsKeys = Object.keys(questions)

    if(questionTopic === 'случайный вопрос') {
        questionTopic = questionsKeys[random.integer(0, questionsKeys.length - 1)]
    }

    const randomIdx = random.integer(0, questions[questionTopic].length - 1)

    return {
        question: questions[questionTopic][randomIdx],
        questionTopic
    }
}

const getCorrectAnswer = (topic, id) => {
    const question = questions[topic].find(q => q.id === id)

    if (!question.hasOptions) {
        return question.answer
    }

    return question.options.find(option => option.isCorrect).text
}

module.exports = {
    getRandomQuestion,
    getCorrectAnswer
}

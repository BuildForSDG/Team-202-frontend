import React from 'react'
import Questionnaire from './Questionnaire'

const Survey = () => {
  const surveyQuestions = [
    {
      question: 'Little interest or pleasure in doing things',
      options: [
        'Not at all',
        'Several days',
        'More than half the days',
        'Nearly every day',
      ],
      id: 1,
    },
    {
      question: 'Little interest or pleasure in doing things',
      options: [
        'Not at all',
        'Several days',
        'More than half the days',
        'Nearly every day',
      ],
      id: 2,
    },
    {
      question: 'Little interest or pleasure in doing things',
      options: [
        'Not at all',
        'Several days',
        'More than half the days',
        'Nearly every day',
      ],
      id: 3,
    },
  ]
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl bg-white shadow-md p-8">
        <div>
          <h1>Help us to help you</h1>
        </div>
        <div>
          <ol>
            {surveyQuestions.map((item) => (
              <li key={item.id}>
                <hr className="my-2" />
                <Questionnaire surveyItem={item} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Survey

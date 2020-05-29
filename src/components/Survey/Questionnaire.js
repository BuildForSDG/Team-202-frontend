/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'

const Questionnaire = ({ surveyItem }) => {
  return (
    <div>
      <div>
        <label className="block mb-3 text-">{surveyItem.question}</label>
        {surveyItem.options.map((opt) => (
          <button
            className="p-1 px-2 rounded-full shadow focus:shadow-none m-1 text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white"
            key={opt._id}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

Questionnaire.prototype = {
  surveyItem: PropTypes.array.isRequired,
}

export default Questionnaire

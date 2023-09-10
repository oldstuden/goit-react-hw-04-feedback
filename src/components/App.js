import { useState } from 'react';
import { Wrapper } from './Wrapper.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { StatisticEmpty } from './StatisticEmpty';
import { Statistics } from './Statistic/Statistic';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [good, setGood] = useState(
    () => JSON.parse(window.localStorage.getItem('good')) ?? 0
  );
  const [neutral, setNeutral] = useState(
    () => JSON.parse(window.localStorage.getItem('neutral')) ?? 0
  );
  const [bad, setBad] = useState(
    () => JSON.parse(window.localStorage.getItem('bad')) ?? 0
  );
  const handleClick = value => {
    switch (value) {
      case 'good':
        setGood(prev => {
          const newValue = prev + 1;
          window.localStorage.setItem('good', JSON.stringify(newValue));
          return newValue;
        });
        break;

      case 'neutral':
        setNeutral(prev => {
          const newValue = prev + 1;
          window.localStorage.setItem('neutral', JSON.stringify(newValue));
          return newValue;
        });
        break;

      case 'bad':
        setBad(prev => {
          const newValue = prev + 1;
          window.localStorage.setItem('bad', JSON.stringify(newValue));
          return newValue;
        });
        break;
      default:
        return;
    }
  };
  const totalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (totalFeedback === 0) {
      return 0;
    }
    return ((good / totalFeedback) * 100).toFixed(2);
  };

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={handleClick}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            posFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <StatisticEmpty message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </Wrapper>
  );
};

import { useLocalStorage } from 'hooks/useLocalStorage';
import { Wrapper } from './Wrapper.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { StatisticEmpty } from './StatisticEmpty';
import { Statistics } from './Statistic/Statistic';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [good, setGood] = useLocalStorage(0, 'good');
  const [neutral, setNeutral] = useLocalStorage(0, 'neutral');
  const [bad, setBad] = useLocalStorage(0, 'bad');

  const handleClick = value => {
    if (value === 'good') return setGood(prev => prev + 1);
    if (value === 'neutral') return setNeutral(prev => prev + 1);
    if (value === 'bad') return setBad(prev => prev + 1);
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

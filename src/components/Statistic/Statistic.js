import { Text } from './Statistic.styled';
export const Statistics = ({ good, neutral, bad, total, posFeedback }) => {
  return (
    <div>
      <Text>Good: {good}</Text>
      <Text>Neutral: {neutral}</Text>
      <Text>Bad: {bad}</Text>
      <Text>Total: {total}</Text>
      <Text>Positive feedback: {posFeedback}%</Text>
    </div>
  );
};

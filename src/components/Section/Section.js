import { Topic } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <div>
      <Topic>{title}</Topic>
      {children}
    </div>
  );
};

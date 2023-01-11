import Card from './Card';
import useCounter from '../hooks/use-counter';

const ForwardCounter = () => {
  // state is tied here, instance-wise
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;

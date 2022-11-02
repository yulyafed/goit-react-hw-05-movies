import { useParams } from 'react-router-dom';

export const Details = () => {
  const { detailsId } = useParams();
  return <div>Now showing product with id - {detailsId}</div>;
};
  
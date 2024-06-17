import ReactLoading from 'react-loading';

const Loading = () =>{
  return (
    <div className="loading">
      <ReactLoading type="spinningBubbles" color="#59289f" height={100} width={100} />
    </div>
  );
}

export default Loading
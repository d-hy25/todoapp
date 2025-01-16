const TodoTamplate = () => {
  const box = [1,2,3,4,5];
  // const box = Array.from({length:5},(_,idx)=>{return idx+1});
  console.log(box);
  return (
    <div className="todo-template">
      <div>일정관리</div>
      {/* <div className="box-1">1</div>
      <div className="box-2">2</div>
      <div className="box-3">3</div>
      <div className="box-4">4</div>
      <div className="box-5">5</div> */}
      {
        box.map((value,idx)=>{
          return <div key={idx} className={`box-${value}`}> {value} </div>
        })
      }
    </div>
  );
};

export default TodoTamplate;
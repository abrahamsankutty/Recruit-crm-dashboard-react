const Note = () => {
  return (
    <div className="note">
      <div className="note__header">
        <div className="w-4 h-4 icon icon--file">
          <i className="bx bxs-note text-primary !text-[7px]"></i>
        </div>
        <span className="note__type">Note</span>
        <span className="note__tag">To Do</span>
      </div>
      <div className="note__content">
        Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat.
        In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem
        cupidatat.
      </div>
      <div className="note__association">
        <a href="#" className="note__association-link">
          1 Association(s)
        </a>
      </div>
      <div className="note__footer">
        <span className="note__author">
          <i className="bx bx-user-circle text-[#495057]"></i>
          <span> John Doe</span>
        </span>
        <span className="note__date">
          <i className="bx bx-time text-[#495057]"></i>
          <span>Jul 12, 2023, 11:54 am</span>
        </span>
      </div>
    </div>
  );
};

export default Note;

import SvgIcon from "@mui/material/SvgIcon";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const Todo = () => {
  return (
    <div>
      {/* 할 일 목록 부분입니다. 할 일 제목과 할 일 카드를 포함합니다. */}
      <div className="Todo">
        <div className="todo_head">
          <h3 className="todo_head_title">할 일</h3>
          <h4 className="todo_head_sub">오늘 마감 1개</h4>
          {/* 할 일 추가 버튼을 표시합니다. */}
          <section className="todo_head_icon">
            <SvgIcon component={BorderColorIcon} inheritViewBox />
          </section>
        </div>
        {/* 할 일 타임라인을 표시합니다. */}
        <div className="todo_timeline">
          <div className="todo_timeline_line"></div>
          <div className="todo_timeline_card">
            <div className="todo_timeline_line_circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todo;

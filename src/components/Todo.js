import SvgIcon from "@mui/material/SvgIcon";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/edit");
  };

  return (
    <div>
      {/* 할 일 목록 부분입니다. 할 일 제목과 할 일 카드를 포함합니다. */}
      <div className="Todo">
        <div className="todo_head">
          <h3 className="todo_head_title">할 일</h3>
          <h4 className="todo_head_sub">오늘 마감 1개</h4>
          {/* 할 일 추가 버튼을 표시합니다. */}
          <section className="todo_head_icon" onClick={handleEditClick}>
            <SvgIcon component={BorderColorIcon} inheritViewBox />
          </section>
        </div>
        {/* 할 일 타임라인을 표시합니다. */}
        <div className="todo_timeline">
          <div className="todo_timeline_line"></div>

          <div className="todo_timeline_line_circle"></div>
          <div className="todo_timeline_line_circle_on"></div>
          <div className="todo_timeline_line_circle_off"></div>

          <div className="todo_timeline_toggle">
            <div className="todo_timeline_card">
              <div className="todo_timeline_card_head">
                <div className="todo_timeline_card_title">운동</div>
                <div className="todo_timeline_card_star">
                  <StarBorderOutlinedIcon fontSize="" />
                  <StarBorderOutlinedIcon fontSize="" />
                  <StarBorderOutlinedIcon fontSize="" />
                </div>
                <div className="todo_timeline_card_time">오후 8:00</div>
              </div>
              <div className="todo_timeline_card_bottom">
                <p className="todo_timeline_card_content">
                  수건, 단백질바 챙기기
                </p>
                <div className="todo_timeline_card_tag">
                  <span className="todo_timeline_card_tag_text">건강</span>
                </div>
              </div>
            </div>

            <div className="todo_timeline_card_on">
              <div className="todo_timeline_card_head_on">
                <div className="todo_timeline_card_title_on">운동</div>
                <div className="todo_timeline_card_star_on">
                  <StarBorderOutlinedIcon fontSize="" />
                  <StarBorderOutlinedIcon fontSize="" />
                  <StarBorderOutlinedIcon fontSize="" />
                </div>
                <div className="todo_timeline_card_time_on">오후 8:00</div>
              </div>
              <div className="todo_timeline_card_bottom_on">
                <p className="todo_timeline_card_content_on">
                  수건, 단백질바 챙기기
                </p>
                <div className="todo_timeline_card_tag_on">
                  <span className="todo_timeline_card_tag_text_on">건강</span>
                </div>
              </div>
            </div>

            <div className="todo_timeline_card_off">
              <div className="todo_timeline_card_head_off">
                <div className="todo_timeline_card_title_off">운동</div>
                <div className="todo_timeline_card_star_off">
                  <StarBorderOutlinedIcon fontSize="" />
                  <StarBorderOutlinedIcon fontSize="" />
                  <StarBorderOutlinedIcon fontSize="" />
                </div>
                <div className="todo_timeline_card_time_off">오후 8:00</div>
              </div>
              <div className="todo_timeline_card_bottom_off">
                <p className="todo_timeline_card_content_off">
                  수건, 단백질바 챙기기
                </p>
                <div className="todo_timeline_card_tag_off">
                  <span className="todo_timeline_card_tag_text_off">건강</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Todo;

const Home = () => {
  return (
    <div>
      <div className="head_title">
        <h2 className="head_text">TO DO</h2>
      </div>
      <div className="calendar">
        <span className="calendar_month_week_label">3월 1주차</span>
        <span className="calendar_day_name">
          <ul>월</ul>
          <ul>화</ul>
          <ul>수</ul>
          <ul>목</ul>
          <ul>금</ul>
          <ul>토</ul>
          <ul>일</ul>
        </span>
        <span className="calendar_day_cell">
          <ul>1</ul>
          <ul>2</ul>
          <ul>3</ul>
          <ul>4</ul>
          <ul>5</ul>
          <ul>6</ul>
          <ul>7</ul>
        </span>
        <span className="calendar_dot_marked">캘린더</span>
      </div>
      <div>
        <section className="todd-list-section">할 일 목록</section>
      </div>
      <div>
        <section className="button-list-section">아이콘</section>
      </div>
    </div>
  );
};

export default Home;

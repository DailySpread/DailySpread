import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>온라인 타로</h1>
      <p>스프레드를 선택해서 리딩을 시작해보세요.</p>

      <div style={{ display: "flex", gap: 12 }}>
        <Link to="/spread">스프레드 선택</Link>
        <Link to="/reading/one">1장 바로 뽑기</Link>
      </div>
    </div>
  );
}

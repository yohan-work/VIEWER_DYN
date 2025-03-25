export interface PageType {
  id: number;
  title: string;
  content: string;
}

export const pageData: PageType[] = [
  { id: 1, title: "첫 번째 페이지", content: "첫 번째 페이지 미리보기 Data값 title title" },
  { id: 2, title: "두 번째 페이지", content: "두 번째 페이지 미리보기" },
  { id: 3, title: "세 번째 페이지", content: "세 번째 페이지 미리보기" },
  { id: 4, title: "네 번째 페이지", content: "네 번째 페이지 미리보기" },
  { id: 5, title: "다섯 번째 페이지", content: "다섯 번째 페이지 미리보기" },
  { id: 6, title: "여섯 번째 페이지", content: "여섯 번째 페이지 미리보기" },
]; 
# Jonghyun Shin — personal website

왼쪽 프로필과 오른쪽 본문으로 구성한 단일 페이지 학술 홈페이지입니다. 별도의 설치나 빌드 없이 GitHub Pages에 올릴 수 있습니다. 모든 내용은 `index.html`에 있으며, 상단 메뉴를 누르면 해당 섹션으로 스크롤됩니다.

## GitHub Pages에 올리기

1. ZIP을 압축 해제합니다.
2. GitHub의 `jong-hyun-shin` 계정에서 `jong-hyun-shin.github.io` 저장소를 만듭니다. 같은 이름의 저장소가 이미 있다면 기존 저장소를 사용합니다.
3. 압축을 푼 **폴더 안의 파일과 `assets` 폴더**를 저장소의 최상위에 업로드하고 `main` 브랜치에 커밋합니다. `index.html`이 저장소를 열었을 때 바로 보여야 합니다. ZIP 자체나 이를 감싼 상위 폴더를 업로드하지 마세요. `.nojekyll`도 포함합니다.
4. 저장소의 **Settings → Pages → Build and deployment**로 이동합니다.
5. **Source: Deploy from a branch**, **Branch: main**, **Folder: / (root)**를 선택하고 **Save**를 누릅니다.
6. 배포가 끝나면 `https://jong-hyun-shin.github.io/`에서 확인합니다. 반영에 최대 10분 정도 걸릴 수 있습니다.

GitHub 공식 안내: [사이트 만들기](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) · [게시 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

이 ZIP은 업로드할 파일만 포함하며, GitHub 계정이나 저장소에 직접 변경을 적용하지 않습니다.

## 파일 구성

| 파일 | 용도 |
| --- | --- |
| `index.html` | 왼쪽 프로필, 소개, Education, News, Publications, Services |
| `assets/style.css` | 레이아웃, 색상, 서체, 모바일·인쇄 스타일 |
| `assets/script.js` | 현재 섹션 표시와 스크롤 위치 보정 |
| `assets/CV.pdf` | 첨부한 CV 원본 |
| `assets/fonts/` | 자체 제공 서체 및 라이선스 |
| `.nojekyll` | 정적 파일을 그대로 배포하도록 지정 |

## 미리 보기와 수정

- 압축을 해제한 뒤 `index.html`을 브라우저에서 열면 바로 볼 수 있습니다.
- 소개와 이력은 `index.html`의 해당 섹션을 수정합니다. 논문은 `publication` 항목을 복사해 추가할 수 있습니다.
- CV를 갱신할 때는 `assets/CV.pdf`를 같은 파일명으로 교체합니다.
- 색상은 `assets/style.css` 맨 위 `:root`에서 변경합니다. 파란색 `#1f4e79`와 본문 색상은 CV에서 가져왔습니다.
- 갱신할 때 `index.html` 마지막의 `Updated: October 2026`도 함께 수정합니다.

## 콘텐츠와 서체

왼쪽에는 이름, 소속, CV·LinkedIn·Google Scholar 아이콘 바로가기가 있습니다. 아이콘 아래 설명 글씨는 없으며, 아이콘은 참고 이미지처럼 Scholar·CV·LinkedIn 순서의 단색 로고로 표시됩니다. 각 아이콘에 마우스를 올리면 이름이 표시됩니다. 오른쪽에는 소개글과 Education, News, Publications, Services 네 섹션을 배치했습니다. 작은 화면에서는 프로필이 본문 위에 표시됩니다.

홈페이지에는 간결한 소개와 주요 이력을 담았고, 전체 이력은 수정하지 않은 원본 `assets/CV.pdf`로 확인할 수 있습니다. News에는 CV에 기재된 논문 발표와 대학원 진학 소식만 사용했으며, 논문 소식의 날짜는 CV에서 확인되는 연도만 표시했습니다. News는 `index.html`의 `news-list`에 항목을 추가하여 갱신할 수 있습니다.

본문·제목·메뉴·날짜에는 EB Garamond를 사용합니다. 본문은 18px, 섹션 제목은 28px(모바일 26px)로 구분합니다. 각 섹션 제목은 네이비색이며, 바로 아래에 구분선이 있습니다. 논문 링크는 제목에 연결되어 있습니다. EB Garamond 폰트 파일과 SIL Open Font License가 `assets/fonts/`에 포함되어 있어 외부 폰트 서비스 없이 표시됩니다.

상단 메뉴는 해당 위치로 부드럽게 스크롤하며, 운영체제의 동작 줄이기 설정을 존중합니다. 콘텐츠와 기본 이동 링크는 JavaScript를 꺼도 동작합니다.

아이콘의 출처와 라이선스는 `assets/icons/ATTRIBUTION.txt`를 참고하세요.

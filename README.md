# 가사집 생성기
***
### 프리뷰

트와이스 : https://marshall-ku.com/twice/discography/

태연 : https://marshall-ku.tistory.com/253

***
### 준비물

1. 시간!중요
2. 가수의 로고 (혹은 원하는 이미지)
3. 앨범 커버 이미지

***
### 사용 방법
>대부분은 html에 주석으로 넣어뒀습니다.

>base.html에 각주를 제외한 한국어는 모두 변경해야 한다고 보시면 편합니다.

1. 솔로 가수이거나 컬러 코드 가사집을 만들 게 아니면 "컬러 코드가 필요하지 않으면 삭제" 아래의 내용을 삭제합니다.
2. 로고 이미지를 고르고, "로고 이미지 경로"를 로고 이미지 경로로 변경합니다.
3. 여러 국가에 앨범을 내지 않은 가수라면, "data-lang"과 "언어 목록"아래의 내용을 제거합니다.
4. .cross-fade는 앨범 목록에 있는 앨범의 이미지, 제목, 발매 일자를 담은 요소입니다. 앨범이 2개 이상이면 이 요소를 복사해서 붙여 넣습니다.
5. .cross-fade와 .tracklist-wrapper에 들어간 "앨범이름(알아보기 쉽게)"란 요소는 같은 앨범이라면 같은 이름이 들어가야 하고, 다른 앨범에 같은 이름이 사용되면 안 됩니다.
6. .tracilist-wrapper의 내용은 lyric-template.html 안에도 적혀 있습니다. html 안의 asdf를 모조리 수정하시면 됩니다.
7. data-video에 적는 내용인 비디오 ID는 유튜브 링크의 맨 마지막에 있는 숫자와 문자의 조합 (예 : https://www.youtube.com/watch?v=CfUGjK6gGgs가 비디오의 링크면 CfUGjK6gGgs가 비디오의 ID)
8. .song-list의 갯수와 .lyric의 개수는 같아야 합니다. 1번째 .song-list를 클릭하면 .lyric[data-track="1"]이 출력됩니다.
9. https://marshall-ku.github.io/lyrics/to-lyric.html 를 이용하시면 편하게 가사 작업이 가능합니다. 가사를 넣으면 자동으로 .lyric 안에 들어가야 하는 내용으로 변경되고, 클립보드에도 자동으로 복사됩니다.

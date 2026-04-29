# Anya Theme — 그리드 방식 ChatGPT 프롬프트

> **사용법**
> 1. ChatGPT Images 2.0에 아냐 참조 이미지 첨부
> 2. 아래 프롬프트 블록 복붙 → 이미지 생성
> 3. 생성된 4×4 그리드를 이미지 편집 도구로 16칸 각각 크롭
> 4. 크롭한 PNG를 `themes/anya/assets/` 에 해당 파일명으로 저장
> 5. 검증: `node scripts/validate-theme.js ./themes/anya`
>
> **크롭 후 파일명 매핑** → [크롭 매핑표](#크롭-매핑표) 참조

---

## 그리드 1 — 핵심 상태 (Core States)

> 참조 이미지: 아냐 포저(Spy x Family) 이미지 첨부

```
첨부 이미지 속 캐릭터(아냐 포저, Spy x Family)의 얼굴 특징
(핑크 투 갈래 머리, 초록 눈, 얼굴형, 피부톤)을 정확히 유지하면서,
카카오톡 이모티콘 스타일 스티커 16종을 한 장의 이미지로 만들어줘.

[출력 사양]
- 비율: 1:1 정사각형, 해상도 1024×1024 이상
- 배치: 4행 × 4열 그리드, 16칸 모두 동일 캐릭터
- 배경: 순수 흰색(#FFFFFF), 칸 사이 여백 충분히
- 각 캐릭터: 얼굴 중심 상반신, 흰색 외곽선(약 6px)으로 스티커 컷아웃 처리

[스타일]
- 치비 애니메이션 스타일 일러스트 (2D, 픽셀 아트 아님)
- 파스텔 톤 컬러 팔레트 (크림 베이지, 연한 핑크, 부드러운 민트, 채도 60% 이하)
- 따뜻하고 귀여운 분위기, 카카오 프렌즈 감성
- 표정마다 어울리는 미니 이모지(하트♥, 물방울💧, 별★, 땀💦, zzz 등) 1~2개씩 추가
- 투명 배경 처리 가능하도록 각 캐릭터 주변 흰 외곽선 유지

[16칸 표정 매핑] (좌상단부터 행 우선 순서)
1행:
  (1,1) 평온하게 쉬는 표정, 살짝 미소 - "대기중"
  (1,2) 손을 턱에 대고 생각하는 표정, 눈썹 찌푸림 - "생각중..."
  (1,3) 신나게 타이핑하는 표정, 두 손 앞으로, 눈 반짝 - "딸깍딸깍!"
  (1,4) 도구(작은 렌치)를 들고 의욕 넘치는 표정 - "뚝딱!"

2행:
  (2,1) 여러 물건을 저글링하며 당황한 표정, 눈 휘둥그레 - "바빠요!"
  (2,2) 지휘봉을 들고 당당하게 명령하는 표정 - "지시!"
  (2,3) 두 팔 번쩍 들고 기뻐 펄쩍 뛰는 표정, 별★ 반짝 - "완료!"
  (2,4) 깜짝 놀라며 ! 마크, 눈 크게 뜬 표정 - "알림!"

3행:
  (3,1) 눈 꼭 감고 푹 잠든 표정, zzz 말풍선 - "쿨쿨~"
  (3,2) 눈 반쯤 뜨고 하품하며 기지개 켜는 표정 - "기상!"
  (3,3) 팔짱 끼고 삐진 표정, 눈 가늘게, 입 삐쭉 - "흥!"
  (3,4) 호기심 있게 옆을 슬쩍 쳐다보는 표정 - "응?"

4행:
  (4,1) 양팔 번쩍 들고 허우적대며 놀란 표정 - "으아!"
  (4,2) 왼쪽으로 기울어지며 툭 찌름 당한 표정, 눈 찡그림 - "찌름!"
  (4,3) 오른쪽으로 기울어지며 툭 찌름 당한 표정, 눈 찡그림 - "찌름!"
  (4,4) 머리 위 별★ 빙글빙글, 눈이 X자, 어지러운 표정 - "띠용!"

[텍스트 스타일]
- 둥글고 통통한 한글 손글씨체
- 글자 색: 진한 갈색 또는 검정, 흰색 외곽선 2px
- 위치: 캐릭터 머리 위 또는 옆 빈 공간

[엄수 사항]
- 16칸 모든 캐릭터의 얼굴형/핑크 투 갈래 머리/초록 눈/의상은 100% 동일, 표정과 포즈만 변화
- 정확한 한글로 텍스트 렌더링 (영문 혼용 금지)
- 캐릭터 핵심 얼굴 비율(눈 사이 거리, 코-입 거리, 얼굴 윤곽)은 16칸 전체 동일하게 유지
```

---

## 크롭 매핑표

생성된 1024×1024 이미지를 4×4로 균등 분할 (각 칸 약 256×256):

| 위치 | 저장 파일명 | 용도 |
|------|------------|------|
| (1,1) | `idle.gif` | 기본 대기 |
| (1,2) | `thinking.gif` | 생각 중 |
| (1,3) | `typing.gif` | 타이핑/작업 |
| (1,4) | `building.gif` | 3+ 에이전트 |
| (2,1) | `juggling.gif` | 2+ 에이전트 |
| (2,2) | `conducting.gif` | 지휘 |
| (2,3) | `happy.gif` | 완료/기쁨 |
| (2,4) | `notification.gif` | 알림 |
| (3,1) | `sleeping.gif` | 수면 |
| (3,2) | `waking.gif` | 기상 |
| (3,3) | `error.png` | 오류 (error는 fallback이므로 선택) |
| (3,4) | `idle-look.gif` | 랜덤 아이들 |
| (4,1) | `react-drag.gif` | 드래그 반응 |
| (4,2) | `react-left.gif` | 왼쪽 클릭 |
| (4,3) | `react-right.gif` | 오른쪽 클릭 |
| (4,4) | `react-double.gif` | 더블클릭 |

> **크롭 도구 추천**
> - [iloveimg.com/split-image](https://www.iloveimg.com/split-image) → 4열 4행으로 분할
> - Photoshop / GIMP → 슬라이스 기능
> - `ffmpeg -i grid.png -vf "crop=256:256:X:Y" output.png` (X, Y는 칸별 좌표)

---

## ffmpeg 자동 크롭 명령어

그리드 이미지가 정확히 1024×1024일 때:

```bash
# grid.png 를 themes/anya/assets/ 에 저장 후 실행
cd themes/anya/assets

ffmpeg -i grid.png -vf "crop=256:256:0:0"   idle.png       # (1,1)
ffmpeg -i grid.png -vf "crop=256:256:256:0"  thinking.png   # (1,2)
ffmpeg -i grid.png -vf "crop=256:256:512:0"  typing.png     # (1,3)
ffmpeg -i grid.png -vf "crop=256:256:768:0"  building.png   # (1,4)

ffmpeg -i grid.png -vf "crop=256:256:0:256"   juggling.png   # (2,1)
ffmpeg -i grid.png -vf "crop=256:256:256:256" conducting.png # (2,2)
ffmpeg -i grid.png -vf "crop=256:256:512:256" happy.png      # (2,3)
ffmpeg -i grid.png -vf "crop=256:256:768:256" notification.png # (2,4)

ffmpeg -i grid.png -vf "crop=256:256:0:512"   sleeping.png   # (3,1)
ffmpeg -i grid.png -vf "crop=256:256:256:512" waking.png     # (3,2)
ffmpeg -i grid.png -vf "crop=256:256:512:512" error.png      # (3,3)
ffmpeg -i grid.png -vf "crop=256:256:768:512" idle-look.png  # (3,4)

ffmpeg -i grid.png -vf "crop=256:256:0:768"   react-drag.png   # (4,1)
ffmpeg -i grid.png -vf "crop=256:256:256:768" react-left.png   # (4,2)
ffmpeg -i grid.png -vf "crop=256:256:512:768" react-right.png  # (4,3)
ffmpeg -i grid.png -vf "crop=256:256:768:768" react-double.png # (4,4)
```

> PNG로 크롭된 파일을 .gif로 리네임하거나, 정적 PNG로 그대로 사용 가능.
> 검증: `node scripts/validate-theme.js ./themes/anya`

---

## theme.json 정적 PNG 사용 시 수정

크롭한 파일을 GIF 대신 PNG로 쓴다면 `themes/anya/theme.json`의 확장자 변경:

```json
"states": {
  "idle":         ["idle.png"],
  "thinking":     ["thinking.png"],
  "working":      ["typing.png"],
  "juggling":     ["juggling.png"],
  "attention":    ["happy.png"],
  "notification": ["notification.png"],
  "sleeping":     ["sleeping.png"],
  "waking":       ["waking.png"]
}
```

> 에러 상태는 `"error": { "fallbackTo": "attention" }` 유지 (happy.png 재사용)

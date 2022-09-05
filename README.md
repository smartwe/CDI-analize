# CDI-analize
청담 사이트를 분석하는 프로젝트
모든 분석 내용이 맞지 않습니다.

## 들어가면서....
<details>
  <summary>접기/열기</summary>
  청담 관계자분들 지금 만해도 찾은 보안 취약점이 여러개입니다.
  제발 해결해주세요..
</details>

<details>
  <summary><h3>목차</h3></summary>
  
  <b>[숙제-URL 분석](#숙제-URL)</b><br>
  [PersonalLog-URL 분석](#PersonalLog-URL)
  <b></b>
  
</details>

## 분석들
### 숙제-URL 분석
<details>
  <summary><b>접기/열기</b></summary>

  <https://learning.chungdahm.com/cdi/iLearning> 에 접속 후 로그인
  ![learning chungdahm com_cdi_iLearning](https://user-images.githubusercontent.com/73765768/188362396-8659bf9b-4208-4dbd-928f-090246ac5ce9.png)
  1. 여기에서 현재 숙제 버튼 클릭
  2. 창 열린걸 확인후 창 닫기
  3. 방문기록 들어가기 (윈도우OS: Ctrl + h, 맥OS: Cmd + y)
  <img width="957" alt="스크린샷 2022-09-05 13 49 17" src="https://user-images.githubusercontent.com/73765768/188362638-a92c2cc1-4aeb-4c81-adae-ae3c3e9076a2.png"><br>
  4. 위 그림에서 3번째 페이지 우클릭후 링크 복사
  5. https://il.chungdahm.com/?std_id=1234567&sem_id=123&top_cors_id=1234&cid=1234&g_seq=123456과 같은 형식으로 복사가 될 것이다.

  #### 위 링크의 분석내용
  <b>
  위 링크에서 [std_id=뒤의 부분은 학생(자신)의 id], [sem_id=뒤의 부분은 현재 학기의 id], [top_cors_id=뒤의 부분은 현재 확인 불가], [cid=뒤의 부분은 chapter id 즉 현재 챕터의 고유 id], [g_seq=뒤의 부분은 현재 숙제의 고유 id]</b>
</details>

### PersonalLog-URL 분석  
<details>
  <summary><b>접기/열기</b></summary>
  
  예로는 <https://learning.chungdahm.com/cdi/personalLog/1635080> 에서 personalLog 뒤의 숫자는 학생의 id이다.

</details>

# 📝 SwitchNote
![image](https://github.com/user-attachments/assets/a8d98bdb-c12d-4c59-894a-a477cfb5d311)
AWS에서 제공되는 AI/ML 플랫폼을 기반으로 하여 텍스트와 ppt를 자동 변환하는 웹애플리케이션 서비스로, 실생활 및 업무에서 활용이 가능하며 별도의 사용자 조작 없이 사용 가능한 발표자료 및 대본 제작 도구를 통해 일의 효율성을 향상시키고자 합니다.

---

## 목차
1. [개요](#개요)
2. [기획 소개](#기획-소개)
3. [개발 환경](#개발-환경)
4. [적용 기술](#적용-기술)
5. [기능 소개](#기능-소개)
6. [프로젝트 시연](#프로젝트-시연)
7. [기대효과 및 활용분야](#기대효과-및-활용분야)
8. [프로젝트 관리](#프로젝트-관리)
9. [개선 목표 & 보완점](#개선-목표--보완점)
10. [소감](#소감)

---

<br/>

## 개요
- **프로젝트 이름:** SwitchNote
- **개발 기간:** 2023. 03.15 ~ 2023. 11.15
- **참여 인원:** 3명 (ICT 한이음 멘토링 트랙)

<br/>

## 기획 소개
- **개발 동기 및 배경:**
  - 문서의 내용을 분배하고 정리하는 작업이나 발표 대본으로 옮기는 과정에서 소요되는 많은 시간을 절약
  - 발표 준비 과정 속 불편함을 최소화하고 소모적인 작업을 단축
  - 불필요한 시간 낭비를 줄여 사용자는 수정과 보완 작업에 더 집중해 내용의 질적 향상에 몰두
  - 태스크의 자동화를 통해 편리하게 작업을 정확도를 높이고 누락될 내용을 줄이며 진행해 일의 효율성을 향상

- **프로젝트 소개:**
  - AWS의 AI/ML 플랫폼을 활용해 텍스트와 ppt 사이의 변환을 자동화하는 웹앱 서비스 제작이 목적
  - 텍스트 입력 시 슬라이드별로 구분하여 ppt로 변환되며, ppt 업로드 시 대본으로 변환해주는 애플리케이션으로 실생활 및 업무에서 활용
  - 발표 자료 및 대본을 제작하는 도구로 별도의 사용자 조작 없이 사용이 가능
  - 사용자는 높은 수준의 자동화 기능을 경험하고 이를 통해 단순 작업에 대한 시간과 노력을 절약

- **프로젝트 특/장점:**
  - **한국어 지원**을 통해 한글 기반 AI를 사용하여 높은 정확도의 변환을 제공
  - **간편한 인터페이스**를 통해 사용자들이 몇 번의 클릭만으로 발표 자료와 대본을 제작
  - **주제별 디자인 추천**으로 PPT의 주제와 목적에 맞는 템플릿을 제공

<br/>

## 개발 환경

| **분류**                       | **도구**                                        |
|--------------------------------|------------------------------------------------|
| **IDE**                        | VSCode, IntelliJ, MySQL Workbench, DBeaver      |
| **프론트엔드**                 | React, HTML, CSS, JavaScript                    |
| **백엔드 및 API 도구**         | Spring, Postman, Python, Java, Node.js, MS-Developer API |
| **데이터베이스**               | MySQL, AWS RDS                                  |
| **클라우드 서비스 및 플랫폼**  | AWS EC2, AWS S3, AWS SageMaker, Colab           |
| **형상 관리 및 프로젝트 관리** | Git, SourceTree, Notion                         |


<br/>

## 적용 기술
- **주요 적용 기술:**
  - **프런트엔드 개발:** React 프레임워크를 통한 웹페이지 구조 정의, 사용자 인터페이스 구축
  - **백엔드 개발:** Spring 프레임워크를 통한 프론트엔드와의 상호작용, 데이터 처리 및 저장 기능 구현, AI 모델 연결
  - **데이터 처리:** MySQL과 AWS RDS를 통해 사용자 정보 저장 및 관리, 워크스페이스 정보 저장 및 관리
  - **AI 모델:** GPT API와 KoBERT를 사용하여 입력된 텍스트 분석 후 카테고리 분류, PPT 및 대본 제작에 필요한 텍스트 흐름 생성. SageMaker를 통해 LLM 모델 API 프롬프트 엔지니어링 및 모델 도출
  - **배포:** AWS EC2와 S3를 사용해 웹 애플리케이션 호스팅과 프로젝트 내부 데이터 버킷 관리
- **알고리즘**
  - **ConvertingToPPT 알고리즘:** <br/>
    > **텍스트 분할 후 PPT 할당 시나리오** <br/>
    > ```사용자가 입력한 텍스트 불러오기``` → ```GPT API 연결 후 텍스트 전처리``` → ```텍스트 분석 후 분할 처리(제목/소제목/본문 등)``` → ```PPTX 라이브러리로 텍스트를 PPT에 배분``` → ```MS-Developer API로 확장자 변환``` <br/>
    > **텍스트 기반 디자인 추천 시나리오** <br/>
    > ```사용자가 입력한 텍스트 불러오기``` → ```GPT API 연결 후 텍스트 전처리``` → ```LLM 모델로 텍스트 주요 키워드 및 연관도 높은 컬러코드 추출``` → ```추출된 키워드와 컬러코드를 KoBERT 모델에 적용해 카테고리 선정``` → ```KoBERT 가중치 조절 후 모델 고정 및 선택 확정```
  - **ScriptProducting 알고리즘:** <br/>
    > **PPT에서 텍스트 추출 시나리오** <br/>
    > ```입력받은 PPT 확장자 해제 및 변환``` → ```PPT 파일 내부의 텍스트 추출``` → ```텍스트 전처리 및 슬라이싱``` → ```추출된 텍스트를 문단 형태로 정제``` <br/>
    > **텍스트에서 대본 변환 시나리오** <br/>
    > ```LLM 모델에 연결해 기준점 생성 및 대본 형식 지정``` → ```지정 형식과 모델을 통해 대본 생성``` → ```가중치 및 토큰 조절``` → ```데이터 슬라이싱 및 대본 정제```

<br/>

## 기능 소개
- **메인 기능:**
  - **PPT 생성:** AI를 이용해 데이터를 식별하고 페이지에 맞는 PPT 제작
  
    ![image](https://github.com/user-attachments/assets/cebff96b-15c4-4b07-a6a2-1314ab5b0dc3)
  
  - **대본 생성:** PPT 파일을 기반으로 AI를 통한 대본 작성
  
    ![image](https://github.com/user-attachments/assets/460ebb5a-710b-4508-98c9-9b5ce392e8f0)

  - **디자인 선택:** 데이터 추출 및 이해 과정을 통해 주제에 어울리는 색상 차트 및 조합 추천으로 PPT 디자인
 
    ![image](https://github.com/user-attachments/assets/309ba43d-7646-45b0-a0f1-9ac741e3034b)


- **웹 페이지 기능들:**
  - **워크스페이스:** 생성한 PPT와 대본을 관리. 삭제 및 다운로드 가능
 
    ![image](https://github.com/user-attachments/assets/c78aaff1-e844-4282-bb8e-6da186fa1231)


  - **템플릿:** 사용빈도가 높은 PPT 템플릿을 골라 추천
 
    ![image](https://github.com/user-attachments/assets/055d9d7c-33ae-4db4-bd74-03c515bfd041)


  - **가이드:** 주 서비스인 PPT 및 대본 변환 가이드를 사용자에게 제공

    ![image](https://github.com/user-attachments/assets/dec37632-f428-43fd-9cf1-e582f437d695)

<br/>

## 프로젝트 시연

![Demo GIF](./assets/시연.gif)
<br/><br/>

## 기대효과 및 활용분야
- **기대 효과:**
  - PPT와 대본의 양방향 제작으로 차별성 확보
  - 비즈니스 모델 구축 및 서비스 확장 가능
  - 쉬운 접근성으로 디지털 교육 격차 해소
  - 프로그램 응용 능력 향상이 가능해 타겟층 범위 확대
- **활용 분야:**
  - 발표 자료 제작이 필요한 학생과 직장인
  - 빠른 시간 내에 발표 자료와 대본을 만들어야 하는 사용자

<br/>

## 프로젝트 관리
- **프로젝트 관리:** Notion을 사용해 팀 작업 환경과 일정 관리, 월별 게시판과 작업 체크 페이지, 레퍼런스 공유
- **형상 관리:** Git으로 코드 버전 관리 및 실시간 코드 공유
- **자료 관리:** Google Cloud와 AWS S3를 통한 데이터 및 파일 관리

<br/>

## 개선 목표 & 보완점
- **보완할 부분:**
  - **디자인 다양화:** 생성된 PPT의 템플릿을 다채롭게 학습하여 제공
  - **AI 성능 최적화:** GPT 토큰 제한과 KoBERT의 성능 개선을 통한 텍스트 변환 품질 향상
- **추가 개발 가능 부분:**
  - 실시간 협업 기능과 다중 사용자 지원 기능 추가
  - PDF 변환 및 요약 기능 등 문서 처리 기능 추가

<br/>

## 소감
본 프로젝트를 통해 AWS 사용 경험을 쌓고, AI의 신기술 동향에 대한 행보도 쫓아가며 배웠습니다. 이를 통해 최신 기술 동향 파악에 대한 중요성을 느꼈으며, AI 기술의 지속적 발전과 변화로 인해 세상이 빠르게 변하기 때문에 신기술이나 업데이트된 서비스 등을 적용해 프로젝트의 효율성과 품질을 향상시키도록 하는 것이 중요하다 생각했습니다. 처음 기획했을 당시에는 본 프로젝트와 비슷한 서비스가 따로 명확하게 존재하지 않았는데, 프로젝트 설계를 진행하면서 레퍼런스를 찾아보던 중 비슷한 서비스가 생겨나고 있는 것을 알게 되었고, 프로젝트 진행 전 관련 기술 동향을 조사하고 필요한 리소스를 빠르게 수집해 개발하는 것과 다른 서비스와의 차별점을 명확히 만드는 것에 대한 중요성을 체감했습니다. 또한, 학부 전공에서 접하기 어려운 AWS, AI/ML과 관련한 추천 알고리즘 등을 강의를 통해 배우며 개발 능력이 향상되었고, 인공지능 분야의 이해도가 높아졌습니다. 멘토님, 멘티분들과의 매주 1회 이상 꾸준한 회의 및 피드백을 통해 프로젝트 개발 진척도가 빠르게 성장함을 보았고, 이를 통해 IT 업계에서의 커뮤니케이션이 프로젝트에 큰 이점이 될 수 있다는 걸 느꼈습니다.

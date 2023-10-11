# React파일 구조 , 실행 구조


<aside>
<img src="https://www.notion.so/icons/checkmark_blue.svg" alt="https://www.notion.so/icons/checkmark_blue.svg" width="40px" /> **JWT** (**JSON Web Token)** → 로그인 구현 할 수 있다.

**웹에서 데이터를 안전하게 전송하기 위한 토큰 기반의 인증 방법 중 하나입니다
WT는 클라이언트와 서버 간에 정보를 주고받을 때 사용되며, 주로 웹 애플리케이션 및 모바일 앱에서 인증 및 권한 부여를 위해 활용됩니다.**

</aside>

# 개발 환경 구축

## 1. node 설치

- [https://nodejs.org/](https://nodejs.org/)
- 설치 확인 :  `node -v`

### 1.1 설치 목적: npm, npx , 사용을 위해서

- `npm -v` ( 웹 프론트 프로젝트를 서버로 실행하기 위해서   [ 자기 하드디스크에 설치 ]
- `npx -v` ( 리액트 개발환경 구축 명령어 실행을 위해서 )   [ 일부만 설치 ]

### 1.2 vscode에서 필요한 플러그인

- ESLint
- Auto Close tag
- Auto Rename tag
- Prettier
- **ES7+ React/Redux/React-Native snippets**

<aside>
<img src="https://www.notion.so/icons/directional-sign-right_blue.svg" alt="https://www.notion.so/icons/directional-sign-right_blue.svg" width="40px" /> Redux는 React와 별개이다

</aside>

## 2. React 설치: react 프로젝트 자동 구성

- npx create-react-app `프로젝트 이름` ( React 실행 )
- npx create-next-app `프로젝트 이름`  ( next js 실행 )          
  ⇒  ✏️ next 까지 학습하자!

### 터미널에 설치

```html
1. npx create-react-app 프로젝트 이름

2. cd 프로젝트 이름

3. npm run start  (프로젝트 시작)

  =>  http://localhost:3000/
```

### 실행 종료

`ctl + c`

![Untitled](React%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20,%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20a533d52a224343f797f10f97e70b833e/Untitled.png)

# `package.json` **와** `package-lock.json`

### `package.json`

<aside>
<img src="https://www.notion.so/icons/checkmark-line_green.svg" alt="https://www.notion.so/icons/checkmark-line_green.svg" width="40px" /> 리액트 프로젝트setting에 관한 것, 필요한 라이브러리, 패키지들이 기술되어 있다.

</aside>

### dependencies

![Untitled](React%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20,%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20a533d52a224343f797f10f97e70b833e/Untitled%201.png)

리엑트 프로젝트에 필요한 라이브러리들이 
저장되어 있다  (버전을 확인 할 수 있다 )

### scripts

![Untitled](React%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20,%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20a533d52a224343f797f10f97e70b833e/Untitled%202.png)

npm으로 프로젝트에서 사용할 수 있는 명령어 

❗npm start의 start는 `package.json` 의 
    script안에 지정해 놓은 부분이다

![Untitled](React%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20,%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20a533d52a224343f797f10f97e70b833e/Untitled%203.png)

### `package-lock.json`

<aside>
<img src="https://www.notion.so/icons/checkmark-line_green.svg" alt="https://www.notion.so/icons/checkmark-line_green.svg" width="40px" /> package.json 에 부수적으로 필요한 것들이 기술되어 있다.

</aside>

package.json 에 있는 라이브러리들도 다른 라이브러리에 연관되어 있을 수 있다. 이렇게 연관된 라이브러리들을 package-lock.json 에서 관리한다

# 3. ⭐ 폴더 구조

### `node_modules`

- 프로젝트 실행을 위해 필요한 패키지가 설치된 폴더

### `public`

- 정적 파일들이 저장되어 있는 곳
- index.html  : React 프로젝트의 실행을 위한 진입 점( 시작 점 )
- App.js

### `scr`

- react의 소스 코드 저장 폴더

# 4. React 프로그램의 초기 실행 흐름

1. 브라우저 실행
2. 주소 창에서 [http://localhost:3000/](http://localhost:3000/) 요청 
3. 서버에서 `/index.html` 존재 여부 확인
4. `index.html` 존재하면 build 한 `index.html` 파일을 브라우저에 전송
5. 브라우저가 서버로부터 받은 index.html 파일을 렌더링(rendering)

# 5. 시작 점

[http://localhost:3000/](http://localhost:3000/)**`index.html`**

- 표면적인 시작 점 1
    
    ![Untitled](React%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20,%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20a533d52a224343f797f10f97e70b833e/Untitled%204.png)
    

`**src/index.js**`

- index.html과 관련해서 index..js 파일이 
소스 코드 진임 점으로 보임
- 표면적인 시작 점 2

`**src/App.js**`

실질적인 시작 점 

## 리액트가 실행되면 아래의 코드가 자동으로 삽입 돼 실행된다

```html
<script defer="" src="/static/js/bundle.js"></script>
```

![Untitled](React%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20,%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20a533d52a224343f797f10f97e70b833e/Untitled%205.png)

webpack을 사용해서  하나의 자바스크립트 파일로 만들어 준다. ( index.js  , App.js 등등)

<aside>
<img src="https://www.notion.so/icons/forward_blue.svg" alt="https://www.notion.so/icons/forward_blue.svg" width="40px" /> 이 코드는 React 프로젝트를 빌드했을 때 생성되는 번들된 JavaScript 파일을 웹 페이지에 로드하기 위한 목적으로 자동으로 삽입됩니다.

리액트와 같은 프론트엔드 라이브러리나 프레임워크를 사용하면, 개발자는 여러 개의 JavaScript 파일과 컴포넌트를 작성하게 됩니다. 이러한 파일들은 모듈화되어 서로 의존성을 가지며, 이것들을 그대로 클라이언트에 전달하면 비효율적일 수 있습니다. 따라서 웹팩(Webpack)과 같은 모듈 번들러를 사용하여 이런 여러 개의 파일과 모듈들을 하나 또는 몇 개의 번들(bundle)로 묶어서 클라이언트에 전달합니다.

`<script defer="" src="/static/js/bundle.js"></script>` 코드에서 `src="**/static/js/bundle.js**"` 부분은 

서버에서 제공하는 번들된 JavaScript 파일의 위치를 가리킵니다. 일반적으로 리액트 앱을 빌드하면 `bundle.js`라는 이름의 파일이 생성되며, 이것이 최종적으로 클라이언트에게 전달되어 실행됩니다.

`defer` 속성은 HTML 문서가 완전히 파싱된 후에 스크립트를 실행하도록 합니다. 즉, HTML 문서 파싱과 스크립트 다운로드가 동시에 진행되고, 파싱이 완료된 후에 다운로드 받은 스크립트가 실행됩니다. 이렇게 함으로써 웹 페이지 로딩 속도와 성능 향상 및 사용자 경험이 개선될 수 있습니다.

따라서 `<script defer="" src="/static/js/bundle.js"></script>` 코드는 최종적으로 리액트 애플리케이션 로직인 `bundle.js`를 HTML 문서 파싱 완료 후 비동기적으로 로딩하고 실행하는 역할을 합니다.

</aside>

## ⭐⭐⭐⭐⭐

## src폴더에는 이렇게 만 있어도 잘 돌아 간다

![Untitled](React%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20,%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20a533d52a224343f797f10f97e70b833e/Untitled%206.png)

<aside>
<img src="https://www.notion.so/icons/checkmark-line_blue.svg" alt="https://www.notion.so/icons/checkmark-line_blue.svg" width="40px" /> 기본적인 setting 구조이다

</aside>

# 꼭 있어야 하는 파일 내용

### index.html

```html
<div id="root"></div>
```

표면적인 시작 점 1

### main.js

```html
<App />
```

표면적인 시작 점 2

### App.js

```jsx
return ( ... )
```

실질적인 시작 점

## 실질적인 진입 점:  시작 점 `App.js`

- App 컴포넌트 : App.js 안에 정의
- 컴포넌트 이름의 첫 글자는 대문자 영단어로 시작한다 
    → 파일 이름도 컴포넌트 이름과 같게 설정 권장

## 컴포넌트 ( Component )

<aside>
<img src="https://www.notion.so/icons/checkmark-line_blue.svg" alt="https://www.notion.so/icons/checkmark-line_blue.svg" width="40px" /> 구성 요소

</aside>

- 웹 에서는 화면에 구성 요소로 정의 될 수 있는 하나의 최소 단위
- 컴포넌트는 다른 컴포넌트를 포함할 수 있다
    - 포함되는 컴포넌트  : 자식 컴포넌트   ⇒ Abc 컴포넌트 : 자식
    - 포함하는 컴포넌트  : 부모 컴포넌트   ⇒ App 컴포넌트 : 부모
        
        

## React는 컴포넌트 단위로 소스 코드 작성

- 액자와 같은 컴포넌트가 `**App 컴포넌트**`
    - `**App 컴포넌트`** : 모든 컴포넌트의 최상위 부모 컴포넌트
    - `**Abc 컴포넌트**` :  `**App 컴포넌트**`의 자식 컴포넌트

## 컴포넌트 정의 방식

1. ⭐ function 형 (  현재 스타일 ) 
    
    ```jsx
    function LikeButton(**props**) {
    	
    	if(**props**.state.liked){
    		return '좋아요 눌렀음'
    	}
    
    	return ( 
    				<div className='App'>
    
    				<div>
    	);
    
    }
    
    const domContainer = document.querySelector()
    ```
    
2. class 형  ( 지금은 잘 사용하지 않음 )   
    
    ```jsx
    class LikeButton extends React.Component {
    
    	**constructor**(**props**) {     {/* 생성자 */}
    		**super**(**props**);          {/*  부모 클래스의 생성자를 호출 */}
    		this.state = { liked:false }  {/*  this 자신의 객체 */}
    	}
    
    	**render**() {  {/*  화면에 컴포넌트를 나타내는 내용 반환하게 구현 */}
    
    			if(this.state.liked){
    				return '좋아요 눌렀음'
    			}
    
    			return React.createElement( 
    				'button',
    				{onClick:()=> this.setState({liked:true})},
    				'좋아요'
    			);
    	}
    }
    ```
    

## 컴포넌트 정의 문법 :  JSX  (  JavaScriot + XML )

<aside>
<img src="https://www.notion.so/icons/checkmark-line_green.svg" alt="https://www.notion.so/icons/checkmark-line_green.svg" width="40px" /> jsx를 자바스크립트의 Object로 변환 시킬 때 Babel을 사용해서 변환 시킨다

</aside>

![Untitled](React%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20,%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20a533d52a224343f797f10f97e70b833e/Untitled%207.png)

- html과 95% 같다
- ⭐빈 태그 ( empty tag )  :  `**<태그명> </태그명>**`  또는  `**<태그명 / >**`
    - 종료 태그 필수로 작성
    - 축약형 가능 `**<태그명 / >**`
    - img 태그 , br 태그
        - `<br>` : JSX에서는 X ( 안됨 )   종료 태그가 없는 형태는 에러 발생한다
        JSX에서는 `<br></br>`
        - `<img src = ‘…’>`
- ⭐ **css** 적용시 classs는 `**className`** 으로 설정
    - `**class**`는 javascript에서 클래스를 정의할 때 사용하는 키워드라 겹친다
    - 사용해도 되는데 에러가 발생한다.
        
        ![Untitled](React%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20,%20%E1%84%89%E1%85%B5%E1%86%AF%E1%84%92%E1%85%A2%E1%86%BC%20%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9%20a533d52a224343f797f10f97e70b833e/Untitled%208.png)
        
- ⭐주석문 :   `**{/* 이 사이에 넣는다  */}**`
    - { javascript } 이 안 부분 은  javascript라고 인식하고  javascript코드로 실행한다
- 각 컴포넌트에는 무조건 하나의 최상위 태그가 작성되어 있어야 한다.
    - `<div> </div>`
    - `<Fragment> </Fragment>`
    - `<> </>`
- 인라인 방식의 CSS적용은 HTML과 다르다.
- import : 불러들임
    - import 컴포넌트명 from ‘ 컴포넌트명 ’ ;
    - import 컴포넌트명 from ‘ 컴포넌트명.js ’;
- export : 내보냄
    - export default 컴포넌트명 ;
    - export default 함수명 ;
    - export default 클래스명;
- JSX Coding Conventions ( 코딩 관례 )
    - ⭐ camel**C**ase (JSX )가 사용
        - class**N**ame , background**C**olor
        - Hungarian ( WinApi ) :  strName, bBusy , szName :   접두사-데이터의 자료형
    - kebab-case :  HTML, CSS
        - background-color
    - snake_case :  변수 정의 등에서 사용
    - PascalCase :  ClassName

<aside>
<img src="https://www.notion.so/icons/question-mark_green.svg" alt="https://www.notion.so/icons/question-mark_green.svg" width="40px" /> 왜 스타일을 적용할 때는  style={{ color: 'red' }} 이렇게 {} 괄호를 두 번이나 사용 하는 거야?

<aside>
<img src="https://www.notion.so/icons/forward_green.svg" alt="https://www.notion.so/icons/forward_green.svg" width="40px" /> React에서 JSX 문법을 사용하여 스타일을 적용할 때는 중괄호(`**{}**`)를 두 번 사용해야 합니다.

첫 번째 중괄호(`**{}**`)는 JSX 내부에서 ***JavaScript 표현식을 사용하기 위한 것***입니다. JSX 안에서 중괄호를 사용하면 JavaScript 코드를 삽입할 수 있습니다. 

따라서 `style` 속성 값으로 JavaScript 객체 리터럴을 전달하기 위해 첫 번째 중괄호를 사용합니다.

두 번째 중괄호(`**{}**`)는 실제로 ***JavaScript 객체 리터럴을 나타내기 위한 것***입니다. 이 객체 리터럴은 스타일 속성에 적용될 CSS 속성과 값의 맵핑을 정의합니다.

예를 들어, `style={{ color: 'red' }}` 코드에서 첫 번째 중괄호 안에 있는 `**{ color: 'red' }**`는 JavaScript 객체 리터럴로, `color`라는 CSS 속성에 `'red'` 값을 할당하는 것을 의미합니다.

이렇게 두 개의 중괄호를 사용하여 스타일을 정의하는 
이유는 React가 JSX 코드 내부에서 JavaScript와 HTML/CSS를 조합하기 위해!!
이러한 구문은 React의 특징이며, JSX 문법이 
HTML과 JavaScript를 함께 다룰 수 있도록 해줍니다.

</aside>

</aside>
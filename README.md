# hangout-nextjs-with-nomad

[NextJS 시작하기](https://nomadcoders.co/nextjs-fundamentals)로 따라한 과정

## library vs framework

- library
  - 정해진 규칙은 크게 없으며 언제든지 불러서 원하는 방식으로 사용할 수 있다.
  - 사용자가 원하는 특정 기술의 함수/객체/모듈 세트를 말한다.
- framework
  - famework가 제공하는 규칙에 따라 사용할 수 있다.
  - 사용자가 사용자 지정 응용 프로그램을 만들기 위해 작성하는 개방형 또는 구현되지 않은 기능 또는 개체를 정의해둔다.
  - famework는 그 자체가 응용 프로그램이기 때문에 더 넓은 범위를 가지고 있으며 사용자의 필요에 따라 사용자 응용 프로그램을 만드는 데 필요한 거의 모든 것을 포함한다.

## pages

- next.js에서 `pages`에 파일들을 넣어서 파일 명에 따라 url을 생성한다.
- 중요한 것은 파일의 이름과 컴포넌트는 `export default`가 되어야 한다는 것이다.

  ```javascript
  // export default가 있어야함
  export default function Home() {
    return "hi"
  }

  // export default가 없으면 페이지가 렌더되지 않음
  function Home() {
    return "hi"
  }
  ```

- next.js는 없는 url로 가게 되면 404 페이지를 제공해 준다.

## Static Pre Rendering

- react.js 는 client-side-render를 이용하며 이는 사용자의 브라우저가 사용자가 보는 UI를 모두 만든다.
- client-side-render에서 HTML 파일은 텅빈 파일이며 script가 들어오면서 화면을 렌더링하게 된다. 따라서 느린 환경에서는 흰색화면을 바라보는 시간이 길어진다.
- next.js에서는 pre-rendering을 통해서 실제 HTML이 존재해 화면에 보여지게 되는 것을 확인할 수 있다. 따라서 느린 환경이거나 스크립트가 비활성화된 환경에서도 흰색 화면이 아닌 화면을 사용자가 확인할 수 있다.
- pre-rendering을 통해서 seo 친화적으로 사이트를 만들기가 가능하다.

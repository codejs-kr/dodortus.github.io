import React from 'react';
import { DevelopmentDetailTemplate, A } from 'components';
import { DevelopmentPagingContainer } from 'containers';

const BookTransform = () => {
  const name = 'Book Transform';

  return (
    <DevelopmentDetailTemplate title={`${name}`}>
      <section className="image-wrap s-cover">
        <img src={require('statics/img/development/book-transform/main.png')} alt={name} />
      </section>

      <section className="overview">
        <p>
          순수 CSS3의 Transform을 활용하여 만든 멋진 UI를 보고 한눈에 반해서 코드 분석 후 따라 만들어 봤습니다.
          <br />
          이전에 이 정도 에니메이션을 연출하기 위해서는 자바스크립트 없이는 불가능하였지만, 이제는 자바스크립트를
          사용하지 않아도 효과적인 에니메이션을 연출할 수 있게 되었습니다.
        </p>
      </section>

      <section className="list-wrap">
        <ul>
          <li>
            <strong>개발년도</strong>
            <p>2013</p>
          </li>
          <li>
            <strong>주요개발항목</strong>
            <p>데모 구현</p>
          </li>
          <li>
            <strong>사용기술</strong>
            <p>CSS3 Transform, Transition</p>
          </li>
        </ul>
      </section>

      <section className="button-wrap">
        <A href="http://www.codejs.co.kr/development/views/transform/" theme="fill" icon="default">
          Live
        </A>
      </section>
    </DevelopmentDetailTemplate>
  );
};

export default BookTransform;

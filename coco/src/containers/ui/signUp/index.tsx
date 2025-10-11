import * as _ from './style';

export default function SignUp() {
  const letters = [
    { text: '회', rotate: -8, y: 4, x: 0 },
    { text: '원', rotate: 5, y: 0, x: 2 },
    { text: '가', rotate: 4, y: 4, x: 4 },
    { text: '입', rotate: -3, y: -2, x: 6 },
  ];

  return (
    <_.Container>
      <_.Wrapper>
        {letters.map((l, i) => (
          <_.Letter key={i} rotate={l.rotate} y={l.y}>
            {l.text}
          </_.Letter>
        ))}
      </_.Wrapper>
    </_.Container>
  );
}
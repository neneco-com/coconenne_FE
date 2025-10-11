'use client';

import * as _ from './style';
import TextBox from '@/components/textBox';
import { useState } from 'react';
import Btn from '@/components/button';

export default function SignUp() {
  const [miniCode, setMiniCode] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

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
      <_.Group>
        <_.TextGroup>
          <TextBox
            value={miniCode}
            onChange={(e) => setMiniCode(e.target.value)}
            placeholder="미니코드"
          />
          <TextBox
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="아이디"
          />
          <TextBox
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
        </_.TextGroup>
        <Btn>회원가입</Btn>
      </_.Group>
    </_.Container>
  );
}
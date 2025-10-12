'use client';

import * as _ from './style';
import TextBox from '@/components/textBox';
import { useState } from 'react';
import Btn from '@/components/button';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const router = useRouter();

  const [miniCode, setMiniCode] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const letters = [
    { text: '로', rotate: -8, y: 4, x: 0 },
    { text: '그', rotate: 5, y: 0, x: 2 },
    { text: '인', rotate: 4, y: 4, x: 4 },
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
        <Btn onClick={() => router.push('/signUpModal')}>회원가입</Btn>
      </_.Group>
    </_.Container>
  );
}
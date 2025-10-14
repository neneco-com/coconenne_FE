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
    { text: '로', rotate: 2, y: 3, x: 0 },
    { text: '그', rotate: -3, y: 1, x: 0 },
    { text: '인', rotate: -4, y: -2, x: 0 },
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
        <Btn onClick={() => router.push('/main')}>로그인</Btn>
      </_.Group>
    </_.Container>
  );
}
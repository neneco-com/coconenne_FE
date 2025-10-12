'use client';

import * as _ from './style';
import Btn from '@/components/button';
import { useRouter } from 'next/navigation';

export default function LogoText() {
    const router = useRouter();

    const letters = [
        { text: '코', rotate: -8, y: 4, x: 0 },
        { text: '코', rotate: 5, y: -6, x: 2 },
        { text: '넨', rotate: 4, y: 30, x: 4 },
        { text: '네', rotate: -3, y: 22, x: 6 },
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
            <Btn onClick={() => router.push('/signUp')}>들어가기</Btn>
        </_.Container>
    );
}
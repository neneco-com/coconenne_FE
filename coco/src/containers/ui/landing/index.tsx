import * as _ from './style';

export default function LogoText() {
    const letters = [
        { text: '코', rotate: -8, y: 4 },
        { text: '코', rotate: 5, y: -6 },
        { text: '넨', rotate: -4, y: 3 },
        { text: '네', rotate: 7, y: -5 },
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
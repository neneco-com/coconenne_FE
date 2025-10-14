import * as _ from "./style";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignUpModal() {
    const router = useRouter();

    const lettersTop = [
        { text: "회", rotate: -8, y: 4 },
        { text: "원", rotate: 5, y: 0 },
        { text: "가", rotate: 4, y: 2 },
        { text: "입", rotate: -3, y: -2 },
    ];

    const lettersBottom = [
        { text: "완", rotate: -2, y: 4 },
        { text: "료", rotate: 5, y: 6 },
    ];

    return (
        <_.Container onClick={() => router.push('/signIn')}>
            <Image src="/assets/apply.svg" alt="check" width={80} height={80} />
            <_.TextGroup>
                <_.Wrapper>
                    {lettersTop.map((l, i) => (
                        <_.Letter key={i} rotate={l.rotate} y={l.y}>
                            {l.text}
                        </_.Letter>
                    ))}
                </_.Wrapper>
                <_.Wrapper>
                    {lettersBottom.map((l, i) => (
                        <_.Letter key={i} rotate={l.rotate} y={l.y}>
                            {l.text}
                        </_.Letter>
                    ))}
                </_.Wrapper>
            </_.TextGroup>
        </_.Container>
    );
}
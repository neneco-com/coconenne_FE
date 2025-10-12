import * as _ from './style';
import Image from 'next/image';

export default function Home() {
    return (
        <_.Container>
            <_.Wrapper>
                <_.Title>무엇을 하고 싶으세요?</_.Title>
                <_.SubTitle>항목 선택 시 다음 화면으로 즉시 이동합니다</_.SubTitle>
            </_.Wrapper>
            <_.Group>
                <_.Box>
                    <Image src="/assets/serach.svg" alt="serach" width={50} height={50} />
                    검색하기
                </_.Box>
                <_.Box>
                    <Image src="/assets/exchange.svg" alt="exchange" width={50} height={50} />
                    교환하기
                </_.Box>
            </_.Group>
        </_.Container>
    );
}
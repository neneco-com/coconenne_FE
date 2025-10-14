import * as _ from './style';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    return (
        <_.Container>
            <_.Wrapper>
                <_.Title>무엇을 하고 싶으세요?</_.Title>
                <_.SubTitle>항목 선택 시 다음 화면으로 즉시 이동합니다</_.SubTitle>
            </_.Wrapper>
            <_.Group>
                <_.Box onClick={() => router.push('/search')}>
                    <Image src="/assets/search.svg" alt="search" width={50} height={50} />
                    검색하기
                </_.Box>
                <_.Box onClick={() => router.push('/exchange')}>
                    <Image src="/assets/exchange.svg" alt="exchange" width={50} height={50} />
                    교환하기
                </_.Box>
            </_.Group>
        </_.Container>
    );
}
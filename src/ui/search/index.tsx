import * as _ from './style';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Search() {
    const router = useRouter()

    return (
        <_.Container>
            <_.Wrapper>
                <Image src='assets/arrow.svg' alt='arrow' width={24} height={24} onClick={() => router.push('/main')} style={{ cursor: 'pointer' }} />
                <_.Title>검색하기</_.Title>
            </_.Wrapper>
            <_.SearchWrapper>
                <Image src='assets/itemSearch.svg' alt='itemSearch' width={24} height={24} />
                <_.SearchInput placeholder="원하는 상품을 검색하세요" />
            </_.SearchWrapper>
        </_.Container>
    );
}
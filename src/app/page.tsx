import styles from './page.module.css';
import SimpleMain from '@/components/\bSimple/SimpleMain';

export default function Home() {
  return (
    <div className={styles.diary}>
      <ul>
        <li>한줄쓰기</li>
        <li>일기쓰기</li>
        <li>일기 메인/쓰기/보기/수정</li>
      </ul>
      <div>
        <SimpleMain />
      </div>
    </div>
  );
}

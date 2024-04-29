import styles from './SimpleEditor.module.css';

const SimpleEditor = () => {
  return (
    <div className={styles.editor}>
      <textarea />
      <button>입력</button>
    </div>
  );
};

export default SimpleEditor;

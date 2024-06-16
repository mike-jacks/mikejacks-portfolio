import styles from "./footer.module.css" 

export default function Footer() {
  return (
    <>
      <div className="flex flex-grow justify-stretch items-start">
        <footer className={`self-end flex-grow flex justify-center py-5 rounded-lg border-2 ${styles.borderColor}`}>
          <p>Copyright &copy; Mike Jacks 2024</p>
        </footer>
      </div>
    </>
  );
}

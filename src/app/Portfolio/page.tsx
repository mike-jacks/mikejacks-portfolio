import Link from "next/link";
export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 justify-center flex-grow">
        <Link href={`https://int-currency-converter.mikejacks.com/graphiql`}>
            <button className="btn btn-primary">International Currency Converter</button>
            </Link>
      </div>
    </>
  );
}

import Link from "next/link";
export default function Portfolio() {
  return (
    <>
      <div className="flex flex-col items-center gap-5 justify-center flex-grow">
        <Link href={`https://int-currency-converter.mikejacks.com/graphiql`}>
          <button className="btn btn-primary">
            International Currency Converter
          </button>
        </Link>
        <Link href={`https://gym-app.mikejacks.com`}>
          <button className="btn btn-primary">Gym App Front End</button>
        </Link>
        <Link href={`https://gym-app-backend.mikejacks.com/docs`}>
          <button className="btn btn-primary">Gym App Back End</button>
        </Link>
      </div>
    </>
  );
}

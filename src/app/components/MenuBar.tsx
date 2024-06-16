import ThemeController from "./ThemeController/ThemeController";

export default function MenuBar() {
  return (
    <>
      <div className="flex items-end justify-end px-5 pt-5 pb-2">
        <ThemeController />
      </div>
    </>
  );
}

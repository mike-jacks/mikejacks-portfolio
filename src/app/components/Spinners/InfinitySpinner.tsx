import { InfinitySpin } from "react-loader-spinner";

export default function InfinitySpinner() {
  return (
    <InfinitySpin
      visible={true}
      width="170"
      height="200"
      color="var(--accent-color)"
      ariaLabel="infinity-spin-loading"
    />
  );
}

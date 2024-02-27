"use client";
type Props = {
  showingHowMany: number;
  total: number;
};
export function PlaylistListControls({ ...props }: Props) {
  const { showingHowMany, total } = props;
  return (
    <div className="flex flex-row gap-x-2 justify-end my-3 mr-2">
      <div>
        Showing {showingHowMany} of {total}
      </div>
    </div>
  );
}

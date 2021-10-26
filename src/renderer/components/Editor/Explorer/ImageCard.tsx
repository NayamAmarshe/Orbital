import { IFile } from '../../../types';
import { useAppSelector } from '../../../store/hooks';

export default function ImageCard({ path }: IFile) {
  const folder = useAppSelector((state) => state.folder);

  const getReadablePath = (): string => {
    return path.substr(folder.path.length);
  };

  return (
    <div className="relative h-full w-full flex place-items-center justify-center bg-card-bg cursor-pointer">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center place-items-center">
        <img
          src={`file-protocol://getMediaFile/${path}`}
          className="object-cover w-full h-full"
          draggable={true}
          alt=""
        />
      </div>

      <div className="absolute text-sm bottom-2 left-0 max-w-full bg-editor-bg text-editor-fg place-items-center p-1">
        <div className="truncate">{getReadablePath()}</div>
      </div>
    </div>
  );
}

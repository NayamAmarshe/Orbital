import { IFile } from '../../../types';

export default function ImageDisplay({ path, name, ctime }: IFile) {
  return (
    <img
      id={path}
      src={`file-protocol://getMediaFile/${path}`}
      className="object-contain max-w-full max-h-full"
      alt=""
    />
  );
}

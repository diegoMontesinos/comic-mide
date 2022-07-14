import { Howl } from 'howler';

export interface PageData {
  id: string;
  animation: string;
  thumbnail: string;
  audioPath?: string;
  sound?: Howl;
}

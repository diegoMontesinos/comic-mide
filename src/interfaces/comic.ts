import { Howl } from 'howler';

export interface PageData {
  id: string;
  intro: string;
  thumbnail: string;
  audioPath?: string;
  sound?: Howl;
}

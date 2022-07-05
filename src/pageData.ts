import { PageData } from './interfaces/comic';

import Ilu01 from './assets/thumbnails/ilu-01.svg';
import Ilu02 from './assets/thumbnails/ilu-02.svg';
import Ilu03 from './assets/thumbnails/ilu-03.svg';
import Ilu04 from './assets/thumbnails/ilu-04.svg';
import Ilu05 from './assets/thumbnails/ilu-05.svg';
import Ilu06 from './assets/thumbnails/ilu-06.svg';
import Ilu07 from './assets/thumbnails/ilu-07.svg';
import Ilu08 from './assets/thumbnails/ilu-08.svg';
import Ilu09 from './assets/thumbnails/ilu-09.svg';
import Ilu10 from './assets/thumbnails/ilu-10.svg';

const thumbnails: string[] = [
  Ilu01,
  Ilu02,
  Ilu03,
  Ilu04,
  Ilu05,
  Ilu06,
  Ilu07,
  Ilu08,
  Ilu09,
  Ilu10,
];

const pad = (x: number): string => {
  let str = `${x}`;
  if (str.length < 2) {
    str = `0${str}`;
  }

  return str;
};

const pages: PageData[] = [];

for (let i = 1; i <= 60; i += 1) {
  pages.push({
    id: `page-${i}`,
    intro: `ilu_${pad(i)}_intro.json`,
    thumbnail: thumbnails[i],
    audioPath: i <= 4 ? `ilu_${pad(i)}.wav` : '',
  });
}

export default pages;

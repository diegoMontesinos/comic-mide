import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PageData } from '../../interfaces/comic';

import pages from '../../pageData';

import './index.scss';

const ContentPage: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [filtered, setFiltered] = useState<PageData[]>([
    ...pages,
  ]);

  useEffect(() => {
    const num = parseInt(search, 10);
    if (
      !Number.isNaN(num) &&
      num >= 1 &&
      num <= pages.length
    ) {
      setFiltered([{ ...pages[num - 1] }]);
    } else {
      setFiltered([...pages]);
    }
  }, [search]);

  return (
    <div className="comic-content">
      <div className="comic-content-title">
        <span className="mide-text">CONTENIDO</span>
      </div>
      <div className="comic-content-search">
        <input
          className="comic-content-input mide-text"
          type="text"
          value={search}
          onChange={(evt) => {
            setSearch(evt.target.value);
          }}
        />
        <span className="mide-text">
          Escribe el número de página
        </span>
      </div>
      <div className="comic-content-grid">
        {filtered.map((page, idx) => (
          <Link
            // eslint-disable-next-line react/no-array-index-key
            key={`comic-card-${idx}`}
            className="comic-grid-card"
            to={`/comic/${page.id}`}
          >
            <img
              src={page.thumbnail}
              alt="Page thumbnail"
            />
            <div className="comic-grid-card-index">
              <span className="mide-text">
                {page.id.replace('page-', '')}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;

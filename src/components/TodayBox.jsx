import React from 'react';
import { Link } from 'react-router-dom';

import '../scss/components/_todayBox.scss';
import gridData from '../data1';

function TodayBox() {

    return (
        <div className="main">

            <div className="main__skToday">
                <div className="main__skToday_grid-container">
                    {gridData.map(item => {
                    let cellClass = "main__skToday_grid-item";

                    if (item.type === 'image') {
                        cellClass += " image";
                    } else if (item.id % 2 === 0) {
                        cellClass += " blue";
                    } else {
                        cellClass += " green";
                    }

                    let cellContent;

                    if (item.id === 1) {
                        cellContent = <h2 className="cell-content">{item.text}</h2>;
                    } else if (item.id === 2 || item.id === 3 || item.id === 5 || item.id === 6) {
                        cellContent = (
                        <div className="cell-text-container">
                            <h1 className="cell-title">{item.texts[0]}</h1>
                            <h2 className="cell-subtitle">
                            {item.texts[1].firstLine}<br />{item.texts[1].secondLine}
                            </h2>
                        </div>
                        );
                    } else if (item.id === 4) {
                        cellContent = <h3 className="cell-content">{item.text}</h3>;
                    } else {
                        cellContent = <p className="cell-text">{item.text}</p>;
                    }

                    return (
                        <Link
                        to="/abus"
                        key={item.id}
                        className={cellClass}
                        style={item.type === 'image' ? { backgroundImage: `url(${item.imageUrl})` } : null}
                        rel="noopener noreferrer"
                        >
                        {cellContent}
                        </Link>
                    );
                    })}
                </div>
            </div>

        </div>
    );
  }
  
  export default TodayBox;
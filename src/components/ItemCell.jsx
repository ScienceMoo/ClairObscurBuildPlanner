import React from "react";

function SingleItem({ title, showImage }) {
  // title can be a plain string, or an object: { name, image, description, stats, passives }
  const isObject = title && typeof title === "object";
  const name = isObject ? title.name : title;
  const description = isObject ? title.description : null;
  const image = isObject ? title.image : null;
  const stats = isObject ? title.stats : null;
  const passives = isObject ? title.passives : null;

  return (
    <div className="item-cell">
      {showImage && image && (
        <img src={image} alt={name || ""} className="item-img" />
      )}
      <div className="item-title">{name || "-"}</div>
      {description && <div className="item-description">{description}</div>}
      {stats && (
        <ul className="item-stats">
          {Object.entries(stats).map(([key, value]) => (
            <li key={key}>
              <span className="stat-key">{key}</span>
              <span className="stat-value">{value}</span>
            </li>
          ))}
        </ul>
      )}
      {passives && passives.length > 0 && (
        <ul className="item-passives">
          {passives.map((p, idx) => (
            <li
              key={idx}
              className={p.unlocked ? "unlocked" : "locked"}
              title={p.unlocked ? "Unlocked" : `Requires Level ${p.level}`}
            >
              <span className="passive-level">Lv.{p.level}</span>
              <span className="passive-effect">{p.effect}</span>
            </li>
          ))}
        </ul>
      )}
      {passives && passives.length === 0 && (
        <div className="item-no-passives">No passive abilities</div>
      )}
    </div>
  );
}

export default function ItemCell({ title, showImage = true, compact = false }) {
  if (compact && Array.isArray(title)) {
    return (
      <ul className="compact-list">
        {title.map((entry, idx) => {
          const name = entry.name;
          const description = entry.description;
          return (
            <li key={idx} className="compact-list-item equipped">
              <span className="compact-list-name">{name}</span>
              {description && (
                <span className="compact-list-description">{description}</span>
              )}
            </li>
          );
        })}
      </ul>
    );
  }

  if (Array.isArray(title)) {
    return (
      <div className="item-list">
        {title.map((entry, idx) => (
          <SingleItem key={idx} title={entry} showImage={showImage} />
        ))}
      </div>
    );
  }

  return <SingleItem title={title} showImage={showImage} />;
}

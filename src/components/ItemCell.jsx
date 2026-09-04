import React from "react";

function SingleItem({ title, placeholder, showImage }) {
  // title can be a plain string, or an object: { name, image, description, stats }
  const isObject = title && typeof title === "object";
  const name = isObject ? title.name : title;
  const description = isObject ? title.description : null;
  const image = isObject && title.image ? title.image : placeholder;
  const stats = isObject ? title.stats : null;

  return (
    <div className="item-cell">
      {showImage && (
        <img src={image} alt={name || "placeholder"} className="item-img" />
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
    </div>
  );
}

export default function ItemCell({
  title,
  placeholder,
  showImage = true,
  compact = false,
}) {
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
          <SingleItem
            key={idx}
            title={entry}
            placeholder={placeholder}
            showImage={showImage}
          />
        ))}
      </div>
    );
  }

  return (
    <SingleItem title={title} placeholder={placeholder} showImage={showImage} />
  );
}

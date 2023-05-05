import React, { useState } from "react";
import { fileExplorerInterface } from "./types";
import "./style.scss";

const Folder = ({ folder }: { folder: any }) => {
  const [isOpen, setOpen] = useState(false);

  const handleFolderClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="file-explore__folder">
      <h2 className="file-explorer__folder-title" onClick={handleFolderClick}>
        {folder.name} [{folder.subFiles.length}]
        <span
          className={`file-explorer__open-icon ${
            isOpen ? "file-explorer__open-icon--open" : ""
          }`}
        >
          +
        </span>
      </h2>
      {isOpen && <FileExplorer items={folder.subFiles || []} />}
    </div>
  );
};

const FileExplorer = ({ items }: fileExplorerInterface) => {
  type SortType = "type" | "size" | "name";

  const sortItems = (items: any[], sortType: SortType): any[] => {
    switch (sortType) {
      case "type":
        return [...items].sort((a, b) => a.type.localeCompare(b.type));
      case "name":
        return [...items].sort((a, b) => a.name.localeCompare(b.name));
      case "size":
        return [...items].sort((a, b) => a.size - b.size);

      default:
        return items;
    }
  };
  const [sortedItems, setSortedItems] = useState(items);

  const handleSort = (sortType: SortType) => {
    const sorted = sortItems(items, sortType);
    setSortedItems(sorted);
  };
  return (
    <div className="file-explorer">
      <div className="file-explorer__header">
        <button onClick={() => handleSort("type")}>Sort by Type</button>
        <button onClick={() => handleSort("name")}>Sort by Name</button>
        <button onClick={() => handleSort("size")}>Sort by Size</button>
      </div>
      {sortedItems.map((item, index) => {
        if (item.type === "folder") {
          return <Folder key={index} folder={item} />;
        }
        return (
          <React.Fragment key={index}>
            <h2
              className="file-explorer__file-name"
              onClick={() => alert(`You've opened ${item.name}`)}
            >
              {item.name}.{item.type} [{item.size}MB]
            </h2>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default FileExplorer;

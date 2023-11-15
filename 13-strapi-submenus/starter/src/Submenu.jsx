import { useRef } from "react";
import { useGlobalContext } from "./context.jsx";
import sublinks from "./data.jsx";

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();

  const currentPage = sublinks.find((item) => item.pageId === pageId);

  const submenuContainer = useRef(null);

  const handleMouseLeave = (e) => {
    const { clientX, clientY } = e;
    const { left, right, bottom } =
      submenuContainer.current.getBoundingClientRect();

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;

          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;

import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`);
        toast.success("Color copied to clipboard");
      } catch (error) {
        toast.error("Failed to copy text: ", error);
      }
    } else {
      // toast error
      toast.error("Clipboard access not available");
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{
        background: `#${color.hex}`,
      }}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
    </article>
  );
};
export default SingleColor;

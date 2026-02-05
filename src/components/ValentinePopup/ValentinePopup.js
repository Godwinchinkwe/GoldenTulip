import { useEffect, useState } from "react";
import "./ValentinePopup.css"
// import Val from ".ValPackage.jpeg"
import Val from "./ValPackage.jpeg"


const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    backdropFilter: "blur(4px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    animation: "fadeIn 0.4s ease-out",
  },

  popup: {
    position: "relative",
    maxWidth: "90%",
    width: "420px",
    borderRadius: "16px",
    overflow: "hidden",
    animation: "slideUp 0.45s ease-out",
  },

  image: {
    width: "100%",
    height: "auto",
    display: "block",
  },

  closeButton: {
    position: "absolute",
    top: "8px",
    right: "12px",
    background: "rgba(0,0,0,0.45)",
    color: "#fff",
    border: "none",
    fontSize: "22px",
    cursor: "pointer",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    lineHeight: "30px",
  },
};


const ValentinePopup = () => {
  const [visible, setVisible] = useState(false);

   useEffect(() => {
    // SAFETY SWITCH — disable easily after Valentine’s
    const ENABLE_VALENTINE_POPUP = true;
    if (!ENABLE_VALENTINE_POPUP) return;

    // Show on every page refresh
    setTimeout(() => {
      setVisible(true);
    }, 400); // slight delay for polished UX
  }, []);

  if (!visible) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <button
          aria-label="Close Valentine popup"
          onClick={() => setVisible(false)}
          style={styles.closeButton}
        >
          ×
        </button>

        <img
          src={Val} // update path if needed
          alt="Valentine’s Day"
          style={styles.image}
        />
      </div>
    </div>
  );
};

export default ValentinePopup;

// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

// function PageWrapper({ children }) {
//     const [show, setShow] = useState(false);
//     const location = useLocation();

//     useEffect(() => {
//         // eslint-disable-next-line react-hooks/set-state-in-effect
//         setShow(false);

//         const timeout = setTimeout(() => {
//             setShow(true);
//         }, 50);

//         return () => clearTimeout(timeout);
//     }, [location.pathname]);

//     return (
//         <div className={`page ${show ? "show" : ""}`}>
//             {children}
//         </div>
//     );
// }

// export default PageWrapper;
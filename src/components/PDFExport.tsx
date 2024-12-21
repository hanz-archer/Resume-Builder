import React, {useRef} from "react";
import { useReactToPrint } from "react-to-print";

const PDFExport: React.FC = ({ children }) => {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return(
        <div>
            <div ref={componentRef}>{children}</div>
            <button onClick={handlePrint} className="btn">Export to PDF</button>
        </div>
    );
};
export default PDFExport;
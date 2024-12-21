import React, {ReactNode, useRef} from "react";
import { useReactToPrint } from "react-to-print";

interface PDFExportProps{
    children: ReactNode;
}

const PDFExport: React.FC <PDFExportProps> = ({ children }) => {

    const componentRef = useRef<HTMLDivElement>(null);
    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    } as any);

    return(
        <div>
            <div ref={componentRef}>{children}</div>
            <button onClick={handlePrint} className="btn">
            Export to PDF</button>
        </div>
    );
};
export default PDFExport;
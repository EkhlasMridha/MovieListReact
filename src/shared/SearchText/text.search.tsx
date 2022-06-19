import { useEffect, useMemo } from "react";
import * as _lodash from "lodash";

interface TextSearchProps {
    trigger: (search: any) => void;
    debounceTime?: number;
}

const DEFAULT_VALUE: Partial<TextSearchProps> = {
    debounceTime: 500
}

export const TextSearch = (props: TextSearchProps) => {
    const config = { ...DEFAULT_VALUE, ...props }
    useEffect(() => {
        return () => {
            debounceResult.cancel();
        }
    }, [])

    const debounceResult = useMemo(() => {
        return _lodash.debounce(config.trigger, config.debounceTime);
    }, []);

    return (
        <section style={{ marginBottom: "14px" }}>
            <label style={{ color: "#747474" }}>Filters</label>
            <div>
                <input placeholder="Movie Name" onKeyUp={debounceResult} />
            </div>
        </section>
    )
}